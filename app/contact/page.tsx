'use client'

import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen morning-gradient text-[#111827]">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111827] mb-4">
              Contact & Support
            </h1>
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6">
              We're here to help. Whether you need assistance, have questions, or want to report an issue, we'll respond as soon as possible.
            </p>
            
            {/* Support Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-white to-[#FFF9EE] border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <svg className="w-8 h-8 text-[#5063FF] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-sm font-semibold text-[#111827]">Get Help</h3>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-white to-[#FFF9EE] border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <svg className="w-8 h-8 text-[#5063FF] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-sm font-semibold text-[#111827]">Ask Questions</h3>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-white to-[#FFF9EE] border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <svg className="w-8 h-8 text-[#5063FF] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-sm font-semibold text-[#111827]">Report Issues</h3>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10">
            <form 
              action="mailto:support@notemydream.com"
              method="get"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#111827] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#5063FF]/20 focus:border-[#5063FF] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#5063FF]/20 focus:border-[#5063FF] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-[#111827] mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-[#5063FF]/20 focus:border-[#5063FF] transition-all"
                >
                  <option value="">Select a category</option>
                  <option value="help">Get Help</option>
                  <option value="question">Ask a Question</option>
                  <option value="issue">Report an Issue</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#111827] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#5063FF]/20 focus:border-[#5063FF] transition-all"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#5063FF]/20 focus:border-[#5063FF] transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-[#5063FF] text-white text-sm font-medium shadow-[0_8px_30px_rgba(80,99,255,0.25)] hover:shadow-[0_12px_40px_rgba(80,99,255,0.35)] hover:-translate-y-1 transition-all duration-200 ease-out"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] text-center">
                Or email us directly at{' '}
                <a 
                  href="mailto:support@notemydream.com" 
                  className="text-[#5063FF] hover:text-[#4048CC] font-medium transition-colors"
                >
                  support@notemydream.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
