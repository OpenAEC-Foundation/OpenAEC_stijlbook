# OpenAEC Foundation — Layout Specifications

> Version 0.1 — March 2026
> Detailed layout templates for websites, web-based tools, and desktop applications.
> All tokens reference `DESIGN-SYSTEM.md`. Print layouts (A4 report, letter, email) remain in `DESIGN-SYSTEM.md` sections 4.3–4.5.

---

## 0. Shared Foundations

### 0.1 Grid System

```
GRID:
  columns:        12
  max-width:      1200px
  gutter:         24px (--sp-6)
  column-gap:     24px (--sp-6)
  margin (mobile): 16px (--sp-4) each side

COLUMN MATH:
  1 col:  calc((100% - 11 × 24px) / 12)
  span-N: N columns + (N - 1) gutters
  Example span-4: 4 cols + 3 × 24px = ~33.3% of container
  Example span-6: 6 cols + 5 × 24px = 50% of container
  Example span-8: 8 cols + 7 × 24px = ~66.7% of container
```

### 0.2 Responsive Breakpoints

| Token | Width | Container max | Columns | Behavior |
|-------|-------|---------------|---------|----------|
| `sm` | ≥ 640px | 100% - 32px | 4 | Mobile landscape, small tablets |
| `md` | ≥ 768px | 720px | 8 | Tablets, sidebar collapses |
| `lg` | ≥ 1024px | 960px | 12 | Small desktop, sidebar visible |
| `xl` | ≥ 1280px | 1200px | 12 | Full desktop, max container |

**Mobile-first:** Default styles target `< 640px` (single column, full-width). Use `min-width` media queries to scale up.

### 0.3 Z-Index Scale

| Token | Value | Use |
|-------|-------|-----|
| `--z-base` | 0 | Default stacking |
| `--z-dropdown` | 10 | Dropdown menus, popovers |
| `--z-sticky` | 20 | Sticky headers, floating toolbar |
| `--z-sidebar` | 30 | Sidebar overlays (mobile) |
| `--z-navbar` | 40 | Fixed top navigation |
| `--z-modal-backdrop` | 50 | Modal background overlay |
| `--z-modal` | 60 | Modal dialog content |
| `--z-toast` | 70 | Toast notifications |
| `--z-tooltip` | 80 | Tooltips (always on top) |

### 0.4 Dark / Light Mode

All layouts support both modes. The swap rules:

