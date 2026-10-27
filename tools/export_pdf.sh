#!/usr/bin/env bash
# Exporta el deck a PDF: captura cada diapositiva (node capturas.mjs) y
# las empaqueta en un PDF de 16:9 con las utilidades de macOS (sips + join.py).
# Uso:  node capturas.mjs && ./export_pdf.sh
set -e
cd "$(dirname "$0")"

SLIDES=out/slides
TMP=out/pdf-tmp
SALIDA=../docs/pildora-docker-compose-microservicios.pdf

rm -rf "$TMP" && mkdir -p "$TMP"

for png in "$SLIDES"/slide-*.png; do
  sips -s format pdf "$png" --out "$TMP/$(basename "${png%.png}").pdf" >/dev/null
done

# join.py de Automator ya no existe en macOS: fusionamos con pypdf
python3 - "$SALIDA" "$TMP" <<'EOF'
import sys
from pypdf import PdfWriter
salida, tmp = sys.argv[1], sys.argv[2]
from pathlib import Path
w = PdfWriter()
for f in sorted(Path(tmp).glob("slide-*.pdf")):
    w.append(str(f))
with open(salida, "wb") as fh:
    w.write(fh)
EOF
rm -rf "$TMP"
echo "OK: $SALIDA ($(ls "$SLIDES"/slide-*.png | wc -l | tr -d ' ') páginas)"
