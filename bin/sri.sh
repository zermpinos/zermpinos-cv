#!/usr/bin/env bash
set -euo pipefail
for f in public/styles.css public/jspdf.umd.min.js public/cv-generator.js public/script.js public/cv-data.js public/explore.css public/game.js; do
    H=$(openssl dgst -sha384 -binary "$f" | openssl base64 -A)
    printf '%-30s sha384-%s\n' "$f" "$H"
done
