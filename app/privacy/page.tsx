'use client'

import Link from 'next/link'

export default function Privacy() {
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

      {/* Privacy Policy Content */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#9CA3AF] mb-8">
              Last updated: November 16, 2025
            </p>

            <div className="prose prose-sm sm:prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Introduction</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  At NoteMyDream, we believe your dreams are deeply personal. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and services.
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  Your privacy is paramount to us. We are committed to transparency and giving you control over your data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Information You Provide</h3>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
                  <li><strong>Dream Recordings:</strong> Voice recordings and transcriptions of your dreams. By default, audio recordings are deleted after they are successfully transcribed, unless you enable the optional <em>"Keep Audio Recordings"</em> setting in the app.</li>
                  <li><strong>Reflections:</strong> Your responses to reflection prompts and emotional check-ins</li>
                  <li><strong>Profile Settings:</strong> Notification preferences, reminder times, and app settings</li>
                </ul>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  Note My Dream is not a therapy, counseling, or medical service, and does not provide diagnosis, treatment, or professional advice.
                </p>

                <h3 className="text-xl font-semibold text-[#111827] mb-3 mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li><strong>Usage Data:</strong> How you interact with the app, features used, and session duration</li>
                  <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
                  <li><strong>Analytics:</strong> Aggregated, anonymized data to improve app performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">How We Use Your Information</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li>Provide and maintain the NoteMyDream service</li>
                  <li>Process and store your dream recordings and reflections</li>
                  <li>Generate personalized insights and weekly summaries</li>
                  <li>Send you morning reminders (if enabled)</li>
                  <li>Improve app functionality and user experience</li>
                  <li>Communicate important updates about the service</li>
                  <li>Provide customer support</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Data Storage and Security</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  Your dream recordings and reflections are encrypted and stored securely. We use industry-standard security measures including:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li>End-to-end encryption for voice recordings</li>
                  <li>Secure cloud storage with encrypted databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited employee access to user data</li>
                </ul>
                <p className="text-[#4B5563] leading-relaxed mt-4">
                  By default, audio recordings are kept only as long as needed to create a transcript of your dream and are then deleted. If you enable the optional <strong>"Keep Audio Recordings"</strong> setting in the app, your audio may be stored for longer so you can revisit it. In all cases, you can delete individual dreams or delete your account to remove your associated data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Data Sharing</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  <strong>We do not sell your personal information.</strong> We may share data only in these limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li><strong>Service Providers:</strong> Trusted third-party services that help us operate the app (e.g., cloud hosting, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Your Rights and Choices</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-[#4B5563] space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Delete:</strong> Request deletion of your account and all associated data</li>
                  <li><strong>Export:</strong> Download your dream recordings and reflections</li>
                  <li><strong>Opt-Out:</strong> Disable notifications and analytics</li>
                  <li><strong>Correct:</strong> Update or correct your personal information</li>
                </ul>
                <p className="text-[#4B5563] leading-relaxed mt-4">
                  To exercise these rights, contact us at <a href="mailto:hello@notemydream.com" className="text-[#5063FF] hover:text-[#4048CC]">hello@notemydream.com</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Children's Privacy</h2>
                <p className="text-[#4B5563] leading-relaxed">
                  NoteMyDream is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">International Users</h2>
                <p className="text-[#4B5563] leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Changes to This Policy</h2>
                <p className="text-[#4B5563] leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification. Your continued use of NoteMyDream after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#111827] mb-4">Contact Us</h2>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  Email: <a href="mailto:hello@notemydream.com" className="text-[#5063FF] hover:text-[#4048CC]">hello@notemydream.com</a><br />
                  Website: <a href="/" className="text-[#5063FF] hover:text-[#4048CC]">notemydream.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
