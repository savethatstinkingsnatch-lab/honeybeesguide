#!/bin/sh
# Revive the preview after hibernate. Idempotent and non-blocking.
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
cd /workspace
nohup npm run dev > /tmp/dev-server.log 2>&1 &
exit 0
