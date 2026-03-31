# Make It Media — Claude Code Agent Instructions

You are working inside the Make It Media website codebase.
Read this file and all files in `.agents/` before touching anything.

## Project Overview

**Site:** Make It Media agency website
**Stack:** Next.js 14, Tailwind CSS, Framer Motion, Netlify
**Purpose:** Lead generation for health practitioner web design clients in Australia
**Primary CTA:** Book a free strategy call

## Quick Reference — Agent Files

| File | What it covers |
|------|---------------|
| `.agents/product-marketing-context.md` | Brand, audience, positioning, voice |
| `.agents/seo-rules.md` | Keywords, meta formats, technical SEO rules |
| `.agents/copy-standards.md` | Writing rules, tone, what never to write |
| `.agents/schema-markup.md` | JSON-LD templates for every page type |
| `.agents/page-briefs.md` | Per-page goals, audience, and conversion notes |
| `.agents/ui-standards.md` | 4 aesthetic directions, typography, colour, spacing, design checklist |
| `.agents/ux-standards.md` | Conversion paths, mobile UX, forms, performance, pre-launch checklist |

## Non-Negotiables — Read Before Every Task

### Copy
- Never use: "transform," "unlock," "skyrocket," "game-changer," "innovative"
- Always use: specific outcomes, practitioner language, evidence of expertise
- Voice: direct, dry, confident — like a sharp colleague, not a salesperson
- All headlines must pass the 5-second clarity test

### SEO
- Every page needs: unique <title>, unique <meta description>, one <h1>
- Title format: [Primary Keyword] | Make It Media
- Meta descriptions: 150–160 chars, include primary keyword, end with implied CTA
- Never duplicate meta content across pages
- Internal links: every page should link to at least 2 other pages

### Code
- Tailwind only — no inline styles, no separate CSS files unless absolutely necessary
- All images: next/image with descriptive alt text (SEO-critical)
- All CTAs must have tracking-ready id attributes for GA4
- Page components live in /app, reusable components in /components

### Brand colours
- Ink charcoal (primary): #2a2520
- Tan/warm accent: #8b7355
- Cream background: #f5f2ee
- Nav background: #2a2520

## When Making Copy Changes
1. Check .agents/copy-standards.md for voice rules
2. Check .agents/product-marketing-context.md for audience language
3. Check .agents/page-briefs.md for that page's specific goal
4. Write copy — then audit it against the 5-second clarity test
5. Check that the primary keyword appears in H1, first paragraph, and meta title

## When Making SEO Changes
1. Check .agents/seo-rules.md for keyword targets and format rules
2. Check .agents/schema-markup.md for the correct JSON-LD template
3. Never remove existing schema without replacing it
4. After any meta change, confirm no duplicate titles exist across pages

## When Adding New Pages
1. Add a brief for the new page to .agents/page-briefs.md
2. Follow URL structure: /services/[slug], /blog/[slug]
3. Add the page to the sitemap
4. Add appropriate schema markup from .agents/schema-markup.md
5. Add internal links from at least 2 existing pages to the new page
