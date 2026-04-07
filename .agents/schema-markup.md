# Make It Media — Schema Markup Templates

Place inside <script type="application/ld+json"> in the page <head>.
In Next.js 14 use dangerouslySetInnerHTML in layout.tsx or individual page.tsx files.

## Homepage — Organization + WebSite + FAQPage

{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://makeitmedia.com.au/#organization",
      "name": "Make It Media",
      "url": "https://makeitmedia.com.au",
      "description": "AI-powered web design and digital marketing agency for Australian small businesses.",
      "areaServed": "AU",
      "knowsAbout": ["Small business website design","Digital marketing for small business","Health practitioner website design","SEO for small business"]
    },
    {
      "@type": "WebSite",
      "@id": "https://makeitmedia.com.au/#website",
      "url": "https://makeitmedia.com.au",
      "name": "Make It Media"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a small business website cost in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Make It Media offers small business website packages from $2,200 AUD for a 6-page professional website. The Visibility package at $3,200 includes SEO setup and content strategy."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a small business website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most small business websites are delivered within 2–4 weeks from project start."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with businesses in any industry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Make It Media works with small businesses across all industries — health & wellness, professional services, hospitality, trades, coaching, retail, and more. We also have a dedicated service for health practitioners."
          }
        }
      ]
    }
  ]
}

## Health Practitioners Page

{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Health Practitioner Website Design",
  "description": "Professional website design for naturopaths and health practitioners in Australia from $2,200 AUD. Built by a naturopath.",
  "provider": { "@type": "Organization", "name": "Make It Media", "url": "https://makeitmedia.com.au" },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "offers": [
    { "@type": "Offer", "name": "Presence", "price": "2200", "priceCurrency": "AUD" },
    { "@type": "Offer", "name": "Visibility", "price": "3200", "priceCurrency": "AUD" },
    { "@type": "Offer", "name": "Growth", "price": "997", "priceCurrency": "AUD" }
  ]
}

## Services Page

{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Small Business Website Design",
  "description": "Professional website design for Australian small businesses from $2,200 AUD.",
  "provider": { "@type": "Organization", "name": "Make It Media", "url": "https://makeitmedia.com.au" },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "offers": [
    { "@type": "Offer", "name": "Presence", "price": "2200", "priceCurrency": "AUD" },
    { "@type": "Offer", "name": "Visibility", "price": "3200", "priceCurrency": "AUD" },
    { "@type": "Offer", "name": "Growth", "price": "997", "priceCurrency": "AUD" }
  ]
}

## Blog Post (use on every post — fill in brackets)

{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[POST TITLE]",
  "description": "[META DESCRIPTION]",
  "image": "[FEATURED IMAGE URL]",
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "author": {
    "@type": "Person",
    "name": "Kate",
    "worksFor": { "@type": "Organization", "name": "Make It Media" }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Make It Media",
    "url": "https://makeitmedia.com.au"
  }
}

## Next.js 14 Implementation

// In page.tsx:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
/>

// Validate at: https://search.google.com/test/rich-results
