#!/usr/bin/env bash
# ARC Suspension Staging Site Packager
set -euo pipefail
echo "Packaging ARC Suspension high-density interactive staging site into ./_site ..."
mkdir -p _site
cp -r *.html *.css *.js assets fonts _site/ 2>/dev/null || true
echo "Built static staging site in _site:"
ls -la _site/
du -sh _site; find _site -type f | wc -l
