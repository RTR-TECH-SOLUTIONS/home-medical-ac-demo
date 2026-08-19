"""
Regenerează fonturile subsetate din src/assets/fonts.

Se rulează o singură dată, la instalare, sau când se schimbă familiile de fonturi:

    pip install fonttools brotli
    npm install --no-save @fontsource/inter @fontsource/source-serif-4
    python3 scripts/build-fonts.py

Ce face: ia subseturile `latin` și `latin-ext` de la fontsource, le lipește într-un
singur fișier pe stil și taie tot ce nu folosim, păstrând latina de bază, diacriticele
românești (și varianta cu sedilă, pentru textele vechi) și punctuația tipografică.
Rezultă ~12 KB pe stil, față de ~60 KB cât ocupă cele două subseturi originale.
"""

import os
import tempfile

from fontTools.merge import Merger
from fontTools.subset import main as subset_main
from fontTools.ttLib.woff2 import decompress

UNICODES = (
    "U+0020-007E,U+00A0,U+00A9,U+00AB,U+00BB,U+00B0,U+00B7,"
    "U+00C2,U+00E2,U+00CE,U+00EE,U+0102,U+0103,U+015E,U+015F,U+0162,U+0163,"
    "U+0218,U+0219,U+021A,U+021B,"
    "U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+201E,U+2026,U+20AC"
)

INTER = "@fontsource/inter/files/inter-{subset}-{style}.woff2"
SERIF = "@fontsource/source-serif-4/files/source-serif-4-{subset}-{style}.woff2"

JOBS = [
    ("inter-400.woff2", INTER, "400-normal"),
    ("inter-500.woff2", INTER, "500-normal"),
    ("inter-600.woff2", INTER, "600-normal"),
    ("serif-600.woff2", SERIF, "600-normal"),
    ("serif-400-italic.woff2", SERIF, "400-italic"),
]

OUT_DIR = os.path.join("src", "assets", "fonts")


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    tmp = tempfile.mkdtemp()

    for out_name, template, style in JOBS:
        ttfs = []
        for subset in ("latin", "latin-ext"):
            source = os.path.join("node_modules", template.format(subset=subset, style=style))
            if not os.path.exists(source):
                raise SystemExit(f"Lipsește {source}. Instalează pachetele @fontsource.")
            ttf = os.path.join(tmp, f"{subset}-{style}-{out_name}.ttf")
            decompress(source, ttf)
            ttfs.append(ttf)

        merged = os.path.join(tmp, f"merged-{out_name}.ttf")
        Merger().merge(ttfs).save(merged)

        out_path = os.path.join(OUT_DIR, out_name)
        subset_main([
            merged,
            f"--unicodes={UNICODES}",
            "--flavor=woff2",
            "--layout-features=kern,liga,calt",
            f"--output-file={out_path}",
        ])
        print(f"{out_name}: {os.path.getsize(out_path)} B")


if __name__ == "__main__":
    main()
