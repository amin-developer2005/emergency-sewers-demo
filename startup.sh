#!/bin/sh
# Revive the preview dev server. Idempotent: exit if :8080 is already healthy.
set -e
cd /workspace
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
npm run dev > /workspace/.grok/dev-server.log 2>&1 &
# Don't block revive on a long compile; the preview proxy retries.
exit 0