| Light mode | Dark mode |
|------------|-----------|
| `--blueprint-white` (#FAFAF9) backgrounds | `--deep-forge` (#36363E) backgrounds |
| `--concrete` (#F5F5F4) surfaces | `#27272A` surfaces |
| `--deep-forge` text | `--blueprint-white` text |
| `1px solid #E7E5E4` borders | `1px solid #27272A` borders |
| `--shadow-sm/md/lg` shadows | Shadows disabled or reduced to 50% opacity |

Accent colors (`--amber`, `--signal-orange`, `--warm-gold`) remain the same in both modes.

---

## 1. Website Layouts

### 1.1 Landing Page

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR  [Logo]  [nav links ...]           [CTA button] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                     HERO SECTION                        │
│              ┌───────────────────────┐                  │
│              │  section label (mono) │                  │
│              │  H1 heading           │                  │
│              │  tagline paragraph    │                  │
│              │  [Primary] [Ghost]    │                  │
│              └───────────────────────┘                  │
│           (illustration at 30% opacity behind)          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FEATURE GRID (3 columns)                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ icon     │  │ icon     │  │ icon     │              │
│  │ title    │  │ title    │  │ title    │              │
│  │ text     │  │ text     │  │ text     │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  STATS / NUMBERS (dark section)                         │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │ 150+ │  │ 50+  │  │ 12   │  │ 99%  │               │
│  │ label │  │ label│  │ label│  │ label │               │
│  └──────┘  └──────┘  └──────┘  └──────┘               │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CTA SECTION (dark)                                     │
│  "Ready to contribute?" + [Primary button]              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER  [logo] [links]  [social]  [license]            │
└─────────────────────────────────────────────────────────┘
```

**Specs:**

```
NAVBAR:
  position: fixed top
  background: --deep-forge
  border-bottom: 1px solid #27272A
  height: 64px
  padding: 0 --sp-6
  z-index: --z-navbar
  brand: "Open" white + "AEC" --amber, Space Grotesk 700, 1.25rem
  nav links: Inter 500, 0.875rem, --scaffold-gray, hover → white
  CTA button: Primary Small (see Components 3.1)

HERO:
  background: --night-build
  padding: 96px 0 (--sp-24)
  text-align: center
  max-width: 800px (centered within container)
  section label: JetBrains Mono 500, 0.75rem, uppercase, --warm-gold, letter-spacing 0.1em
  h1: Space Grotesk 700, 3.5rem (desktop) / 2.5rem (mobile), white, --amber for keyword spans
  tagline: Inter 400, 1.25rem, --scaffold-gray, margin-top --sp-4
  buttons: margin-top --sp-8, gap --sp-4
  illustration: hero-banner-dark at 30% opacity, position absolute, full width

FEATURE GRID:
  background: --blueprint-white
  padding: 80px 0 (--sp-20)
  grid: 3 columns on lg+, 2 on md, 1 on sm
  gap: --sp-8
  card style: no border, text-align center
    icon: 48px, --amber stroke
    title: Space Grotesk 700, 1.25rem, margin-top --sp-4
    text: Inter 400, 0.875rem, --scaffold-gray, max-width 35ch

STATS SECTION:
  background: --deep-forge
  padding: 64px 0 (--sp-16)
  grid: 4 columns on lg+, 2 on md/sm
  gap: --sp-8
  number: Space Grotesk 700, 3rem, --amber
  label: Inter 400, 0.875rem, --scaffold-gray

CTA SECTION:
  background: --night-build
  padding: 80px 0 (--sp-20)
  text-align: center
  heading: Space Grotesk 700, 2rem, white
  button: Primary Large, margin-top --sp-8

FOOTER:
  background: --deep-forge
  border-top: 3px amber gradient
  padding: --sp-10 --sp-6
  grid: 4 columns on lg+ (brand | links | links | legal), stacked on mobile
  brand: logo-amber-on-dark, small variant
  links: Inter 400, 0.875rem, --scaffold-gray, hover → white
  legal: Inter 400, 0.75rem, --scaffold-gray
  bottom: separator 1px solid #27272A, padding-top --sp-6
    "CC BY-SA 4.0" + "Build free. Build together."
```

### 1.2 Documentation Page

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR  [Logo]  [nav links ...]        [search] [CTA]  │
├────────────┬────────────────────────────┬───────────────┤
│            │                            │               │
│  SIDEBAR   │  CONTENT                   │  TOC          │
│  260px     │  span-7 (~660px)           │  200px        │
│            │                            │               │
│  sections: │  breadcrumb                │  "On this     │
│  ▸ Getting │  H1 page title             │   page"       │
│    Started │  content...                │               │
│  ▸ Guides  │                            │  ▸ Section 1  │
│  ▸ API     │  prev/next nav             │  ▸ Section 2  │
│  ▸ ...     │                            │  ▸ Section 3  │
│            │                            │               │
├────────────┴────────────────────────────┴───────────────┤
│  FOOTER                                                 │
└─────────────────────────────────────────────────────────┘
```

**Specs:**

```
SIDEBAR:
  width: 260px (fixed)
  background: --blueprint-white (light) or --deep-forge (dark)
  border-right: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  padding: --sp-6 --sp-4
  position: sticky, top: 64px (below navbar)
  height: calc(100vh - 64px)
  overflow-y: auto

  section heading: JetBrains Mono 500, 0.65rem, uppercase, --scaffold-gray, letter-spacing 0.1em
  section margin-top: --sp-6
  link: Inter 400, 0.875rem, #57534E, padding --sp-2 --sp-3, border-radius --radius-sm
  link hover: background #E7E5E4
  link active: background --amber, color white, font-weight 500

CONTENT AREA:
  max-width: 720px
  padding: --sp-8 --sp-10
  margin: 0 auto (within its grid column)

  breadcrumb: Inter 400, 0.75rem, --scaffold-gray, " / " separator, last item --deep-forge
  h1: Space Grotesk 700, 2.5rem, margin-bottom --sp-4
  h2: Space Grotesk 700, 2rem, margin-top --sp-12, padding-top --sp-6, border-top 1px solid #E7E5E4
  h3: Space Grotesk 700, 1.5rem, margin-top --sp-8
  paragraphs: Inter 400, 1rem, line-height 1.6, max-width 70ch
  code blocks: as per Components 3.9
  tables: as per Components 3.4

  prev/next nav:
    margin-top: --sp-16
    border-top: 1px solid #E7E5E4
    padding-top: --sp-6
    display: flex, justify-content space-between
    link style: Inter 500, 0.875rem, --amber, hover → --signal-orange

TABLE OF CONTENTS (TOC):
  width: 200px (fixed)
  position: sticky, top: 88px (navbar + --sp-6)
  padding-left: --sp-6
  border-left: 1px solid #E7E5E4

  heading: JetBrains Mono 500, 0.65rem, uppercase, --scaffold-gray, "On this page"
  links: Inter 400, 0.8rem, #57534E, padding --sp-1 0, line-height 1.5
  active link: --amber, font-weight 500, border-left 2px solid --amber (offset -1px over parent border)

RESPONSIVE (< lg):
  Sidebar: hidden, toggled via hamburger menu (slides in as overlay, z-index --z-sidebar)
  TOC: hidden (collapsed into expandable section at top of content)
  Content: full width with padding --sp-4
```

### 1.3 About / Team Page

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR                                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  PAGE HEADER (dark)                                     │
│  section label + H1 + intro paragraph                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  MISSION / STORY SECTION                                │
│  ┌────────────────────┐  ┌───────────────────────┐      │
│  │  text content      │  │  illustration /       │      │
│  │  (span-6)          │  │  image (span-6)       │      │
│  └────────────────────┘  └───────────────────────┘      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TEAM GRID                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │  photo  │  │  photo  │  │  photo  │  │  photo  │   │
│  │  name   │  │  name   │  │  name   │  │  name   │   │
│  │  role   │  │  role   │  │  role   │  │  role   │   │
│  │  links  │  │  links  │  │  links  │  │  links  │   │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  CTA SECTION + FOOTER                                   │
└─────────────────────────────────────────────────────────┘
```

**Specs:**

```
PAGE HEADER:
  background: --night-build
  padding: 80px 0 (--sp-20)
  text-align: center
  section label: JetBrains Mono 500, 0.75rem, uppercase, --warm-gold
  h1: Space Grotesk 700, 3rem, white
  intro: Inter 400, 1.125rem, --scaffold-gray, max-width 60ch, margin 0 auto

MISSION SECTION:
  background: --blueprint-white
  padding: 80px 0 (--sp-20)
  grid: 2 columns (span-6 + span-6), gap --sp-10
  text side:
    h2: Space Grotesk 700, 2rem
    paragraphs: Inter 400, 1rem, line-height 1.7
  image side:
    border-radius: --radius-lg
    overflow: hidden
  responsive (< md): stack vertically, image first

TEAM GRID:
  background: --concrete
  padding: 80px 0 (--sp-20)
  section heading: centered, Space Grotesk 700, 2rem, margin-bottom --sp-10
  grid: 4 columns on xl, 3 on lg, 2 on md, 1 on sm
  gap: --sp-6

  team card:
    background: white
    border: 1px solid #E7E5E4
    border-radius: --radius-lg
    padding: --sp-6
    text-align: center
    hover: --shadow-md, border-color #D6D3D1

    photo: 96px × 96px, border-radius --radius-full, object-fit cover
    name: Space Grotesk 700, 1.125rem, margin-top --sp-4
    role: Inter 400, 0.875rem, --scaffold-gray
    links: icon row (GitHub, LinkedIn), --scaffold-gray, hover → --amber, margin-top --sp-3
```

### 1.4 Blog / News Page

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR                                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  PAGE HEADER                                            │
│  H1 + filter tags                                       │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FEATURED POST (full width)                             │
│  ┌──────────────────────────────────────────────────┐   │
│  │  image                     │  title + excerpt    │   │
│  │  (span-7)                  │  meta + read more   │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  POST GRID (3 columns)                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  image   │  │  image   │  │  image   │              │
│  │  tag     │  │  tag     │  │  tag     │              │
│  │  title   │  │  title   │  │  title   │              │
│  │  excerpt │  │  excerpt │  │  excerpt │              │
│  │  meta    │  │  meta    │  │  meta    │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
│  [  1  2  3  ...  →  ]  pagination                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FOOTER                                                 │
└─────────────────────────────────────────────────────────┘
```

**Specs:**

```
PAGE HEADER:
  background: --blueprint-white
  padding: 64px 0 --sp-8 (--sp-16 top, --sp-8 bottom)
  h1: Space Grotesk 700, 2.5rem
  filter tags: flex row, gap --sp-2, margin-top --sp-6
    tag style: as per Components 3.7, active tag → background --amber, color white, border-color --amber

FEATURED POST:
  grid: span-7 image + span-5 content, gap --sp-8
  border-radius: --radius-lg
  overflow: hidden
  background: white
  border: 1px solid #E7E5E4
  hover: --shadow-lg

  image: aspect-ratio 16/9, object-fit cover
  content padding: --sp-8
  tag: badge style (Components 3.6), Amber variant
  title: Space Grotesk 700, 1.75rem, margin-top --sp-3
  excerpt: Inter 400, 1rem, --scaffold-gray, line-clamp 3
  meta: Inter 400, 0.75rem, --scaffold-gray, margin-top --sp-4 (author + date)

  responsive (< md): stack vertically

POST GRID:
  padding: --sp-10 0
  grid: 3 columns on lg+, 2 on md, 1 on sm
  gap: --sp-6

  post card:
    background: white
    border: 1px solid #E7E5E4
    border-radius: --radius-lg
    overflow: hidden
    hover: --shadow-md, border-color #D6D3D1

    image: aspect-ratio 16/9, object-fit cover
    content padding: --sp-6
    tag: badge style, positioned margin-top --sp-3
    title: Space Grotesk 700, 1.25rem, margin-top --sp-2
    excerpt: Inter 400, 0.875rem, --scaffold-gray, line-clamp 2, margin-top --sp-2
    meta: Inter 400, 0.75rem, --scaffold-gray, margin-top --sp-4

PAGINATION:
  margin-top: --sp-10
  display: flex, justify-content center, gap --sp-1

  page button:
    width: 40px, height: 40px
    border-radius: --radius-md
    border: 1px solid #E7E5E4
    font: Inter 500, 0.875rem
    hover: border-color #D6D3D1, background --concrete
    active: background --amber, color white, border-color --amber
  prev/next: same size, with arrow icon
```

---

## 2. Web-based Tool Layouts

### 2.1 Dashboard

```
┌─────────────────────────────────────────────────────────┐
│  TOPBAR  [☰] [Logo]   [search...]   [notifications] [⚙]│
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ SIDEBAR  │  HEADER                                      │
│ 260px    │  H1 + description + [action button]          │
│          │                                              │
│ ┌──────┐ ├──────────────────────────────────────────────┤
│ │ nav  │ │                                              │
│ │ item │ │  KPI CARDS (4 columns)                       │
│ │ item │ │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
│ │ item │ │  │ metric │ │ metric │ │ metric │ │ metric ││
│ │      │ │  │ trend  │ │ trend  │ │ trend  │ │ trend  ││
│ │ ──── │ │  └────────┘ └────────┘ └────────┘ └────────┘│
│ │      │ │                                              │
│ │ item │ │  DATA AREA (2 columns)                       │
│ │ item │ │  ┌───────────────────┐ ┌────────────────┐   │
│ └──────┘ │  │ chart / table     │ │ activity feed  │   │
│          │  │ (span-8)          │ │ (span-4)       │   │
│          │  │                   │ │                │   │
│          │  └───────────────────┘ └────────────────┘   │
│          │                                              │
├──────────┴──────────────────────────────────────────────┤
```

**Specs:**

```
TOPBAR:
  position: fixed top
  height: 56px
  background: --deep-forge
  border-bottom: 1px solid #27272A
  padding: 0 --sp-4
  z-index: --z-navbar
  display: flex, align-items center

  hamburger (mobile): 32px touch target, --scaffold-gray, hover → white
  logo: symbol-amber-on-dark, 28px height
  search: Inter 400, 0.875rem, background #27272A, border-radius --radius-md, padding --sp-2 --sp-3
    width: 320px on lg+, icon-only on < md
    placeholder: --scaffold-gray
  right icons: --scaffold-gray, hover → white, gap --sp-4
  avatar: 32px circle, border 2px solid --amber

SIDEBAR:
  width: 260px (collapsible to 56px icon-only)
  background: --concrete (light) or --deep-forge (dark)
  border-right: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  height: calc(100vh - 56px)
  position: fixed, top: 56px
  overflow-y: auto
  padding: --sp-4 --sp-3
  transition: width 0.2s ease

  nav group label: JetBrains Mono 500, 0.65rem, uppercase, --scaffold-gray, letter-spacing 0.1em
  nav item: Inter 400, 0.875rem, padding --sp-2 --sp-3, border-radius --radius-sm, gap --sp-3
    icon: 20px, --scaffold-gray
    text: #57534E (light) or --scaffold-gray (dark)
    hover: background #E7E5E4 (light) or #27272A (dark)
    active: background --amber, color white, icon white
  separator: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark), margin --sp-3 0

  collapsed state (56px):
    icons centered, text hidden
    tooltip on hover: background --deep-forge, color white, --radius-sm

MAIN CONTENT:
  margin-left: 260px (or 56px when collapsed)
  padding: --sp-6
  transition: margin-left 0.2s ease

PAGE HEADER:
  display: flex, justify-content space-between, align-items center
  margin-bottom: --sp-6
  h1: Space Grotesk 700, 1.75rem
  description: Inter 400, 0.875rem, --scaffold-gray
  action button: Primary Default

KPI CARDS:
  grid: 4 columns on xl, 2 on md, 1 on sm
  gap: --sp-4

  kpi card:
    background: white (light) or #27272A (dark)
    border: 1px solid #E7E5E4
    border-radius: --radius-md
    padding: --sp-5
    label: Inter 500, 0.75rem, --scaffold-gray, uppercase
    value: Space Grotesk 700, 2rem, --deep-forge (light) or white (dark)
    trend: Inter 500, 0.75rem
      positive: --success + "↑"
      negative: --error + "↓"
      neutral: --scaffold-gray + "→"

DATA AREA:
  margin-top: --sp-6
  grid: span-8 + span-4, gap --sp-4
  responsive (< lg): stack to single column

  chart/table panel:
    background: white
    border: 1px solid #E7E5E4
    border-radius: --radius-lg
    padding: --sp-6
    header: Space Grotesk 700, 1.25rem + filter dropdown right

  activity feed:
    background: white
    border: 1px solid #E7E5E4
    border-radius: --radius-lg
    padding: --sp-6
    header: Space Grotesk 700, 1.25rem
    item: avatar (32px) + text (Inter 0.875rem) + time (Inter 0.75rem, --scaffold-gray)
    separator: 1px solid #F5F5F4

RESPONSIVE (< md):
  Sidebar: hidden, toggle via hamburger (overlay, z-index --z-sidebar)
  Topbar search: collapses to icon
  KPI cards: 2 → 1 column
  Data area: full width, stacked
```

### 2.2 Data Table / List View

```
┌─────────────────────────────────────────────────────────┐
│  TOPBAR                                                 │
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ SIDEBAR  │  PAGE HEADER                                 │
│          │  H1 + [+ New] button                         │
│          │                                              │
│          ├──────────────────────────────────────────────┤
│          │                                              │
│          │  TOOLBAR                                     │
│          │  [search] [filters ▾] [columns ▾]   [export] │
│          │                                              │
│          │  Applied filters: [tag ×] [tag ×] [clear]    │
│          │                                              │
│          ├──────────────────────────────────────────────┤
│          │                                              │
│          │  TABLE                                       │
│          │  ┌──┬──────────┬─────────┬────────┬────────┐ │
│          │  │☐ │ Name ↕   │ Status  │ Date   │ ⋮      │ │
│          │  ├──┼──────────┼─────────┼────────┼────────┤ │
│          │  │☐ │ Item 1   │ ● Actv  │ Mar 9  │ ⋮      │ │
│          │  │☐ │ Item 2   │ ○ Draft │ Mar 8  │ ⋮      │ │
│          │  │☐ │ Item 3   │ ● Actv  │ Mar 7  │ ⋮      │ │
│          │  └──┴──────────┴─────────┴────────┴────────┘ │
│          │                                              │
│          │  BULK ACTION BAR (when items selected)        │
│          │  "3 selected" [Delete] [Export] [Move ▾]     │
│          │                                              │
│          │  PAGINATION                                   │
│          │  "Showing 1-25 of 142"  [◀ 1 2 3 ... ▶]     │
│          │                                              │
├──────────┴──────────────────────────────────────────────┤
```

**Specs:**

```
TOOLBAR:
  background: white (light) or #27272A (dark)
  border: 1px solid #E7E5E4
  border-radius: --radius-lg --radius-lg 0 0
  padding: --sp-4
  display: flex, justify-content space-between, align-items center
  gap: --sp-3

  search input: as per Components 3.2, width 280px on lg+, flex-1 on sm
  filter button: Ghost button variant, Inter 500, 0.875rem
    dropdown: background white, border 1px solid #E7E5E4, --radius-md, --shadow-lg, z-index --z-dropdown
  column toggle: Ghost button
  export button: Secondary button variant

  applied filters row:
    margin-top: --sp-3
    display: flex, gap --sp-2, flex-wrap wrap
    filter tag: as per Components 3.7, with × close icon
    clear all: Inter 500, 0.75rem, --amber, hover → --signal-orange

TABLE:
  as per Components 3.4, with these additions:

  checkbox column: width 48px, center-aligned
    checkbox: 18px, border 2px solid #D6D3D1, --radius-sm
    checked: background --amber, border --amber, white checkmark
  sort header: cursor pointer, hover → --deep-forge
    sort icon: 14px, --scaffold-gray, active → --amber
  action column (⋮): width 48px, center-aligned
    menu: --shadow-lg, --radius-md, z-index --z-dropdown
    menu item: Inter 400, 0.875rem, padding --sp-2 --sp-4, hover → --concrete
    destructive item: color --error

  row hover: background #FAFAF9
  row selected: background #FEF3C7 (light amber tint)

BULK ACTION BAR:
  position: sticky, bottom 0
  background: --deep-forge
  color: white
  padding: --sp-3 --sp-4
  border-radius: --radius-lg
  margin: --sp-4
  display: flex, align-items center, gap --sp-4
  z-index: --z-sticky
  animation: slide-up 0.2s ease

  count: Inter 600, 0.875rem
  buttons: Ghost variant (white text, white border), destructive → border --error

PAGINATION:
  padding: --sp-4
  display: flex, justify-content space-between, align-items center
  info text: Inter 400, 0.875rem, --scaffold-gray
  page controls: same as Website pagination (section 1.4)

RESPONSIVE (< md):
  Table: horizontal scroll with sticky first column
  Toolbar: stack search above filters
  Bulk action bar: full width, centered
```

### 2.3 Form / Detail View

```
┌─────────────────────────────────────────────────────────┐
│  TOPBAR                                                 │
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ SIDEBAR  │  BREADCRUMB                                  │
│          │  Projects / Project Alpha / Edit              │
│          │                                              │
│          │  PAGE HEADER                                  │
│          │  H1 + status badge                            │
│          │                                              │
│          ├──────────────────────────────────────────────┤
│          │                                              │
│          │  FORM SECTIONS                                │
│          │                                              │
│          │  ┌─ General Information ─────────────────┐   │
│          │  │  [label]  [input field           ]    │   │
│          │  │  [label]  [input field           ]    │   │
│          │  │  [label]  [textarea              ]    │   │
│          │  └───────────────────────────────────────┘   │
│          │                                              │
│          │  ┌─ Configuration ──────────────────────┐    │
│          │  │  [label]  [select ▾       ]          │    │
│          │  │  [label]  [toggle]                   │    │
│          │  └───────────────────────────────────────┘   │
│          │                                              │
│          ├──────────────────────────────────────────────┤
│          │  ACTION BAR                                   │
│          │  [Delete]               [Cancel]  [Save]     │
│          │                                              │
├──────────┴──────────────────────────────────────────────┤
```

**Specs:**

```
BREADCRUMB:
  padding: --sp-4 0
  font: Inter 400, 0.875rem
  separator: " / " in --scaffold-gray
  items: --scaffold-gray, hover → --amber
  current item: --deep-forge, font-weight 500

PAGE HEADER:
  display: flex, align-items center, gap --sp-4
  margin-bottom: --sp-6
  h1: Space Grotesk 700, 1.75rem
  status badge: as per Components 3.6

FORM SECTIONS:
  max-width: 720px

  section:
    background: white (light) or #27272A (dark)
    border: 1px solid #E7E5E4
    border-radius: --radius-lg
    padding: --sp-6
    margin-bottom: --sp-6

    section title: Space Grotesk 700, 1.25rem, padding-bottom --sp-4, border-bottom 1px solid #E7E5E4
    fields: margin-top --sp-6

  field layout:
    display: grid, grid-template-columns 200px 1fr (on lg+), single column on sm
    gap: --sp-4 --sp-6
    align-items: start

    label: Inter 500, 0.875rem, padding-top --sp-3 (align with input text)
    required marker: --error, " *"
    input: as per Components 3.2
    hint: Inter 400, 0.75rem, --scaffold-gray, margin-top --sp-1
    error: Inter 400, 0.75rem, --error, margin-top --sp-1

  toggle:
    width: 44px, height: 24px
    border-radius: --radius-full
    background: #D6D3D1 (off) or --amber (on)
    thumb: 20px circle, white, --shadow-sm
    transition: all 0.15s ease

ACTION BAR:
  position: sticky, bottom 0
  background: white (light) or --deep-forge (dark)
  border-top: 1px solid #E7E5E4
  padding: --sp-4 --sp-6
  display: flex, justify-content space-between
  z-index: --z-sticky

  left: destructive actions (Delete → Ghost button, color --error)
  right: Cancel (Secondary) + Save (Primary), gap --sp-3

RESPONSIVE (< md):
  Form field layout: stack to single column
  Action bar: buttons stack or reduce to icon + label
  Breadcrumb: truncate middle items with "..."
```

### 2.4 Settings Page

```
┌─────────────────────────────────────────────────────────┐
│  TOPBAR                                                 │
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ SIDEBAR  │  PAGE HEADER                                 │
│          │  "Settings"                                   │
│          │                                              │
│          ├──────────┬───────────────────────────────────┤
│          │          │                                   │
│          │ SETTINGS │  SETTINGS CONTENT                 │
│          │ NAV      │                                   │
│          │ 200px    │  Section title                    │
│          │          │  Description text                 │
│          │ ▸ General│                                   │
│          │ ▸ Profile│  ┌─ form fields ──────────────┐   │
│          │ ▸ Team   │  │  [label]  [input       ]   │   │
│          │ ▸ Billing│  │  [label]  [select ▾    ]   │   │
│          │ ▸ API    │  └────────────────────────────┘   │
│          │ ▸ Danger │                                   │
│          │          │  [Save changes]                   │
│          │          │                                   │
├──────────┴──────────┴───────────────────────────────────┤
```

**Specs:**

```
SETTINGS NAV:
  width: 200px
  position: sticky, top: 80px
  padding-right: --sp-6
  border-right: 1px solid #E7E5E4

  link: Inter 400, 0.875rem, #57534E, padding --sp-2 --sp-3, border-radius --radius-sm
  link hover: background --concrete
  link active: color --amber, font-weight 500, border-right 2px solid --amber (offset -1px)
  link destructive ("Danger Zone"): color --error

SETTINGS CONTENT:
  padding-left: --sp-8
  max-width: 640px

  section:
    margin-bottom: --sp-12
    title: Space Grotesk 700, 1.5rem
    description: Inter 400, 0.875rem, --scaffold-gray, margin-top --sp-2, margin-bottom --sp-6

  form fields: same as Form/Detail (section 2.3)
  save button: Primary Default, margin-top --sp-6

  danger zone:
    border: 2px solid --error
    border-radius: --radius-lg
    padding: --sp-6
    title: Space Grotesk 700, 1.25rem, --error
    description: Inter 400, 0.875rem, --scaffold-gray
    button: Ghost variant with --error color scheme

RESPONSIVE (< md):
  Settings nav: horizontal scrollable tab bar at top (below page header)
  Settings content: full width, padding --sp-4
```

---

## 3. Desktop Tool Layouts

### 3.1 Workspace

```
┌─────────────────────────────────────────────────────────┐
│  TITLEBAR  [≡] [Logo OpenAEC]    [project name]   [─□×]│
├──────────┬──────────────────────────────────────────────┤
│          │  TOOLBAR                                     │
│          │  [icon][icon][icon] │ [icon][icon] │ [zoom ▾]│
│ SIDEBAR  ├──────────────────────────────────────────────┤
│ 260px    │                                              │
│          │                                              │
│ ┌──────┐ │              CANVAS / EDITOR                 │
│ │ tree │ │                                              │
│ │ nav  │ │         (main working area)                  │
│ │      │ │                                              │
│ │      │ │                                              │
│ │      │ │                                              │
│ └──────┘ │                                              │
│          │                                              │
├──────────┴──────────────────────────────────────────────┤
│  STATUSBAR  [branch: main] [errors: 0]  [Ln 42, Col 8] │
└─────────────────────────────────────────────────────────┘
```

**Specs:**

```
TITLEBAR:
  height: 32px
  background: --deep-forge
  border-bottom: 1px solid #27272A
  display: flex, align-items center
  -webkit-app-region: drag (for frameless windows)

  hamburger: 16px icon, --scaffold-gray, hover → white, no-drag
  brand: symbol-amber-on-dark (20px) + "OpenAEC" Inter 600 0.75rem, white
  project name: Inter 400, 0.75rem, --scaffold-gray, centered (flex-1)
  window controls: 46px × 32px each, --scaffold-gray icons
    hover close: background --error, icon white
    hover maximize/minimize: background #27272A

TOOLBAR:
  height: 40px
  background: --concrete (light) or #27272A (dark)
  border-bottom: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  padding: 0 --sp-3
  display: flex, align-items center, gap --sp-1

  tool button:
    width: 32px, height: 32px
    border-radius: --radius-sm
    background: transparent
    icon: 18px, --deep-forge (light) or --scaffold-gray (dark)
    hover: background #E7E5E4 (light) or #36363E (dark)
    active: background --amber, icon white
    disabled: opacity 0.3

  separator: 1px solid #E7E5E4 (light) or #27272A (dark), height 24px, margin 0 --sp-2
  dropdown: Inter 400, 0.75rem, --radius-sm, min-width 80px

SIDEBAR:
  width: 260px (collapsible to 0)
  background: --concrete (light) or --deep-forge (dark)
  border-right: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  resize handle: 4px wide, cursor col-resize, hover → --amber background (2px)

  tree view:
    padding: --sp-3
    node: Inter 400, 0.8rem, padding --sp-1 --sp-2, border-radius --radius-sm
    node indent: 16px per level
    expand arrow: 12px, --scaffold-gray, rotate 90° when open
    icon: 16px, colored by file type (--amber for primary, --scaffold-gray for others)
    node hover: background #E7E5E4 (light) or #27272A (dark)
    node selected: background --amber, color white
    node rename: inline input, border 1px solid --amber

CANVAS / EDITOR:
  background: --blueprint-white (light) or --night-build (dark)
  flex: 1 (takes all remaining space)
  overflow: auto
  min-width: 400px

  empty state:
    centered content
    icon: 64px, --scaffold-gray at 40% opacity
    title: Inter 500, 1rem, --scaffold-gray
    hint: Inter 400, 0.875rem, --scaffold-gray at 60%
    action: Ghost button

STATUSBAR:
  height: 24px
  background: --deep-forge
  border-top: 1px solid #27272A
  padding: 0 --sp-3
  display: flex, align-items center, justify-content space-between
  font: JetBrains Mono 400, 0.7rem, --scaffold-gray

  left items: gap --sp-4 (branch, errors/warnings with colored dots)
  right items: gap --sp-4 (cursor position, encoding, language)
  clickable items: hover → white, cursor pointer

MINIMUM WINDOW SIZE: 800 × 600px
KEYBOARD SHORTCUT ZONES:
  Global: Ctrl+S (save), Ctrl+Z/Y (undo/redo), Ctrl+Shift+P (command palette)
  Sidebar: Ctrl+B (toggle), Ctrl+Shift+E (focus explorer)
  Canvas: tool-specific shortcuts
  All shortcuts visible in tooltip on hover (after 500ms delay)
```

### 3.2 Inspector Panel

```
┌──────────────────────────────────────────┬─────────────┐
│                                          │  INSPECTOR  │
│                                          │  280px      │
│                                          │             │
│           CANVAS / EDITOR                │  [tabs]     │
│                                          │  Properties │
│           (element selected)             │  ┌────────┐ │
│                                          │  │ name   │ │
│                ┌─────┐                   │  │ type   │ │
│                │ sel │                   │  │ x / y  │ │
│                └─────┘                   │  │ w / h  │ │
│                                          │  │ color  │ │
│                                          │  └────────┘ │
│                                          │             │
│                                          │  Styles     │
│                                          │  ┌────────┐ │
│                                          │  │ ...    │ │
│                                          │  └────────┘ │
│                                          │             │
└──────────────────────────────────────────┴─────────────┘
```

**Specs:**

```
INSPECTOR PANEL:
  width: 280px (resizable, min 220px, max 400px)
  background: --concrete (light) or --deep-forge (dark)
  border-left: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  overflow-y: auto

  resize handle: 4px wide (left edge), cursor col-resize, hover → --amber (2px)

TAB BAR:
  background: transparent
  border-bottom: 1px solid #E7E5E4
  display: flex

  tab:
    padding: --sp-2 --sp-4
    font: Inter 500, 0.75rem
    color: --scaffold-gray
    border-bottom: 2px solid transparent
    hover: color --deep-forge (light) or white (dark)
    active: color --amber, border-bottom-color --amber

PROPERTY SECTION:
  padding: --sp-4

  section header:
    display: flex, justify-content space-between, align-items center
    font: Inter 600, 0.75rem, uppercase, --scaffold-gray, letter-spacing 0.05em
    collapsible: click to toggle, arrow icon 12px
    margin-bottom: --sp-3

  property row:
    display: grid, grid-template-columns 90px 1fr
    gap: --sp-2
    margin-bottom: --sp-2
    align-items: center

    label: Inter 400, 0.75rem, --scaffold-gray, text-overflow ellipsis
    value input: Inter 400, 0.75rem, padding --sp-1 --sp-2
      background: transparent
      border: 1px solid transparent
      border-radius: --radius-sm
      hover: border-color #E7E5E4
      focus: border-color --amber, background white

  number input (compact):
    width: 56px
    text-align: right
    scrub: drag horizontally to change value (cursor: ew-resize)

  color input:
    16px × 16px swatch + hex value
    click: opens color picker popover (z-index --z-dropdown)

  linked inputs (x/y, w/h):
    chain icon between fields → click to link/unlink proportional editing

SECTION SEPARATOR: 1px solid #E7E5E4, margin --sp-4 0

EMPTY STATE (no selection):
  centered, padding --sp-8
  icon: 32px, --scaffold-gray at 30%
  text: Inter 400, 0.8rem, --scaffold-gray, "Select an element to inspect"
```

### 3.3 Modal / Dialog

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│          ┌──────────────────────────────┐               │
│          │  MODAL HEADER                │               │
│          │  Title                    [×]│               │
│          ├──────────────────────────────┤               │
│          │                              │               │
│          │  MODAL BODY                  │               │
│          │  Content or form fields      │               │
│          │                              │               │
│          │                              │               │
│          ├──────────────────────────────┤               │
│          │  MODAL FOOTER               │               │
│          │          [Cancel]  [Confirm] │               │
│          └──────────────────────────────┘               │
│                                                         │
│  (backdrop overlay)                                     │
└─────────────────────────────────────────────────────────┘
```

**Specs:**

```
BACKDROP:
  position: fixed, inset 0
  background: rgba(0, 0, 0, 0.5)
  z-index: --z-modal-backdrop
  animation: fade-in 0.15s ease

MODAL:
  position: fixed, centered (top 50%, left 50%, transform translate(-50%, -50%))
  z-index: --z-modal
  animation: scale-in 0.15s ease (from 95% scale + fade)

  SIZES:
    small:  width 400px, max-height 70vh
    medium: width 560px, max-height 80vh
    large:  width 720px, max-height 85vh

  background: white (light) or --deep-forge (dark)
  border: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  border-radius: --radius-lg
  shadow: --shadow-lg
  overflow: hidden

MODAL HEADER:
  padding: --sp-5 --sp-6
  border-bottom: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  display: flex, justify-content space-between, align-items center

  title: Space Grotesk 700, 1.25rem
  close button: 32px × 32px, --scaffold-gray, hover → --deep-forge, border-radius --radius-sm
    hover background: --concrete (light) or #27272A (dark)

MODAL BODY:
  padding: --sp-6
  overflow-y: auto
  max-height: calc(modal max-height - header - footer)

  body text: Inter 400, 0.875rem, line-height 1.6
  form fields: same as Form/Detail (section 2.3), single column layout

MODAL FOOTER:
  padding: --sp-4 --sp-6
  border-top: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  display: flex, justify-content flex-end, gap --sp-3

  primary action: Primary button (rightmost)
  secondary action: Secondary button
  destructive variant: primary action with --error color scheme

CONFIRM DIALOG (small modal variant):
  width: 400px
  icon: 48px circle, centered above title
    info: --info background tint, --info icon
    warning: --amber background tint (#FEF3C7), --amber icon
    danger: --error background tint (#FEE2E2), --error icon
  title: centered, Space Grotesk 700, 1.25rem
  message: centered, Inter 400, 0.875rem, --scaffold-gray
  buttons: centered, gap --sp-3

KEYBOARD:
  Escape: close modal
  Enter: confirm primary action (when no text input focused)
  Tab: trap focus within modal
```

### 3.4 Toolbar Patterns

```
HORIZONTAL TOOLBAR (top):
┌────────────────────────────────────────────────────────┐
│ [icon][icon][icon] │ [icon][icon] │ [dropdown ▾] [⚙]  │
└────────────────────────────────────────────────────────┘

VERTICAL TOOLBAR (left):
┌──────┐
│[icon]│
│[icon]│
│[icon]│
│ ──── │
│[icon]│
│[icon]│
│      │
│      │
│[icon]│ ← bottom-anchored
└──────┘
```

**Specs:**

```
HORIZONTAL TOOLBAR:
  height: 40px
  background: --concrete (light) or #27272A (dark)
  border-bottom: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  padding: 0 --sp-3
  display: flex, align-items center

  (Same tool button specs as Workspace toolbar — section 3.1)

VERTICAL TOOLBAR:
  width: 48px
  background: --concrete (light) or --deep-forge (dark)
  border-right: 1px solid #E7E5E4 (light) or 1px solid #27272A (dark)
  padding: --sp-2 0
  display: flex, flex-direction column, align-items center, gap --sp-1

  tool button:
    width: 36px, height: 36px
    border-radius: --radius-sm
    background: transparent
    icon: 20px, --deep-forge (light) or --scaffold-gray (dark)
    hover: background #E7E5E4 (light) or #27272A (dark)
    active: background --amber, icon white
    tooltip: right side, z-index --z-tooltip, delay 500ms

  separator: 1px solid #E7E5E4 (light) or #27272A (dark), width 24px, margin --sp-2 0
  spacer: flex 1 (pushes bottom items down)
  bottom-anchored: settings, help icons

TOOLBAR OVERFLOW (when too many items):
  "..." button at end → dropdown with remaining items
  dropdown: --shadow-lg, --radius-md, z-index --z-dropdown
```

---

## 4. CSS Starter Snippets

These snippets use CSS custom properties defined in `DESIGN-SYSTEM.md` section 9. Copy and extend as needed.

### 4.1 Layout Variables

```css
:root {
  /* Grid */
  --grid-columns: 12;
  --grid-max-width: 1200px;
  --grid-gutter: 1.5rem; /* 24px */

  /* Z-index scale */
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-sidebar: 30;
  --z-navbar: 40;
  --z-modal-backdrop: 50;
  --z-modal: 60;
  --z-toast: 70;
  --z-tooltip: 80;

  /* Sidebar */
  --sidebar-width: 260px;
  --sidebar-collapsed: 56px;

  /* Topbar / Titlebar */
  --topbar-height: 56px;
  --titlebar-height: 32px;
  --toolbar-height: 40px;
  --statusbar-height: 24px;
}
```

### 4.2 Container & Grid

```css
.container {
  width: 100%;
  max-width: var(--grid-max-width);
  margin: 0 auto;
  padding: 0 var(--sp-4);
}

@media (min-width: 768px) {
  .container { padding: 0 var(--sp-6); }
}

.grid {
  display: grid;
  gap: var(--grid-gutter);
}

.grid-1  { grid-template-columns: 1fr; }
.grid-2  { grid-template-columns: repeat(2, 1fr); }
.grid-3  { grid-template-columns: repeat(3, 1fr); }
.grid-4  { grid-template-columns: repeat(4, 1fr); }

.span-4  { grid-column: span 4; }
.span-6  { grid-column: span 6; }
.span-8  { grid-column: span 8; }
.span-12 { grid-column: span 12; }

@media (max-width: 767px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
  .span-4, .span-6, .span-8 {
    grid-column: span 1;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### 4.3 App Shell (Topbar + Sidebar + Content)

```css
.app-shell {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--topbar-height);
  background: var(--deep-forge);
  border-bottom: 1px solid #27272A;
  display: flex;
  align-items: center;
  padding: 0 var(--sp-4);
  z-index: var(--z-navbar);
}

.app-body {
  display: flex;
  margin-top: var(--topbar-height);
  min-height: calc(100vh - var(--topbar-height));
}

.app-sidebar {
  width: var(--sidebar-width);
  background: var(--concrete);
  border-right: 1px solid #E7E5E4;
  position: fixed;
  top: var(--topbar-height);
  bottom: 0;
  overflow-y: auto;
  padding: var(--sp-4) var(--sp-3);
  transition: width 0.2s ease;
}

.app-sidebar.collapsed {
  width: var(--sidebar-collapsed);
}

.app-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: var(--sp-6);
  transition: margin-left 0.2s ease;
}

.app-sidebar.collapsed + .app-content {
  margin-left: var(--sidebar-collapsed);
}

@media (max-width: 767px) {
  .app-sidebar {
    position: fixed;
    z-index: var(--z-sidebar);
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
  .app-sidebar.open {
    transform: translateX(0);
  }
  .app-content {
    margin-left: 0;
  }
}
```

### 4.4 Desktop Window Shell

```css
.desktop-shell {
  display: grid;
  grid-template-rows: var(--titlebar-height) var(--toolbar-height) 1fr var(--statusbar-height);
  grid-template-columns: var(--sidebar-width) 1fr;
  height: 100vh;
  min-width: 800px;
  min-height: 600px;
}

.desktop-titlebar {
  grid-column: 1 / -1;
  background: var(--deep-forge);
  border-bottom: 1px solid #27272A;
  display: flex;
  align-items: center;
  padding: 0 var(--sp-3);
  -webkit-app-region: drag;
}

.desktop-toolbar {
  grid-column: 1 / -1;
  background: var(--concrete);
  border-bottom: 1px solid #E7E5E4;
  display: flex;
  align-items: center;
  padding: 0 var(--sp-3);
  gap: var(--sp-1);
}

.desktop-sidebar {
  background: var(--concrete);
  border-right: 1px solid #E7E5E4;
  overflow-y: auto;
  padding: var(--sp-3);
}

.desktop-canvas {
  background: var(--blueprint-white);
  overflow: auto;
  position: relative;
}

.desktop-statusbar {
  grid-column: 1 / -1;
  background: var(--deep-forge);
  border-top: 1px solid #27272A;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--sp-3);
  font-family: var(--font-code);
  font-size: 0.7rem;
  color: var(--scaffold-gray);
}
```

### 4.5 Modal Overlay

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: var(--z-modal-backdrop);
  animation: fade-in 0.15s ease;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--z-modal);
  background: white;
  border: 1px solid #E7E5E4;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  animation: scale-in 0.15s ease;
}

.modal--sm { width: 400px; max-height: 70vh; }
.modal--md { width: 560px; max-height: 80vh; }
.modal--lg { width: 720px; max-height: 85vh; }

.modal-header {
  padding: var(--sp-5) var(--sp-6);
  border-bottom: 1px solid #E7E5E4;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: var(--sp-6);
  overflow-y: auto;
}

.modal-footer {
  padding: var(--sp-4) var(--sp-6);
  border-top: 1px solid #E7E5E4;
  display: flex;
  justify-content: flex-end;
  gap: var(--sp-3);
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-in {
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}
```

### 4.6 Dark Mode Overrides

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--deep-forge);
    --bg-surface: #27272A;
    --bg-canvas: var(--night-build);
    --text-primary: var(--blueprint-white);
    --text-secondary: var(--scaffold-gray);
    --border-default: #27272A;
    --border-hover: #27272A;
  }
}

/* Or toggle with a class: */
.dark {
  --bg-primary: var(--deep-forge);
  --bg-surface: #27272A;
  --bg-canvas: var(--night-build);
  --text-primary: var(--blueprint-white);
  --text-secondary: var(--scaffold-gray);
  --border-default: #27272A;
  --border-hover: #3F3F46;
}
```

---

## 5. Token Cross-Reference

All values in this document map to `DESIGN-SYSTEM.md`:

| This document uses | Defined in |
|--------------------|------------|
| `--amber`, `--deep-forge`, etc. | Section 2.1 Colors |
| `--sp-1` through `--sp-24` | Section 2.3 Spacing |
| `--radius-sm/md/lg/full` | Section 2.4 Border Radius |
| `--shadow-sm/md/lg` | Section 2.5 Shadows |
| Border values (`1px solid #E7E5E4`) | Section 2.6 Borders |
| Button variants | Section 3.1 Buttons |
| Form input specs | Section 3.2 Form Inputs |
| Card specs | Section 3.3 Cards |
| Table specs | Section 3.4 Tables |
| Badge specs | Section 3.6 Badges |
| Tag specs | Section 3.7 Tags |
| Alert specs | Section 3.5 Alerts |
| Progress bar specs | Section 3.8 Progress Bars |
| Blockquote specs | Section 3.10 Blockquote |
| Navbar / Sidebar base | Section 3.11 Navigation |
| CSS custom properties | Section 9 CSS Starter |
| Tailwind extensions | Section 10 Tailwind Mapping |

---

*This document supplements `DESIGN-SYSTEM.md` with detailed layout specifications.
For print layouts (A4 report, letter, email), see `DESIGN-SYSTEM.md` sections 4.3–4.5.*
