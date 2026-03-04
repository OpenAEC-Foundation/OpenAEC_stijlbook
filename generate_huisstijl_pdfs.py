"""Genereer OpenAEC huisstijl PDFs: lege brief + rapport voorblad."""

from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# ── Paden ──────────────────────────────────────────────────────────────
TENANT_ROOT = Path(
    r"X:\10_3BM_bouwkunde\50_Claude-Code-Projects"
    r"\Report_generator\tenants\openaec_foundation"
)
FONT_DIR = TENANT_ROOT / "fonts"
LOGO_DIR = TENANT_ROOT / "logos"
STATIONERY_DIR = TENANT_ROOT / "stationery"
OUTPUT_DIR = Path(
    r"X:\10_3BM_bouwkunde\50_Claude-Code-Projects\open_AEC"
)

# ── Fonts registreren ──────────────────────────────────────────────────
_FONTS = {
    "SpaceGrotesk-Bold": "SpaceGrotesk-Bold.ttf",
    "SpaceGrotesk-Medium": "SpaceGrotesk-Medium.ttf",
    "SpaceGrotesk-Regular": "SpaceGrotesk-Regular.ttf",
    "Inter-Regular": "Inter-Regular.ttf",
    "Inter-Medium": "Inter-Medium.ttf",
    "Inter-SemiBold": "Inter-SemiBold.ttf",
    "Inter-Bold": "Inter-Bold.ttf",
}
for name, filename in _FONTS.items():
    pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / filename)))

# ── Kleuren (conform DESIGN-SYSTEM.md) ────────────────────────────────
AMBER = HexColor("#D97706")           # Construction Amber — primary
DEEP_FORGE = HexColor("#36363E")      # Deep Forge — dark backgrounds
SIGNAL_ORANGE = HexColor("#EA580C")   # Signal Orange — CTAs
WARM_GOLD = HexColor("#F59E0B")       # Warm Gold — highlights
SCAFFOLD_GRAY = HexColor("#A1A1AA")   # Scaffold Gray — secondary text
BLUEPRINT_WHITE = HexColor("#FAFAF9") # Blueprint White — light bg
CONCRETE = HexColor("#F5F5F4")        # Concrete — cards
NIGHT_BUILD = HexColor("#2A2A32")     # Night Build — darkest bg
SEPARATOR = HexColor("#E7E5E4")       # Border color

# ── Pagina-afmetingen ──────────────────────────────────────────────────
W, H = A4  # 595.28, 841.89 pt


def _draw_header(c: canvas.Canvas, logo_path: Path) -> float:
    """Teken de OpenAEC header zone. Retourneert y-positie onder de header."""
    header_h = 107.7  # pt (38mm)
    header_y = H - header_h

    # Deep Forge achtergrond
    c.setFillColor(DEEP_FORGE)
    c.rect(0, header_y, W, header_h, fill=1, stroke=0)

    # Report header illustratie (rechts, 35% opacity)
    illustration = STATIONERY_DIR / "report-header-dark-2x.png"
    if illustration.exists():
        c.saveState()
        c.setFillAlpha(0.35)
        img_w = 395
        img_h = img_w * (400 / 1040)  # aspect ratio
        c.drawImage(
            str(illustration),
            200,
            header_y,
            width=img_w,
            height=img_h,
            mask="auto",
            preserveAspectRatio=True,
        )
        c.restoreState()

    # Amber gradient strip (3.2pt) aan onderkant van header
    c.setFillColor(AMBER)
    c.rect(0, header_y, W, 3.2, fill=1, stroke=0)

    # Logo linksboven in header
    logo_w = 100
    logo_h = logo_w * (240 / 960)  # aspect ratio 960×240
    c.drawImage(
        str(logo_path),
        34,
        H - 76,
        width=logo_w,
        height=logo_h,
        mask="auto",
        preserveAspectRatio=True,
    )

    return header_y


def _draw_footer(c: canvas.Canvas) -> float:
    """Teken de OpenAEC footer zone. Retourneert y-positie boven de footer."""
    footer_h = 42.5  # pt

    # Deep Forge achtergrond
    c.setFillColor(DEEP_FORGE)
    c.rect(0, 0, W, footer_h, fill=1, stroke=0)

    # Amber gradient strip (2.1pt) aan bovenkant van footer
    c.setFillColor(AMBER)
    c.rect(0, footer_h, W, 2.1, fill=1, stroke=0)

    # "OpenAEC" wordmark links
    c.saveState()
    c.setFont("SpaceGrotesk-Bold", 7.5)
    c.setFillColor(BLUEPRINT_WHITE)
    c.drawString(34, 18, "OpenAEC")
    c.restoreState()

    # "openaec.org" rechts
    c.saveState()
    c.setFont("Inter-Medium", 7.0)
    c.setFillColor(AMBER)
    c.drawRightString(W - 34, 18, "openaec.org")
    c.restoreState()

    return footer_h + 2.1


