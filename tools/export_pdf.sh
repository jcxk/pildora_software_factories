#!/usr/bin/env bash
# Exporta el deck a PDF: captura cada diapositiva (sin el HUD del timer) y
# las empaqueta en un PDF de 16:9 con las utilidades de macOS (sips + pypdf).
# Uso:  ./export_pdf.sh
set -e
cd "$(dirname "$0")"

SLIDES=out/slides-pdf
TS=$(date +%Y%m%d)
SALIDA=../docs/pdf/software-factories-con-ia_$TS.pdf

rm -rf "$SLIDES" && mkdir -p "$SLIDES" "$(dirname "$SALIDA")"
HIDE_HUD=1 node capturas.mjs "$SLIDES" >/dev/null

TMP=out/pdf-tmp
rm -rf "$TMP" && mkdir -p "$TMP"
for png in "$SLIDES"/slide-*.png; do
  sips -s format pdf "$png" --out "$TMP/$(basename "${png%.png}").pdf" >/dev/null
done

# Fusionamos con pypdf
python3 - "$SALIDA" "$TMP" <<'EOF'
import sys
from pypdf import PdfWriter
salida, tmp = sys.argv[1], sys.argv[2]
from pathlib import Path
w = PdfWriter()
for f in sorted(Path(tmp).glob('slide-*.pdf')):
    w.append(str(f))
with open(salida, 'wb') as fh:
    w.write(fh)
EOF
rm -rf "$TMP"
# solo queda la versión más reciente en docs/pdf/ y la portada apunta a ella
find "$(dirname "$SALIDA")" -name 'software-factories-con-ia_*.pdf' ! -path "$SALIDA" -delete
sed -i '' "s|pdf/software-factories-con-ia[^\"']*\.pdf|pdf/$(basename "$SALIDA")|" ../docs/index.html
echo "OK: $SALIDA ($(ls "$SLIDES"/slide-*.png | wc -l | tr -d ' ') páginas)"
