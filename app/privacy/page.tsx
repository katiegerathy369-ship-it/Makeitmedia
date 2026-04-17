import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Make It Media',
  description:
    'How Make It Media collects, uses and protects your personal information.',
}

const sectionHeading =
  'font-display text-[24px] md:text-[28px] font-normal mb-4'

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main
        className="pt-[140px] pb-[100px] px-6"
        style={{ background: 'var(--cream)', color: 'var(--ink)' }}
      >
        <div className="max-w-[760px] mx-auto">
          {/* Header */}
          <p
            className="text-[11px] font-medium tracking-[0.12em] uppercase mb-4"
            style={{ color: 'var(--sage-dark)' }}
          >
            Legal
          </p>
          <h1
            className="font-display font-normal leading-[1.1] mb-3"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)', color: 'var(--ink)' }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-[14px] font-light mb-12"
            style={{ color: 'var(--ink-mid)' }}
          >
            Last updated: 30 March 2026
          </p>

          <div className="flex flex-col gap-10 font-body text-[15px] leading-[1.8] font-light" style={{ color: 'var(--ink-mid)' }}>
            {/* 1 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                1. About this policy
              </h2>
              <p>
                Make It Media (ABN: [INSERT ABN]) is a web design and digital marketing agency operated by Kate Gerathy as a sole trader. This Privacy Policy explains how we collect, use, store and disclose your personal information when you visit makeitmedia.io or contact us about our services. By using our website or engaging our services, you agree to the practices described in this policy. This policy is governed by the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs).
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                2. What information we collect
              </h2>
              <p className="mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Contact details including your name, email address, phone number and practice name when you submit our contact form or enquiry form</li>
                <li>Booking information including your name, email address and appointment details when you book a strategy call through Cal.com</li>
                <li>Usage data including pages visited, time spent on pages, browser type and general location data collected automatically through Google Analytics 4</li>
                <li>Payment information if you engage our services. Payment processing is handled securely by Stripe and we do not store your card details</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                3. How we collect your information
              </h2>
              <p className="mb-4">We collect personal information when you:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Submit a contact or enquiry form on our website</li>
                <li>Book a strategy call through our Cal.com booking system</li>
                <li>Email us directly at kate@makeitmedia.io</li>
                <li>Browse our website (automatically, via Google Analytics)</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                4. How we use your information
              </h2>
              <p className="mb-4">We use your personal information to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Respond to your enquiries and provide our services</li>
                <li>Schedule and manage strategy calls and client meetings</li>
                <li>Send you information about our services where you have requested it</li>
                <li>Improve our website and understand how visitors use it</li>
                <li>Process payments for services rendered</li>
                <li>Meet our legal and contractual obligations</li>
              </ul>
              <p className="mt-4">We will not use your personal information for any purpose that you would not reasonably expect.</p>
            </section>

            {/* 5 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                5. Third party services
              </h2>
              <p className="mb-4">We use the following third party services which may collect or process your data:</p>
              <div className="flex flex-col gap-4">
                <p>
                  <strong className="font-medium" style={{ color: 'var(--ink)' }}>Google Analytics 4</strong>: We use GA4 to understand website traffic and user behaviour. Google Analytics collects anonymised usage data. You can opt out of Google Analytics tracking at tools.google.com/dlpage/gaoptout. Google&rsquo;s privacy policy is available at policies.google.com/privacy.
                </p>
                <p>
                  <strong className="font-medium" style={{ color: 'var(--ink)' }}>Cal.com</strong>: We use Cal.com to manage appointment bookings. When you book a strategy call, your name and email are processed by Cal.com. Cal.com&rsquo;s privacy policy is available at cal.com/privacy.
                </p>
                <p>
                  <strong className="font-medium" style={{ color: 'var(--ink)' }}>Netlify</strong>: Our website is hosted on Netlify, which processes server logs and form submissions. Netlify&rsquo;s privacy policy is available at netlify.com/privacy.
                </p>
                <p>
                  <strong className="font-medium" style={{ color: 'var(--ink)' }}>Stripe</strong>: Payment processing for our services is handled by Stripe. We do not store your payment card information. Stripe&rsquo;s privacy policy is available at stripe.com/privacy.
                </p>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                6. Disclosure of your information
              </h2>
              <p className="mb-4">We do not sell, rent or trade your personal information to third parties. We may disclose your information to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Third party service providers listed above, solely for the purposes of providing our services</li>
                <li>Legal or regulatory authorities if required by law</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                7. Data storage and security
              </h2>
              <p>
                Your personal information is stored securely using Google Workspace and the third party platforms listed above. We take reasonable steps to protect your information from misuse, interference, loss and unauthorised access. However, no internet transmission is completely secure and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                8. Data retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and meet our legal obligations. Client project information is generally retained for 7 years for tax and legal purposes. You may request deletion of your personal information at any time (see Section 10).
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                9. Cookies
              </h2>
              <p>
                Our website uses cookies and similar technologies to improve your browsing experience and analyse website traffic through Google Analytics. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                10. Your rights
              </h2>
              <p className="mb-4">Under the Australian Privacy Principles, you have the right to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal obligations)</li>
                <li>Make a complaint about how we have handled your information</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at kate@makeitmedia.io. We will respond within 30 days.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                11. Complaints
              </h2>
              <p>
                If you believe we have breached the Australian Privacy Principles, you may contact us first at kate@makeitmedia.io. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                12. Contact us
              </h2>
              <p>For any privacy-related questions or requests:</p>
              <p className="mt-2" style={{ color: 'var(--ink)' }}>
                Kate Gerathy - Make It Media<br />
                <a href="mailto:kate@makeitmedia.io" className="underline" style={{ color: 'var(--sage-dark)' }}>kate@makeitmedia.io</a><br />
                makeitmedia.io
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className={sectionHeading} style={{ color: 'var(--sage-dark)' }}>
                13. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The current version will always be available at makeitmedia.io/privacy with the date of last update shown at the top.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
