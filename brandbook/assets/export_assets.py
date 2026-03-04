"""Export OpenAEC logo SVGs to PNG (multiple sizes) and PDF."""

from pathlib import Path

from svglib.svglib import svg2rlg
from reportlab.graphics import renderPDF, renderPM


BASE = Path(__file__).parent
SVG_DIR = BASE / "logo" / "svg"
PNG_DIR = BASE / "logo" / "png"
PDF_DIR = BASE / "logo" / "pdf"

PNG_DIR.mkdir(parents=True, exist_ok=True)
PDF_DIR.mkdir(parents=True, exist_ok=True)

# PNG export sizes (scale factors based on original SVG dimensions)
SIZES = {
    "1x": 1.0,
    "2x": 2.0,
    "3x": 3.0,
}


def export_svg(svg_path: Path) -> None:
    """Export a single SVG to PNG (multiple sizes) and PDF."""
    stem = svg_path.stem
    print(f"  Processing: {stem}")

    drawing = svg2rlg(str(svg_path))
    if drawing is None:
        print(f"    SKIP: could not parse {svg_path.name}")
        return

    # PDF export (vector, lossless)
    pdf_path = PDF_DIR / f"{stem}.pdf"
    renderPDF.drawToFile(drawing, str(pdf_path))
    print(f"    PDF: {pdf_path.name}")

    # PNG exports at multiple sizes
    for label, scale in SIZES.items():
        png_path = PNG_DIR / f"{stem}-{label}.png"
        renderPM.drawToFile(drawing, str(png_path), fmt="PNG", dpi=72 * scale)
        print(f"    PNG: {png_path.name}")


def main() -> None:
    """Export all SVG files in the logo/svg directory."""
    svgs = sorted(SVG_DIR.glob("*.svg"))
    if not svgs:
        print("No SVGs found in", SVG_DIR)
        return

    print(f"Found {len(svgs)} SVG files.\n")
    for svg_path in svgs:
        export_svg(svg_path)
        print()

    # Also export color palette
    palette_svg = BASE / "colors" / "color-palette.svg"
    if palette_svg.exists():
        print("Exporting color palette...")
        drawing = svg2rlg(str(palette_svg))
        if drawing:
            renderPDF.drawToFile(drawing, str(BASE / "colors" / "color-palette.pdf"))
            renderPM.drawToFile(drawing, str(BASE / "colors" / "color-palette.png"), fmt="PNG", dpi=144)
            print("  Done: color-palette.pdf + color-palette.png")

    print("\nAll exports complete.")


if __name__ == "__main__":
    main()
