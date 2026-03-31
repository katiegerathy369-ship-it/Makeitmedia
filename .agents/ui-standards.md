# Make It Media — UI Standards

## The MIM Design Standard

Every site built by Make It Media must look like it cost 3x what the client paid. The benchmark: could this site appear in a design awards showcase? If not, it needs more work.

Make It Media builds across 4 distinct aesthetic directions. Each client gets ONE direction chosen at project start based on their brand personality. Never mix directions on the same site.

## The 4 Aesthetic Directions

### Direction 1 — Refined Botanical

**For:** naturopaths, herbalists, integrative practitioners with a warm, nature-connected brand
**Feeling:** like a beautiful independent bookshop that also sells dried flowers. Organic, editorial, unhurried.

**Colour approach:** warm creams, deep forest greens, terracotta, dusty rose, aged paper tones. Never cold. Never grey.
**Typography:** serif display font (editorial, character) paired with a humanist sans body font. Never geometric sans.
**Layout:** generous white space, asymmetric grid moments, full-bleed imagery sections, text that breathes.
**Photography:** natural light always. Warm tones. Herbs, botanicals, hands, textures. Never cold studio shots.
**Border radius:** generous — rounded-2xl on cards, rounded-full on badges. Soft everywhere.
**Animations:** gentle fade-up on scroll (0.6s ease-out). Nothing that feels mechanical.

**Font pairings that work:**
- Playfair Display + DM Sans
- Cormorant Garamond + Inter
- Fraunces + Outfit

**Reference feel:** Aesop, Kinfolk magazine, Ottolenghi website

### Direction 2 — Clean Clinical

**For:** functional medicine doctors, integrative GPs, practitioners who lead with evidence and credentials
**Feeling:** a premium private clinic. Calm authority. You trust them before they say a word.

**Colour approach:** white or near-white background, one deep anchor colour (navy, charcoal, deep sage), single warm accent. Maximum 3 colours on the site.
**Typography:** geometric sans for headings (precise, confident) paired with a readable sans for body. Generous line height.
**Layout:** strict grid. Lots of white space. Information is organised, never cluttered. Credentials visible early.
**Photography:** clean, bright, the practitioner looking directly at camera. Professional but warm.
**Border radius:** minimal — rounded-lg at most. Sharp = precise.
**Animations:** subtle opacity fades only (0.4s). Nothing bouncy, nothing distracting.

**Font pairings that work:**
- Neue Haas Grotesk + Söhne
- DM Sans + DM Serif Display (for pull quotes only)
- Plus Jakarta Sans + Lora (for credential sections)

**Reference feel:** Hims/Hers, Numan, private Harley Street clinic

### Direction 3 — Bold & Modern

**For:** health coaches, nutritionists, practitioners with a strong personal brand and high energy
**Feeling:** a premium gym meets a design studio. Confident. Direct. Makes you feel like you're going to get results.

**Colour approach:** high contrast. Dark background option works well here. One strong accent colour. Black and white as anchors with one unexpected colour pop.
**Typography:** strong display typeface — variable weight, expressive. Body stays clean and readable.
**Layout:** bold hero with large type. Grid breaks intentionally. Text overlapping images. Sections that feel designed, not templated.
**Photography:** the practitioner in action. Energy. Movement. Not posed. High contrast editing.
**Border radius:** sharp — rounded-none or rounded-sm on most elements. Rounded-full only on pill badges.
**Animations:** confident scroll reveals. Slight scale on hero image (1.0 to 1.05 over scroll). Text slides in with purpose.

**Font pairings that work:**
- Cabinet Grotesk + Satoshi
- Clash Display + General Sans
- Bebas Neue (display only) + DM Sans

**Reference feel:** Eight Sleep, Whoop, AG1/Athletic Greens

### Direction 4 — Soft & Feminine

**For:** women's health practitioners, fertility specialists, perinatal care, eating psychology, mental health-adjacent
**Feeling:** a warm hug that also happens to be beautifully designed. Safe, gentle, deeply considered.

**Colour approach:** soft pastels — dusty lilac, blush, sage, warm white, nude. Never saturated. Never cold. Never harsh contrast.
**Typography:** rounded or soft serif for headings. Clean humanist sans for body. Everything feels gentle.
**Layout:** rounded everything. Soft section breaks. Illustrations or botanical line drawings welcome.
**Photography:** soft natural light. Warm tones. The practitioner smiling genuinely. Lifestyle over clinical.
**Border radius:** rounded-3xl on cards. Pill shapes on buttons. Everything has soft edges.
**Animations:** gentle fade only. Float-up (y: 12px to 0). Nothing sharp or sudden.

**Font pairings that work:**
- Gilda Display + Jost
- Canela + Graphik
- Young Serif + Nunito

**Reference feel:** Oura Ring website, Clue app, Flo Health

## Universal Quality Rules

These apply to every MIM build regardless of direction:

### Typography

- Always use next/font — never @import
- Minimum body font size: 16px (18px preferred)
- Maximum line length: 65–70 chars (max-w-prose)
- Heading line height: 1.1–1.2 for display, 1.3 for H1/H2
- Body line height: 1.7–1.8
- Letter spacing on display headings: -0.02em to -0.03em
- Never use system fonts for headings — always a chosen typeface
- Never more than 2 font families on one site

### Colour

- Always define colours as CSS variables in globals.css AND in tailwind.config
- Never use Tailwind default colours in production — always custom brand colours
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Never pure black (#000) — use a near-black with warmth
- Never pure white (#fff) as background — always a tinted white

### Spacing

- Use a consistent spacing scale — multiples of 4px
- Section padding desktop: py-24 minimum
- Section padding mobile: py-16 minimum
- Never let sections feel cramped — when in doubt add more space
- Generous padding inside cards: p-8 minimum on desktop

### Images

- next/image always — zero exceptions
- Always set explicit width and height
- Alt text always — descriptive and SEO-relevant
- Never use stock photos of strangers
- Aspect ratios: hero 16:9 or full-viewport, portrait 3:4, cards 16:9 or 1:1
- Image quality: WebP format, optimise before upload

### Components

- One button style = primary, one = secondary/outline. Never more than two variants per site.
- Cards: consistent border radius, consistent padding, consistent shadow or border approach — never mix
- Never use more than 3 different section background colours
- Nav: always has a CTA button. Always has a mobile menu.
- Footer: always has contact info, nav links, credentials, copyright

### What Never Appears on a MIM Site

- Generic purple gradient on white
- Stock photo of a woman in a lab coat with a clipboard
- Comic sans, Papyrus, or any novelty font
- Carousel/slider components (accessibility and UX nightmare)
- Pop-ups that appear within 5 seconds of page load
- Parallax that causes layout shift
- More than 5 colours used on one page
- Fake "as seen in" logos without real placements
- Countdown timers
- Cluttered hero with too many competing elements

## Design Review Checklist

Run before marking any page as complete:

- [ ] Passes the 3-second beauty test — first impression is genuinely impressive
- [ ] Typography hierarchy is clear — you know what to read first
- [ ] Consistent spacing throughout — no cramped sections
- [ ] Mobile looks as good as desktop — not just functional
- [ ] All images are sharp, correctly sized, on-brand
- [ ] CTA button stands out on every section
- [ ] Colour palette is cohesive — nothing feels out of place
- [ ] Would I put this in the MIM portfolio? If no — fix it first.
