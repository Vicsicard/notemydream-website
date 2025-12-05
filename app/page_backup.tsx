'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [showStickyButton, setShowStickyButton] = useState(false)
  const [showFAQ, setShowFAQ] = useState<number | null>(null)
  
  // PWA URL - update this with your actual deployed PWA URL
  const pwaUrl = process.env.NEXT_PUBLIC_PWA_URL || 'https://app.notemydream.com'

  // Handle sticky button visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero section
      setShowStickyButton(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen dream-gradient text-midnight-indigo overflow-x-hidden">
      {/* Hero Section with Intro Video */}
      <section id="hero" className="relative pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-midnight-indigo leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
              textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
              letterSpacing: '-0.02em'
            }}>
              Note My Dream
            </h1>
            
            <p className="text-lg sm:text-xl text-midnight-indigo/70 max-w-2xl mx-auto leading-relaxed animate-[fadeUp_0.8s_ease-out]">
              Your Morning Reflection Companion
            </p>

            {/* Intro Video */}
            <div className="max-w-2xl mx-auto mt-8 animate-[fadeUp_1s_ease-out]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-medium" style={{
                animation: 'glow-pulse 4s ease-in-out infinite'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/INTRO_VIDEO_1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <p className="text-base sm:text-lg text-midnight-indigo/60 max-w-xl mx-auto mt-6">
              Wake up, speak your dream, and start your day with gentle clarity.
            </p>

            {/* Primary CTA */}
            <div className="flex justify-center items-center mt-8">
              <a
                href={pwaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 rounded-2xl bg-dream-purple text-white text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                style={{
                  animation: 'pulse-soft 3s ease-in-out infinite'
                }}
              >
                <span className="relative z-10">Open Web App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  animation: 'shimmer 2s infinite',
                  backgroundSize: '200% 100%'
                }}></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Build a Morning Ritual Section */}
      <section id="morning-ritual" className="py-16 md:py-20 bg-gradient-to-b from-white/60 to-white/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
              textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
              letterSpacing: '-0.01em'
            }}>
              Build a morning ritual that supports you.
            </h2>
            <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-3xl mx-auto leading-relaxed">
              NoteMyDream isn't just an app. It's a calm moment at the start of your day — a gentle check-in with your inner world before notifications, news, and noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="glass-medium rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-midnight-indigo mb-3">
                Begin each day with gentle clarity.
              </h3>
              <p className="text-midnight-indigo/70">
                A grounded shift before the rest of the world wakes up.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-medium rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-midnight-indigo mb-3">
                Turn dream moments into emotional insight.
              </h3>
              <p className="text-midnight-indigo/70">
                A quiet space to understand how you feel, not decode symbols.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-medium rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-midnight-indigo mb-3">
                Create a routine that feels natural, not forced.
              </h3>
              <p className="text-midnight-indigo/70">
                A soft, supportive rhythm that grows with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Homepage Video */}
      <section id="features" className="py-16 md:py-20 bg-gradient-to-b from-lavender-mist/30 to-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Video */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-medium" style={{
                animation: 'glow-pulse 4s ease-in-out infinite'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/HOMEPAGE VIDEO 1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo leading-tight" style={{
                textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
                letterSpacing: '-0.01em'
              }}>
                Voice-First Dream Journaling
              </h2>
              <p className="text-lg text-midnight-indigo/70 leading-relaxed">
                Designed for sleepy mornings when typing feels impossible. Just speak your dream, and let our AI guide help you reflect.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-dream-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-midnight-indigo">Record by Voice</p>
                    <p className="text-sm text-midnight-indigo/60">Speak naturally, no typing required</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-dream-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-midnight-indigo">AI-Guided Reflection</p>
                    <p className="text-sm text-midnight-indigo/60">Gentle questions to explore your dreams</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-dream-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-midnight-indigo">Private & Secure</p>
                    <p className="text-sm text-midnight-indigo/60">Your dreams stay yours, always</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works WITH SCREENSHOTS */}
      <section id="how-it-works" className="py-16 md:py-20 bg-gradient-to-b from-white/50 to-white/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-midnight-indigo mb-12 leading-tight" style={{
            textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
            letterSpacing: '-0.01em'
          }}>
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 - WITH SCREENSHOT */}
            <div className="glass-medium rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="relative mx-auto mb-6" style={{ width: '200px', height: '400px' }}>
                {/* Phone Frame */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-midnight-indigo to-midnight-indigo/80 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    <img 
                      src="/screenshots/recording.PNG" 
                      alt="Recording screen"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-dream-purple text-white flex items-center justify-center text-lg font-bold shadow-lg z-10">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-midnight-indigo mb-3">Wake & Speak</h3>
              <p className="text-midnight-indigo/70 leading-relaxed">
                Open the app in the morning and tap record. Speak your dream naturally—no typing needed.
              </p>
            </div>

            {/* Step 2 - WITH SCREENSHOT */}
            <div className="glass-medium rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="relative mx-auto mb-6" style={{ width: '200px', height: '400px' }}>
                {/* Phone Frame */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-midnight-indigo to-midnight-indigo/80 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    <img 
                      src="/screenshots/conversation.PNG" 
                      alt="Conversation with Dream Guide"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-dream-purple text-white flex items-center justify-center text-lg font-bold shadow-lg z-10">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-midnight-indigo mb-3">Reflect Together</h3>
              <p className="text-midnight-indigo/70 leading-relaxed">
                Our AI Dream Guide asks gentle questions to help you explore what your dream might mean.
              </p>
            </div>

            {/* Step 3 - WITH SCREENSHOT */}
            <div className="glass-medium rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="relative mx-auto mb-6" style={{ width: '200px', height: '400px' }}>
                {/* Phone Frame */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-midnight-indigo to-midnight-indigo/80 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                    <img 
                      src="/screenshots/timeline.PNG" 
                      alt="Dream timeline"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-dream-purple text-white flex items-center justify-center text-lg font-bold shadow-lg z-10">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-midnight-indigo mb-3">Track & Discover</h3>
              <p className="text-midnight-indigo/70 leading-relaxed">
                See your dreams over time. Notice patterns, emotions, and insights that emerge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA Button */}
      {showStickyButton && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden z-50 animate-[slideInUp_0.3s_ease-out]">
          <a
            href={pwaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 rounded-2xl bg-dream-purple text-white text-center font-bold shadow-2xl active:scale-95 transition-transform duration-200"
            style={{
              animation: 'pulse-soft 3s ease-in-out infinite'
            }}
          >
            Open Web App
          </a>
        </div>
      )}
    </div>
  )
}
