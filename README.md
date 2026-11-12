# SetOff
### London train times: live line statuses and arrivals

A React app and a small Express server that collects [Transport for London API](https://api.tfl.gov.uk/) data and shows it through a simple clickable interface. It installs as a PWA.

Powered by TfL Open Data. Not affiliated with Transport for London.

## Develop

Needs Node 22 (`nvm use`) and [pnpm](https://pnpm.io) (`corepack enable`).

```sh
cp .env.example .env     # then fill in the TfL key and the Mapbox token
pnpm install
pnpm dev                 # app on http://localhost:5173/setoff/, API on :5005
pnpm build               # builds the client into client/dist
pnpm start               # server on :5005 serving the built client
scripts/smoke-test.sh http://localhost:5005/setoff
```

The app name is set by `VITE_APP_NAME`, `VITE_APP_SHORT_NAME` and `VITE_APP_TAGLINE` in `.env`.
Use `http://localhost:5173`, not `127.0.0.1`, because the Mapbox token only allows `localhost`.

## Station data

`data/stations.json` and `data/lineStations.json` are the stations the app starts with (the server
refreshes them from TfL about daily). Rebuild them with `pnpm refresh-data` after changing the lines in
`lib/lines.js`. Stations that TfL splits into several stops but passengers see as one (Edgware Road,
Hammersmith, Paddington) are merged by a hand-written list in `lib/mergedStations.js`.

## Tests

```sh
pnpm test          # server tests (tests/) and client tests (client/src/*.test.js), with Vitest
pnpm test:watch    # re-run server tests as you edit
```

The server tests call the Express app directly and replace `fetch`, so they never reach TfL; the
sample TfL responses they use are in `tests/fixtures/`. A test marked `.fails` documents a known
bug: when the bug is fixed the test turns red, and you delete the `.fails`.
`scripts/smoke-test.sh` is separate: it checks a *running* server (used in the deploy).

## Deployment

Pushing to `main` deploys to **orjon.com/setoff** (GitHub Action in `.github/workflows/deploy.yml`):
build, smoke test, copy to the droplet, restart, smoke test the live site.
nginx is configured in the [droplet-nginx](https://github.com/orjon/droplet-nginx) repo.

On the droplet the app lives in `/var/www/setoff` (server files, `.env`, `client/dist`) and runs
as the PM2 process `setoff` on port 5006. The old TubeInfo app is separate and is not touched.

### One-time setup

1. **Droplet.** As the deploy user: `mkdir -p /var/www/setoff`, make sure `pnpm` is available
   (`corepack enable`) and `pm2` is installed.
2. **`/var/www/setoff/.env`** (never committed):
   ```
   PORT=5006
   BASE_PATH=/setoff
   TFL_APP_KEY=...   # a TfL key not used by the other app
   ```
3. **nginx.** Merge the `/setoff` block from the droplet-nginx repo (it deploys itself on push).
4. **GitHub repo secrets** (Settings, Secrets and variables, Actions):
   `SSH_PRIVATE_KEY`, `DROPLET_IP`, `DROPLET_USER` (same values as the verbi repo) and
   `MAPBOX_TOKEN` (a public `pk.` token restricted to `https://orjon.com`).
   Optional variables: `APP_NAME`, `APP_SHORT_NAME`, `APP_TAGLINE`.

### Statuses / Home 
Shows Underground line statuses in cards.
 - Cards are links to line information pages
![Screen shot](/screenshots/screenshot-status.jpg)

### Line information
Line information and list of stations served
 - Stations and their lines are all clickable

Features to add:
 - Display line information and statistics.
 - Route diagram
![Screen shot](/screenshots/screenshot-line.jpg)

### Station information
Station information page with upcoming expected train arrival for each line served, list of available facilites and location on map.
 - Line headers are clickable links to line information pages.
 - Interactive map is rendered with Mapbox.
![Screen shot](/screenshots/screenshot-station.jpg)

### Header
The header is always displayed. Clicking on the App title links to Statuses / Home.
The current local time and date are displayed top-right