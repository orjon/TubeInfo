#!/usr/bin/env bash
# Quick check that a running SetOff answers sensibly.
#   scripts/smoke-test.sh http://localhost:5006/setoff          (local or CI)
#   scripts/smoke-test.sh https://orjon.com/setoff --tfl        (live; also asks TfL)
# Waits up to 30 seconds for the server to come up, then checks each address.
set -u
BASE="${1:?usage: smoke-test.sh BASE_URL [--tfl]}"
BASE="${BASE%/}"
WITH_TFL="${2:-}"
failed=0

fetch() { curl -s -m 10 -o /tmp/smoke-body -w '%{http_code}' "$1"; }

# 1. wait for the server
for i in $(seq 1 30); do
  [ "$(fetch "$BASE/api/healthz")" = "200" ] && break
  [ "$i" = 30 ] && { echo "FAIL  $BASE/api/healthz never answered 200"; exit 1; }
  sleep 1
done

check() { # name, path, expected status, text the body must contain (optional)
  local code; code=$(fetch "$BASE$2")
  if [ "$code" != "$3" ]; then echo "FAIL  $1: $2 gave $code, wanted $3"; failed=1; return; fi
  if [ -n "${4:-}" ] && ! grep -q "$4" /tmp/smoke-body; then
    echo "FAIL  $1: $2 does not contain '$4'"; failed=1; return
  fi
  echo "ok    $1"
}

check "health check"        /api/healthz               200 '"ok":true'
check "web page"            /                      200 '<title>'
check "deep link"           /station/waterloo      200 '<title>'
check "PWA manifest"        /manifest.webmanifest  200 'short_name'
check "unknown api path"    /api/nope              404
check "missing asset"       /assets/missing.js     404
if [ "$WITH_TFL" = "--tfl" ]; then
  check "line statuses"     /api/statuses          200 '"statuses"'
  check "station arrivals"  /api/arrivals/940GZZLUWLO 200 '"arrivals"'
  check "unknown station"   /api/arrivals/nope     404
fi

if [ "$failed" = 0 ]; then
  echo "All checks passed."
else
  echo "Some checks FAILED."
  exit 1
fi
