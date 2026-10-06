#!/usr/bin/env bash
set -euo pipefail

# Request the homepage once the server is listening to warm its dev compilation.
# Run this in the background so startup does not wait for the first compilation.
(
  if ! curl --fail --silent --show-error --output /dev/null \
    --retry 30 --retry-connrefused --retry-delay 1 \
    --retry-max-time 120 --max-time 120 http://127.0.0.1:3000/; then
    echo "Homepage warm-up failed; check /tmp/nextjs-dev.log for details." >&2
  fi
) &

exec npm run dev -- --hostname 0.0.0.0 --port 3000
