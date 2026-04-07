# Design System Strategy: Ethereal Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Sacred Storybook"
This design system moves beyond functional utility to create an immersive, digital sanctuary. It is an editorial-first experience that blends the lush, organic energy of Bali with the crisp, majestic clarity of the Swiss Alps. Unlike traditional wellness platforms that lean into clinical sterility, this system prioritizes **Atmospheric Immersion**.

To break the "template" look, the system utilizes **Intentional Asymmetry**. We avoid rigid, centered columns in favor of offset imagery, overlapping botanical elements, and sweeping, wavy section transitions. The goal is to make the user feel as though they are turning the pages of a high-end, hand-crafted journal rather than scrolling through a website.

---

## 2. Colors & Surface Philosophy

The palette is rooted in natureâs own transitionsâfrom misty mornings to golden hour.

### Tonal Hierarchy
- **Primary (`#56695a`):** A deep moss green used for grounding elements and core actions.
- **Secondary (`#815a5b`):** A muted petal pink/mauve for warmth and feminine accents.
- **Tertiary (`#6d5b93`):** A misty lavender used sparingly to evoke magic and intuition.
- **Surface & Background (`#fffcf6`):** A warm cream that avoids the "blue-light" coldness of pure white.

### The "No-Line" Rule
To maintain a high-end feel, **1px solid borders are strictly prohibited** for sectioning or container definition. Boundaries must be defined through:
- **Tonal Shifts:** Transitioning from `surface` to `surface-container-low`.
- **Wavy Dividers:** Using SVG masks to create soft, organic transitions between background colors.
- **Depth Masking:** Utilizing semi-transparent botanical patterns to feather the edges between two sections.

### The "Glass & Gradient" Rule
Floating elements (like navigation bars or hovering quote cards) should utilize **Glassmorphism**. Use `surface` or `surface-bright` with a 70-80% opacity and a `backdrop-blur` of 12px-20px. For primary CTAs, apply a subtle linear gradient from `primary` to `primary_dim` at a 135-degree angle to add "soul" and dimension.

---

## 3. Typography: The Editorial Voice

The typography scale is designed to feel like a modern fairy taleâauthoritative yet rhythmic.

- **Display & Headline (Newsreader):** A graceful, flowing serif. Use `display-lg` for hero statements. To achieve the "Signature" look, use *italicized* serif for emphasis on single words within a headline (e.g., "Return to *yourself*"). This breaks the monotony and adds a hand-touched quality.
- **Body & Label (Manrope):** A clean, highly legible sans-serif. This provides the "professional" counterbalance to the whimsical serif. Keep line heights generous (1.6 - 1.8) to allow the text to breathe like a luxury magazine.
- **Character Spacing:** Increase letter-spacing for `label-md` and `label-sm` (approx. 0.05rem) to ensure a premium, airy feel in navigation and small captions.

---

## 4. Elevation & Depth: Tonal Layering

Traditional box-shadows are often too heavy for an "Ethereal" aesthetic. Instead, we use **Tonal Layering**.

- **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` background. This creates a soft, "lifted" effect through color theory rather than artificial shadows.
- **Ambient Shadows:** For elements that must float (e.g., a "Book Now" modal), use an ultra-diffused shadow. 
    *   *Blur:* 40px - 60px. 
    *   *Opacity:* 5% - 8%. 
    *   *Color:* Use a tinted version of `on_surface` (a deep olive/grey) rather than black.
- **Glassmorphism:** Apply to navigation and over-image cards. By allowing the lush greens of the background imagery to bleed through the `surface_variant`, the UI feels integrated into the environment.

---

## 5. Components

### Buttons & Interaction
- **Primary Button:** Solid `primary` background with `on_primary` text. Use the `xl` (1.5rem) roundedness for a soft, pebble-like feel. No borders.
- **Secondary (Ghost) Button:** Instead of a border, use a `surface_container_high` background that darkens slightly on hover.
- **Tertiary Button:** Purely typographic using `label-md` with a subtle `primary` underline that expands on hover.

### Cards & Layout
- **The "No-Divider" Card:** Cards should never use horizontal lines to separate content. Use vertical whitespace (from the spacing scale) or a slight background shift (`surface_container`) to define the footer area of a card.
- **Botanical Accents:** Top-right or bottom-left corners of cards can feature a low-opacity `primary_fixed` botanical SVG to "break" the box shape.

### Inputs & Forms
- **Text Inputs:** Use a "Ghost Border" ( `outline_variant` at 20% opacity). When focused, the border should not just change color, but the background should shift to `surface_container_lowest`.
- **Ethereal Icons:** Use hand-drawn, thin-stroke icons. Icons should be colored in `primary` or `secondary` to maintain the earthy aesthetic.

### Signature Component: The "Wavy Portal"
Apply an organic, asymmetric mask to imagery (e.g., an arched top with a wavy bottom) to mimic the Swiss Alps or Bali coastlines. This prevents the "clinical" look of standard rectangular photography.

---

## 6. Do's and Don'ts

### Do:
- **Use Intentional White Space:** Treat whitespace as a luxury. If a section feels "busy," increase the padding using the top end of the spacing scale.
- **Overlap Elements:** Let a botanical icon or a piece of text overlap the edge of an image to create depth.
- **Mix Textures:** Pair high-resolution nature photography with soft, flat-color backgrounds.

### Don't:
- **Use Pure Black:** Never use `#000000`. Use `on_surface` (`#38392f`) for all "black" text to maintain a soft, organic contrast.
- **Use Hard Corners:** Avoid `none` or `sm` roundedness. The world of this design system is soft; use `md`, `lg`, and `xl` to keep the UI approachable.
- **Clutter with Sparkles:** While "subtle sparkle" is part of the brief, it should be treated as a background texture (opacity 10-15%) rather than a foreground element that interferes with readability.
- **Use Default Grids:** Don't align everything to a center axis. Offset your headlines and images to create a more dynamic, editorial flow.