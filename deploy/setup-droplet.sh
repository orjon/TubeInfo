#!/usr/bin/env bash
# One-time setup of the `setoff` user on the droplet. Run it ONCE as root (or with sudo):
#
#   ssh <your-admin-login>@46.101.44.86 'sudo bash -s' < deploy/setup-droplet.sh
#
# It is safe to run again. It creates:
#   - a `setoff` user with no password and no sudo, which can only log in with the deploy key
#   - /var/www/setoff, owned by that user (the GitHub Action deploys here)
#   - Node 22, pnpm and pm2 for that user only (nothing is changed for other users or sites)
#   - a PM2 process list that starts again after a reboot
# It does not touch nginx or any other site.
set -euo pipefail

APP_USER=setoff
APP_DIR=/var/www/setoff
NVM_VERSION=v0.40.1
# The PUBLIC half of the key stored in GitHub as SSH_PRIVATE_KEY (safe to keep in git)
PUBLIC_KEY="${1:-ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICrpI0T0HV3Zl/DDVcOMPJCpIjcf/hqsjmUGbRBJ7GH3 setoff-deploy (github actions, orjon/TubeInfo)}"

[ "$(id -u)" = 0 ] || { echo "Run as root (use sudo)."; exit 1; }

echo "1/5 user"
id "$APP_USER" >/dev/null 2>&1 || adduser --disabled-password --gecos "SetOff deploy" "$APP_USER"

echo "2/5 deploy key"
install -d -m 700 -o "$APP_USER" -g "$APP_USER" "/home/$APP_USER/.ssh"
touch "/home/$APP_USER/.ssh/authorized_keys"
grep -qxF "$PUBLIC_KEY" "/home/$APP_USER/.ssh/authorized_keys" || echo "$PUBLIC_KEY" >> "/home/$APP_USER/.ssh/authorized_keys"
chmod 600 "/home/$APP_USER/.ssh/authorized_keys"
chown "$APP_USER:$APP_USER" "/home/$APP_USER/.ssh/authorized_keys"

echo "3/5 app folder"
install -d -m 755 -o "$APP_USER" -g "$APP_USER" "$APP_DIR" "$APP_DIR/client"
if [ ! -f "$APP_DIR/.env" ]; then
  cat > "$APP_DIR/.env" <<'ENV'
PORT=5006
BASE_PATH=/setoff
# Put the SECONDARY TfL key here (the old TubeInfo app keeps the primary):
TFL_APP_KEY=
ENV
  chown "$APP_USER:$APP_USER" "$APP_DIR/.env"
  chmod 600 "$APP_DIR/.env"
  echo "    created $APP_DIR/.env, now edit it and add TFL_APP_KEY"
fi

echo "4/5 Node, pnpm and pm2 for $APP_USER"
sudo -u "$APP_USER" -H bash -s "$NVM_VERSION" <<'AS_USER'
set -euo pipefail
export NVM_DIR="$HOME/.nvm"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  curl -fsSL "https://raw.githubusercontent.com/nvm-sh/nvm/$1/install.sh" | bash
fi
. "$NVM_DIR/nvm.sh"
nvm install 22
nvm alias default 22
corepack enable
npm install --global pm2
AS_USER

echo "5/5 start pm2 on boot"
NODE_BIN="$(sudo -u "$APP_USER" -H bash -lc 'dirname "$(command -v node)"')"
env PATH="$PATH:$NODE_BIN" "$NODE_BIN/pm2" startup systemd -u "$APP_USER" --hp "/home/$APP_USER" >/dev/null

echo
echo "Done. Next:"
echo "  1. edit $APP_DIR/.env and set TFL_APP_KEY"
echo "  2. merge the /setoff block in the droplet-nginx repo"
echo "  3. push to main in the TubeInfo repo: the GitHub Action deploys and starts pm2 process 'setoff'"