# ═══════════════════════════════════════════════════════════════════════
# 1. LEGE BRIEF — OpenAEC briefpapier
# ═══════════════════════════════════════════════════════════════════════
def create_brief(output_path: Path) -> None:
    """Maak een lege brief met OpenAEC huisstijl."""
    c = canvas.Canvas(str(output_path), pagesize=A4)

    logo = LOGO_DIR / "openaec-logo-amber-on-dark-2x.png"

    # ── Header ──
    header_y = _draw_header(c, logo)

    # ── Contactgegevens rechts (onder header) ──
    contact_x = 400
    contact_top = header_y - 20
    line_h = 13
    c.saveState()

    contact_lines = [
        ("SpaceGrotesk-Bold", "Stichting OpenAEC Foundation"),
        ("Inter-Regular", ""),
        ("Inter-Regular", "openaec.org"),
        ("Inter-Regular", "info@openaec.org"),
    ]
    for i, (font, line) in enumerate(contact_lines):
        c.setFont(font, 8)
        c.setFillColor(DEEP_FORGE)
        c.drawString(contact_x, contact_top - i * line_h, line)
    c.restoreState()

    # ── Dunne scheidingslijn ──
    c.setStrokeColor(SEPARATOR)
    c.setLineWidth(0.5)
    sep_y = header_y - 80
    c.line(56, sep_y, W - 56, sep_y)

    # ── Datumveld rechtsboven (onder separator) ──
    c.saveState()
    c.setFont("Inter-Regular", 9.5)
    c.setFillColor(DEEP_FORGE)
    c.drawRightString(W - 56, sep_y - 25, "[Datum]")
    c.restoreState()

    # ── Referentievelden links ──
    c.saveState()
    c.setFont("Inter-Regular", 7.5)
    c.setFillColor(SCAFFOLD_GRAY)
    ref_labels = ["Reference", "Your reference", "Author"]
    for i, label in enumerate(ref_labels):
        c.drawString(56, sep_y - 25 - i * 13, f"{label}:")
    c.restoreState()

    # ── Footer ──
    _draw_footer(c)

    c.save()
    print(f"  Brief: {output_path}")


# ═══════════════════════════════════════════════════════════════════════
# 2. RAPPORT VOORBLAD — OpenAEC cover page
# ═══════════════════════════════════════════════════════════════════════
def create_voorblad(output_path: Path) -> None:
    """Maak een rapport voorblad met OpenAEC huisstijl."""
    c = canvas.Canvas(str(output_path), pagesize=A4)

    # ── 1. Deep Forge achtergrondvlak (bovenste ~67%) ──
    bg_y = 280.0
    bg_h = 561.89
    c.setFillColor(DEEP_FORGE)
    c.rect(0, bg_y, W, bg_h, fill=1, stroke=0)

    # ── 2. Amber gradient strip aan onderkant donker vlak ──
    c.setFillColor(AMBER)
    c.rect(0, 277.0, W, 3.0, fill=1, stroke=0)

    # ── 3. Hero illustratie (30% opacity) ──
    hero = STATIONERY_DIR / "hero-banner-dark-2x.png"
    if hero.exists():
        c.saveState()
        c.setFillAlpha(0.30)
        hero_w = W
        hero_h = hero_w * (800 / 2400)  # aspect ratio
        c.drawImage(
            str(hero),
            0,
            H - hero_h,
            width=hero_w,
            height=hero_h,
            mask="auto",
            preserveAspectRatio=True,
        )
        c.restoreState()

    # ── 4. Logo linksboven (amber-on-dark) ──
    logo = LOGO_DIR / "openaec-logo-amber-on-dark-2x.png"
    logo_w = 140
    logo_h = logo_w * (240 / 960)
    c.drawImage(
        str(logo),
        56,
        770,
        width=logo_w,
        height=logo_h,
        mask="auto",
        preserveAspectRatio=True,
    )

    # ── 5. Tagline onder logo ──
    c.saveState()
    c.setFont("SpaceGrotesk-Medium", 10.0)
    c.setFillColor(SCAFFOLD_GRAY)
    c.drawString(56, 750, "Build free. Build together.")
    c.restoreState()

    # ── 6. Website URL rechtsboven ──
    c.saveState()
    c.setFont("Inter-Medium", 11.0)
    c.setFillColor(AMBER)
    c.drawRightString(490, 785, "openaec.org")
    c.restoreState()

    # ── 7. Badges ──
    badges = [
        ("OPEN SOURCE", AMBER, BLUEPRINT_WHITE, 300, 310, 120, 32),
        ("ENGINEERING", NIGHT_BUILD, BLUEPRINT_WHITE, 432, 310, 108, 32),
    ]
    badge_radius = 8
    badge_font_size = 9.0

    for label, bg_color, text_col, x, y, bw, bh in badges:
        c.saveState()
        c.setFillColor(bg_color)
        r = min(badge_radius, bh / 2)
        c.roundRect(x, y, bw, bh, r, fill=1, stroke=0)

        c.setFont("Inter-SemiBold", badge_font_size)
        c.setFillColor(text_col)
        text_w = c.stringWidth(label, "Inter-SemiBold", badge_font_size)
        text_x = x + (bw - text_w) / 2
        text_y = y + (bh - badge_font_size) / 2 + badge_font_size * 0.15
        c.drawString(text_x, text_y, label)
        c.restoreState()

    # ── 8. Titel placeholder (wit gebied onder donker vlak) ──
    c.saveState()
    c.setFont("SpaceGrotesk-Bold", 28.0)
    c.setFillColor(DEEP_FORGE)
    c.drawString(54.0, 95.0, "[Project Title]")
    c.restoreState()

    # ── 9. Ondertitel placeholder ──
    c.saveState()
    c.setFont("Inter-Regular", 16.0)
    c.setFillColor(SCAFFOLD_GRAY)
    c.drawString(54.0, 65.0, "[Report subtitle]")
    c.restoreState()

    c.save()
    print(f"  Voorblad: {output_path}")


# ═══════════════════════════════════════════════════════════════════════
# Main
# ═══════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    print("Genereren OpenAEC huisstijl PDFs...")
    create_brief(OUTPUT_DIR / "OpenAEC_Lege_Brief.pdf")
    create_voorblad(OUTPUT_DIR / "OpenAEC_Rapport_Voorblad.pdf")
    print("Klaar!")
