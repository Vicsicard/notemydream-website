'use client'

import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen morning-gradient text-[#111827]">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#5063FF] hover:text-[#4048CC] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Terms of Service Content */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-[#9CA3AF] mb-8">
              Last updated: November 16, 2025
            </p>

            <div className="prose prose-sm sm:prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Agreement to Terms</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  By accessing or using NoteMyDream ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  These Terms apply to all users of the App, including visitors, registered users, and subscribers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Description of Service</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  NoteMyDream is a voice-first dream journaling and morning reflection application designed to help users:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li>Record and transcribe dream memories through voice</li>
                  <li>Engage in guided reflection with AI-powered prompts</li>
                  <li>Track emotional patterns and themes over time</li>
                  <li>Receive gentle morning reminders and weekly summaries</li>
                  <li>Build a personal dream timeline and reflection history</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">User Accounts</h2>
                
                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Account Creation</h3>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  To use NoteMyDream, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your password</li>
                  <li>Be responsible for all activity under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Age Requirement</h3>
                <p className="text-[#4B5563] leading-relaxed">
                  You must be at least 13 years old to use NoteMyDream. Users under 18 should have parental or guardian consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">User Content and Ownership</h2>
                
                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Your Content</h3>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  You retain all rights to the content you create in NoteMyDream, including:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2 mb-4">
                  <li>Voice recordings of your dreams</li>
                  <li>Written reflections and responses</li>
                  <li>Personal notes and entries</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">License to Us</h3>
                <p className="text-[#4B5563] leading-relaxed">
                  By using the App, you grant us a limited license to store, process, and display your content solely for the purpose of providing the service. We will not use your content for any other purpose without your explicit consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Acceptable Use</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li>Use the App for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to the App or its systems</li>
                  <li>Interfere with or disrupt the App's functionality</li>
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Use automated systems to access the App without permission</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Subscription and Payment</h2>
                
                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Free and Premium Features</h3>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  NoteMyDream may offer both free and premium subscription tiers. Premium features may include:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2 mb-4">
                  <li>Unlimited dream recordings</li>
                  <li>Advanced insights and pattern analysis</li>
                  <li>Extended reflection history</li>
                  <li>Priority customer support</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Billing</h3>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  Premium subscriptions are billed on a recurring basis (monthly or annually). You authorize us to charge your payment method for all fees incurred.
                </p>

                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Cancellation and Refunds</h3>
                <p className="text-[#4B5563] leading-relaxed">
                  You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. Refunds are handled in accordance with applicable app store policies (Apple App Store, Google Play Store).
                </p>
                <p className="text-[#4B5563] leading-relaxed mt-4">
                  For iOS users, all subscriptions are billed and managed through Apple&apos;s App Store. Refund requests for iOS purchases must be handled directly through Apple.
                </p>
                <p className="text-[#4B5563] leading-relaxed mt-2">
                  Users who subscribed on the web may sign in on iOS to access premium features, but new purchases on iOS must be completed through Apple.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">AI-Generated Content</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  NoteMyDream uses artificial intelligence to:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2 mb-4">
                  <li>Transcribe voice recordings</li>
                  <li>Generate reflection prompts and questions</li>
                  <li>Identify emotional themes and patterns</li>
                  <li>Create weekly summaries</li>
                </ul>
                <p className="text-[#4B5563] leading-relaxed">
                  <strong>Important:</strong> AI-generated insights are for personal reflection only and should not be considered professional medical, psychological, or therapeutic advice. If you are experiencing mental health concerns, please consult a qualified healthcare professional.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Disclaimer of Warranties</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  NoteMyDream is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li>The App will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>The App is free of viruses or harmful components</li>
                  <li>Results from using the App will meet your expectations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Limitation of Liability</h2>
                <p className="text-[#4B5563] leading-relaxed">
                  To the fullest extent permitted by law, NoteMyDream and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, revenue, or profits, arising from your use of the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Termination</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your account if you violate these Terms or engage in conduct we deem harmful to the App or other users.
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  You may terminate your account at any time by contacting us or using the in-app account deletion feature. Upon termination, your data will be deleted in accordance with our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Changes to Terms</h2>
                <p className="text-[#4B5563] leading-relaxed">
                  We may modify these Terms at any time. We will notify you of material changes via email or in-app notification. Your continued use of NoteMyDream after changes constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Governing Law</h2>
                <p className="text-[#4B5563] leading-relaxed">
                  These Terms are governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration or in courts of competent jurisdiction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Contact Information</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  Email: <a href="mailto:hello@notemydream.com" className="text-[#5063FF] hover:text-[#4048CC]">hello@notemydream.com</a><br />
                  Website: <a href="/" className="text-[#5063FF] hover:text-[#4048CC]">notemydream.com</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Acknowledgment</h2>
                <p className="text-[#4B5563] leading-relaxed">
                  By using NoteMyDream, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
