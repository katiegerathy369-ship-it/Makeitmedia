# Make It Media — UX Standards

## The MIM Conversion Standard

A beautiful site that doesn't convert is a failure. Every layout decision must serve the conversion goal. The primary conversion goal for every health practitioner site is: get the visitor to book a consultation.

## The Screenshot Design Direction Process

At the start of every client build, Kate will provide:

1. A screenshot or URL of a site with the visual direction she wants to be inspired by
2. The chosen aesthetic direction (Botanical / Clinical / Bold / Soft — from ui-standards.md)

Before building any component, ask:
"Does this visual decision serve the chosen aesthetic direction AND move the visitor toward booking?"

If no to either — reconsider.

## Conversion Path — Every Site

The visitor journey that must work on every build:

```
Entry (search/social/referral)
→ Homepage (establish trust + credibility in 5 seconds)
→ Services or About (deepen trust, address objections)
→ Booking page (remove all friction)
→ Confirmation (warm, clear, tells them what happens next)
```

Shortcut paths that must also work:
- Homepage hero CTA → direct to booking (2 clicks max)
- Any service page → booking
- About page → booking
- Blog post → relevant service → booking

**Rule: A visitor is never more than 2 clicks from booking.**

## Homepage UX — Non-Negotiable Structure

**Hero section:**
- Headline answers: who is this for + what do they get
- Subheadline: one line of supporting context or credibility
- Primary CTA: visible without scrolling on ALL screen sizes
- Social proof element near hero: credential badge, association logo, or patient count
- No auto-playing video. No carousels. No sliders.

**Below the fold flow:**
1. The problem section — mirror the patient's situation back. They should think "that's exactly me."
2. The solution — this practitioner's approach, briefly
3. Services preview — 2-3 key offerings with CTAs
4. About the practitioner — credential-led, not bio-led
5. Testimonials — 2-3, specific, attributed, condition-relevant
6. FAQ — 4-6 questions, schema-marked up
7. Final CTA section — warm, low-pressure, clear next step

## Mobile UX — Health Sites Are 70% Mobile

Every layout decision is made mobile-first.

**Non-negotiables:**
- Design at 390px width first, then scale up
- Tap targets: minimum 44x44px on all interactive elements
- Body font: minimum 16px — never smaller
- CTA button: full width on mobile
- No horizontal scroll — ever
- Booking widget: tested on real iPhone before shipping
- Single column below 640px — no side-by-side content
- Hero headline: must be fully visible without scrolling on iPhone 14 (390x844px viewport)

**Mobile testing checklist (run on real device, not just DevTools):**
- [ ] All tap targets comfortable to press with a thumb
- [ ] Forms easy to fill in on mobile keyboard
- [ ] No text overlapping images on small screens
- [ ] Navigation opens and closes smoothly
- [ ] Booking widget loads and functions correctly
- [ ] Page loads in under 3 seconds on mobile data

## Trust Signal Placement

Health practitioners live or die on trust. Place signals strategically — not randomly:

| Signal | Placement |
|--------|-----------|
| Degree / qualifications | Above fold on About, visible on Homepage |
| Association logos (ANTA/NHAA) | Footer + About page |
| Years in practice | Hero or About intro |
| Testimonials | Next to or above every major CTA |
| Patient/client count | Near hero if available |
| Media mentions | Homepage + About |
| Secure booking indicator | Adjacent to booking form |

**Testimonial rules:**
- Attributed always — first name minimum
- Specific outcomes preferred over vague praise
- Match testimonial to the page/service it appears on
- Never fabricate. Never vague.

## Navigation UX

**Desktop nav:**
- Logo left, links centre or right, CTA button right
- Maximum 5 nav items + CTA
- Active page clearly indicated
- No dropdowns unless site has 8+ pages
- Sticky nav: yes — but only after hero scrolls out of view

**Mobile nav:**
- Hamburger icon: 44x44px minimum tap target
- Full screen overlay or slide-in drawer — never tiny dropdown
- CTA button prominent inside mobile menu
- Close button easy to reach

## Forms & Booking

**Booking widget options (in order of preference):**
1. Cal.com embedded inline — best UX, stays on site
2. Cliniko / Jane App embedded — if client already uses it
3. Simple contact form → email notification

**Form field rules:**
- Name + email + optional message = maximum for first contact
- Never ask for phone number as required
- Never ask for budget or medical history before the call
- Submit button: action-focused text only ("Book my call" / "Send my enquiry" — never "Submit")
- Confirmation: warm message + clear expectation of next steps
- Mobile: all fields minimum 44px height

**Friction to eliminate on every build:**
- No CAPTCHA on booking forms
- No account creation required to book
- No redirect to a completely different branded page mid-flow
- No form that requires more than 60 seconds to complete

## Page Performance

**Core Web Vitals targets every MIM build must hit:**
- LCP: under 2.5s
- CLS: under 0.1
- INP: under 200ms

**How to hit them:**
- next/image with explicit width + height on every image
- next/font for all fonts — never @import in CSS
- No large JS libraries unless critical
- Lazy load all below-fold images
- Test with Lighthouse on mobile before every deployment

**Lighthouse target: 90+ on mobile performance score**

## Accessibility Baseline

Every MIM build meets these minimums:

- Colour contrast: 4.5:1 body text, 3:1 large text
- All images: descriptive alt text
- All interactive elements: keyboard accessible
- Focus states: visible — never removed without replacement
- prefers-reduced-motion: respected in all animations:
  `const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches`
- Form labels: always visible, never placeholder-only
- Skip to content link included for screen readers

## Pre-Launch Checklist

Run this before every client handover:

**Design**
- [ ] Passes 3-second beauty test on desktop AND mobile
- [ ] Consistent with chosen aesthetic direction throughout
- [ ] No placeholder text, images, or Lorem Ipsum anywhere
- [ ] All images sharp, correctly sized, on-brand

**UX & Conversion**
- [ ] Primary CTA visible above fold on mobile
- [ ] Booking flow tested end-to-end on real mobile device
- [ ] Every page has a clear next step / CTA
- [ ] Trust signals placed adjacent to CTAs

**Performance**
- [ ] Lighthouse mobile score 90+
- [ ] All images using next/image with width + height
- [ ] Fonts loaded via next/font
- [ ] No console.logs in production

**SEO**
- [ ] Unique title tag every page
- [ ] Unique meta description every page
- [ ] One H1 per page with primary keyword
- [ ] Schema markup added and validated
- [ ] Sitemap generated and submitted

**Handover**
- [ ] GA4 connected and CTA events firing
- [ ] Netlify deployed, custom domain live
- [ ] Client walkthrough video recorded
- [ ] All .agents/ files fully populated — no placeholders
