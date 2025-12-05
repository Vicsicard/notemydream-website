'use client'

import Link from 'next/link'

export default function Support() {
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

      {/* Support Content */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] mb-4">
              Support & FAQ
            </h1>
            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              Note My Dream is designed to be a gentle companion for your morning reflection ritual.
              If you run into any issues or have questions, we&apos;re here to help.
            </p>

            <div className="mb-10">
              <h2 className="text-xl font-semibold text-[#111827] mb-3">Contact</h2>
              <p className="text-[#4B5563] leading-relaxed mb-2">
                The easiest way to reach us is by email:
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                Email: <a href="mailto:support@notemydream.com" className="text-[#5063FF] hover:text-[#4048CC] font-medium">support@notemydream.com</a>
              </p>
              <p className="text-[#9CA3AF] text-sm mt-2">
                We aim to respond within 1–2 business days.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-[#111827] mb-3">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">Is Note My Dream therapy?</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      No. Note My Dream is a journaling and self-reflection app. It is not therapy,
                      counseling, or medical care, and it does not provide diagnosis, treatment, or
                      professional advice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">What if I&apos;m in crisis or feel unsafe?</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      Do not use this app for help in an emergency. If you are in crisis, feeling unsafe,
                      or thinking about harming yourself or someone else, contact your local emergency
                      number, a crisis hotline, or a qualified professional in your area immediately.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">How do I delete my account and data?</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      You can delete your account and all associated data from within the app:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-[#4B5563] space-y-1 mt-1">
                      <li>Open the app</li>
                      <li>Go to <span className="font-medium">Settings → Account → Delete All Data</span></li>
                      <li>Confirm the deletion</li>
                    </ul>
                    <p className="text-sm text-[#4B5563] leading-relaxed mt-1">
                      This action is permanent and cannot be undone.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">What happens to my audio recordings?</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      By default, audio recordings are deleted after they are successfully transcribed.
                      If you enable the <span className="font-medium">"Keep Audio Recordings"</span> option
                      in the app&apos;s Settings, your audio may be stored until you delete the dream or your
                      account.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#111827] mb-1">How do I get help with billing or subscriptions?</h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      For App Store purchases, billing is handled by Apple. If you have questions about
                      charges or refunds, you can manage your subscription via your Apple ID settings.
                      If you still need help, email us at
                      {' '}
                      <a href="mailto:support@notemydream.com" className="text-[#5063FF] hover:text-[#4048CC] font-medium">
                        support@notemydream.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
