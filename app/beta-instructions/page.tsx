'use client'

import Link from 'next/link'

export default function BetaInstructions() {
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

      {/* Beta Instructions Content */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] mb-4">
                Beta Testing Guide
              </h1>
              <p className="text-base text-[#6B7280]">
                Thank you for helping us test NoteMyDream! Follow the instructions below to get started.
              </p>
            </div>

            {/* iOS Instructions */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#5063FF] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#111827]">Installing on iOS (TestFlight)</h2>
              </div>
              
              <ol className="space-y-4 text-[#4B5563] leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-semibold text-[#5063FF] flex-shrink-0">1.</span>
                  <span><strong>Click the TestFlight link</strong> from the homepage or your invitation email</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#5063FF] flex-shrink-0">2.</span>
                  <span><strong>Install TestFlight</strong> from the App Store if you don't already have it (it's Apple's official beta testing app)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#5063FF] flex-shrink-0">3.</span>
                  <span><strong>Accept the beta invitation</strong> when TestFlight opens</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#5063FF] flex-shrink-0">4.</span>
                  <span><strong>Tap "Install"</strong> to download NoteMyDream</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#5063FF] flex-shrink-0">5.</span>
                  <span><strong>Open the app</strong> from your home screen and start testing!</span>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-[#F8F7FD] rounded-xl border border-[#E7E6FF]">
                <p className="text-sm text-[#6B7280]">
                  <strong className="text-[#111827]">Note:</strong> TestFlight builds expire after 90 days. We'll send you updates when new versions are available.
                </p>
              </div>
            </section>

            {/* Android Instructions */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#34A853] to-[#4285F4] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.341c-.538 0-.969.432-.969.969s.431.969.969.969.969-.432.969-.969-.431-.969-.969-.969zm-11.046 0c-.538 0-.969.432-.969.969s.431.969.969.969.969-.432.969-.969-.431-.969-.969-.969zm11.405-6.746l1.989-3.467a.402.402 0 00-.144-.549.402.402 0 00-.549.144l-2.012 3.506a11.633 11.633 0 00-9.352 0L5.802 4.723a.402.402 0 00-.549-.144.402.402 0 00-.144.549l1.989 3.467C2.772 10.845.5 15.523.5 20.738h23c0-5.215-2.272-9.893-6.618-12.143z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#111827]">Installing on Android (APK)</h2>
              </div>
              
              <ol className="space-y-4 text-[#4B5563] leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-semibold text-[#34A853] flex-shrink-0">1.</span>
                  <span><strong>Download the APK file</strong> by clicking the "Download APK" button on the homepage</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#34A853] flex-shrink-0">2.</span>
                  <div>
                    <strong>Enable "Install from Unknown Sources"</strong> on your Android device:
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>• Go to <strong>Settings → Security</strong> (or <strong>Settings → Apps</strong>)</li>
                      <li>• Find <strong>"Install unknown apps"</strong> or <strong>"Unknown sources"</strong></li>
                      <li>• Allow your browser (Chrome, Firefox, etc.) to install apps</li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#34A853] flex-shrink-0">3.</span>
                  <span><strong>Open the downloaded APK file</strong> from your notifications or Downloads folder</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#34A853] flex-shrink-0">4.</span>
                  <span><strong>Tap "Install"</strong> when prompted</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-[#34A853] flex-shrink-0">5.</span>
                  <span><strong>Open NoteMyDream</strong> and start testing!</span>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-[#FFF9F0] rounded-xl border border-[#FFE2D1]">
                <p className="text-sm text-[#6B7280]">
                  <strong className="text-[#111827]">Security Note:</strong> APK files from unknown sources can be risky. Only download from this official beta site. After testing, you can disable "Unknown sources" again in your settings.
                </p>
              </div>
            </section>

            {/* Reporting Issues */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FFB347] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#111827]">Reporting Bugs & Feedback</h2>
              </div>
              
              <p className="text-[#4B5563] leading-relaxed mb-4">
                Found a bug or have suggestions? We'd love to hear from you!
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xl border border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111827] mb-2">Use the Contact Form</h3>
                  <p className="text-sm text-[#6B7280] mb-3">
                    Visit our <Link href="/contact" className="text-[#5063FF] hover:underline">contact page</Link> and select "Beta Feedback" as the category.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111827] mb-2">What to Include</h3>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    <li>• Device type (iPhone 14, Samsung Galaxy S23, etc.)</li>
                    <li>• Operating system version (iOS 17, Android 13, etc.)</li>
                    <li>• What you were doing when the issue occurred</li>
                    <li>• Screenshots if possible</li>
                    <li>• Any error messages you saw</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What to Expect */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#B6A3FF] to-[#F8D8C9] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-[#111827]">What to Expect</h2>
              </div>
              
              <div className="space-y-3 text-[#4B5563] leading-relaxed">
                <p>
                  <strong className="text-[#111827]">This is a beta version.</strong> You may encounter bugs, incomplete features, or unexpected behavior. That's exactly what we need to know about!
                </p>
                <p>
                  <strong className="text-[#111827]">Updates will be frequent.</strong> We'll push new builds as we fix issues and add features. You'll receive notifications when updates are available.
                </p>
                <p>
                  <strong className="text-[#111827]">Your feedback matters.</strong> Every bug report and suggestion helps us build a better app. Thank you for being part of this journey!
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-[#E5E7EB] text-center">
              <Link 
                href="/"
                className="inline-block px-8 py-4 rounded-2xl bg-[#5063FF] text-white text-sm font-medium shadow-[0_8px_30px_rgba(80,99,255,0.25)] hover:shadow-[0_12px_40px_rgba(80,99,255,0.35)] hover:-translate-y-1 transition-all duration-200"
              >
                Back to Download Page
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
