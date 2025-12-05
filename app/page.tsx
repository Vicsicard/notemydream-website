'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [showStickyButton, setShowStickyButton] = useState(false)
  const [showFAQ, setShowFAQ] = useState<number | null>(null)
  const [showWatchAgain, setShowWatchAgain] = useState(false)
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)
  
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

  // Handle video end
  const handleVideoEnd = () => {
    setShowWatchAgain(true)
  }

  // Handle watch again click
  const handleWatchAgain = () => {
    if (videoRef) {
      videoRef.currentTime = 0
      videoRef.play()
      setShowWatchAgain(false)
    }
  }

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
                  ref={(el) => setVideoRef(el)}
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                  className="w-full h-auto"
                >
                  <source src="/INTRO_VIDEO_1.mp4" type="video/mp4" />
                </video>
                
                {/* Watch Again Button Overlay */}
                {showWatchAgain && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
                    <button
                      onClick={handleWatchAgain}
                      className="group px-8 py-4 rounded-2xl bg-dream-purple text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                      <span>Watch Again</span>
                    </button>
                  </div>
                )}
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

      {/* Feel the Difference Section */}
      <section id="feel-difference" className="py-16 md:py-20 bg-gradient-to-b from-lavender-mist/20 to-white/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-6 leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
            textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
            letterSpacing: '-0.02em'
          }}>
            Feel the difference in your mornings.
          </h2>
          <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-3xl mx-auto leading-relaxed mb-12 animate-[fadeUp_0.8s_ease-out]">
            As your reflections accumulate, mornings feel less rushed and more grounded. A few quiet moments can change how you move through the day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="glass-strong rounded-2xl p-6 text-left hover:scale-105 transition-all duration-300 animate-[fadeUp_1s_ease-out]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dream-purple/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p className="text-midnight-indigo font-semibold">Wake up with more clarity.</p>
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6 text-left hover:scale-105 transition-all duration-300 animate-[fadeUp_1.1s_ease-out]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dream-purple/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-midnight-indigo font-semibold">Reduce that "spinning mind" feeling.</p>
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6 text-left hover:scale-105 transition-all duration-300 animate-[fadeUp_1.2s_ease-out]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dream-purple/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-midnight-indigo font-semibold">Notice what your inner world has been trying to say.</p>
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6 text-left hover:scale-105 transition-all duration-300 animate-[fadeUp_1.3s_ease-out]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dream-purple/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-midnight-indigo font-semibold">Start the day connected, not scattered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calm Record Timeline Section */}
      <section id="calm-record" className="py-16 md:py-20 bg-gradient-to-b from-white/50 to-white/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-6 leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
              textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
              letterSpacing: '-0.02em'
            }}>
              A calm record of your inner world
            </h2>
            <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-3xl mx-auto leading-relaxed animate-[fadeUp_0.8s_ease-out]">
              Each morning's reflection becomes part of a quiet timeline. Over time, patterns, feelings, and themes begin to reveal themselves — gently, without interpretation or analysis.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-strong rounded-2xl p-5 border-l-4 border-dream-purple hover:scale-[1.02] transition-transform duration-200">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold text-midnight-indigo/60">November 3, 2025</p>
                <span className="px-3 py-1 rounded-full bg-dream-purple/20 text-dream-purple text-xs font-semibold">calm</span>
              </div>
              <p className="text-midnight-indigo">Soft colors. Woke feeling peaceful and steady.</p>
            </div>

            <div className="glass-strong rounded-2xl p-5 border-l-4 border-soft-purple hover:scale-[1.02] transition-transform duration-200">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold text-midnight-indigo/60">November 2, 2025</p>
                <span className="px-3 py-1 rounded-full bg-soft-purple/20 text-soft-purple text-xs font-semibold">curious</span>
              </div>
              <p className="text-midnight-indigo">Dreamed of running water. Felt calm waking up.</p>
            </div>

            <div className="glass-strong rounded-2xl p-5 border-l-4 border-dream-purple hover:scale-[1.02] transition-transform duration-200">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold text-midnight-indigo/60">November 1, 2025</p>
                <span className="px-3 py-1 rounded-full bg-dream-purple/20 text-dream-purple text-xs font-semibold">restless</span>
              </div>
              <p className="text-midnight-indigo">Chaotic dream, but clarity after reflecting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Check-in Section */}
      <section id="weekly-checkin" className="py-16 md:py-20 bg-gradient-to-b from-lavender-mist/20 to-white/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-6 leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
              textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
              letterSpacing: '-0.02em'
            }}>
              A soft weekly check-in
            </h2>
            <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-3xl mx-auto leading-relaxed animate-[fadeUp_0.8s_ease-out]">
              On Sunday mornings, your Dream Guide offers a gentle reflection on your week — highlighting tones, emotions, and recurring themes. Nothing diagnostic. Nothing interpretive. Just a quiet way to notice your inner world.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-8 md:p-10 max-w-2xl mx-auto hover:scale-[1.02] transition-all duration-300" style={{
            animation: 'glow-pulse 4s ease-in-out infinite'
          }}>
            <div className="space-y-5 text-midnight-indigo/80">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-dream-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-lg">Your dreams felt calmer this week.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-dream-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-lg">A recurring tone: <span className="font-bold text-dream-purple">curiosity</span>.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-dream-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <p className="text-lg italic">A gentle question: What do you want to carry forward into next week?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="founder-story" className="py-16 md:py-20 bg-gradient-to-b from-white/40 to-lavender-mist/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-6 leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
              textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
              letterSpacing: '-0.02em'
            }}>
              Why I built NoteMyDream
            </h2>
          </div>

          <div className="glass-strong rounded-2xl p-8 md:p-12 hover:scale-[1.01] transition-all duration-300" style={{
            animation: 'glow-pulse 4s ease-in-out infinite'
          }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dream-purple to-soft-purple flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-midnight-indigo/80 leading-relaxed">
                  I built NoteMyDream because my own mornings felt rushed and disconnected. I was waking from vivid dreams that disappeared before I could understand how they made me feel. I wanted a quiet, non-judgmental space to reflect before the noise of the day. This app is that space — a soft morning companion for anyone seeking clarity, calm, and emotional awareness.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="h-px w-12 bg-dream-purple/30"></div>
              <p className="text-midnight-indigo/60 font-semibold italic">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-b from-white/50 to-lavender-mist/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-6 leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
              textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
              letterSpacing: '-0.02em'
            }}>
              What early users are saying
            </h2>
            <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-2xl mx-auto animate-[fadeUp_0.8s_ease-out]">
              Join others who've made morning reflection part of their routine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 - Sarah */}
            <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-[fadeUp_1s_ease-out]">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl ring-4 ring-dream-purple/20" style={{
                  animation: 'float-gentle 3s ease-in-out infinite'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" 
                    alt="Sarah M."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-midnight-indigo text-lg">Sarah M.</p>
                  <p className="text-sm text-midnight-indigo/60">Morning Person</p>
                </div>
              </div>
              <p className="text-midnight-indigo/80 italic leading-relaxed mb-4">
                "Finally, a way to capture my dreams without fumbling with typing. The voice feature is perfect for those groggy mornings."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 - Michael */}
            <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-[fadeUp_1.1s_ease-out]">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl ring-4 ring-dream-purple/20" style={{
                  animation: 'float-gentle 3s ease-in-out infinite 0.5s'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" 
                    alt="Michael T."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-midnight-indigo text-lg">Michael T.</p>
                  <p className="text-sm text-midnight-indigo/60">Dream Journaler</p>
                </div>
              </div>
              <p className="text-midnight-indigo/80 italic leading-relaxed mb-4">
                "The AI guide asks such thoughtful questions. It's like having a gentle conversation with myself each morning."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 - Alex */}
            <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-[fadeUp_1.2s_ease-out]">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl ring-4 ring-dream-purple/20" style={{
                  animation: 'float-gentle 3s ease-in-out infinite 1s'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces" 
                    alt="Alex K."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-midnight-indigo text-lg">Alex K.</p>
                  <p className="text-sm text-midnight-indigo/60">Mindfulness Practitioner</p>
                </div>
              </div>
              <p className="text-midnight-indigo/80 italic leading-relaxed mb-4">
                "This has become my favorite morning ritual. It's calming, insightful, and helps me start the day with clarity."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-gradient-to-b from-lavender-mist/30 to-white/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-6 leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
              textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
              letterSpacing: '-0.02em'
            }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="glass-strong rounded-2xl overflow-hidden">
              <button
                onClick={() => setShowFAQ(showFAQ === 1 ? null : 1)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-midnight-indigo">How does the voice recording work?</span>
                <svg className={`w-5 h-5 text-dream-purple transition-transform ${showFAQ === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showFAQ === 1 && (
                <div className="px-6 pb-4 text-midnight-indigo/70">
                  Simply tap the record button and speak naturally. Our AI transcribes your dream and asks gentle follow-up questions to help you reflect.
                </div>
              )}
            </div>

            <div className="glass-strong rounded-2xl overflow-hidden">
              <button
                onClick={() => setShowFAQ(showFAQ === 2 ? null : 2)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-midnight-indigo">Is my data private and secure?</span>
                <svg className={`w-5 h-5 text-dream-purple transition-transform ${showFAQ === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showFAQ === 2 && (
                <div className="px-6 pb-4 text-midnight-indigo/70">
                  Absolutely. Your dreams and reflections are encrypted and stored securely. We never share your personal data with third parties.
                </div>
              )}
            </div>

            <div className="glass-strong rounded-2xl overflow-hidden">
              <button
                onClick={() => setShowFAQ(showFAQ === 3 ? null : 3)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-midnight-indigo">Can I use it on multiple devices?</span>
                <svg className={`w-5 h-5 text-dream-purple transition-transform ${showFAQ === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showFAQ === 3 && (
                <div className="px-6 pb-4 text-midnight-indigo/70">
                  Yes! Your account syncs across all your devices. Start on your phone in the morning and review on your tablet or computer later.
                </div>
              )}
            </div>

            <div className="glass-strong rounded-2xl overflow-hidden">
              <button
                onClick={() => setShowFAQ(showFAQ === 4 ? null : 4)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-midnight-indigo">Do I need to record every day?</span>
                <svg className={`w-5 h-5 text-dream-purple transition-transform ${showFAQ === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showFAQ === 4 && (
                <div className="px-6 pb-4 text-midnight-indigo/70">
                  Not at all! Use it whenever you feel called to. There's no pressure or guilt—just a gentle space waiting for you when you're ready.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 md:py-24 bg-gradient-to-b from-lavender-mist/40 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-midnight-indigo mb-6 leading-tight animate-[fadeUp_0.6s_ease-out]" style={{
            textShadow: '0 4px 12px rgba(107, 92, 231, 0.4), 0 2px 6px rgba(107, 92, 231, 0.3), 0 8px 24px rgba(107, 92, 231, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
            letterSpacing: '-0.02em'
          }}>
            Start Your Morning Ritual
          </h2>
          <p className="text-lg sm:text-xl text-midnight-indigo/70 mb-10 animate-[fadeUp_0.8s_ease-out]">
            Available now as a web app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          <p className="text-sm text-midnight-indigo/50 mt-8">
            Works on all devices
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-gradient-to-b from-white via-lavender-mist/10 to-lavender-mist/30 border-t border-midnight-indigo/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-midnight-indigo mb-4" style={{
                textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)'
              }}>Note My Dream</h3>
              <p className="text-base text-midnight-indigo/70 mb-8 max-w-md leading-relaxed">
                Your morning reflection companion. A gentle space for capturing dreams and finding clarity before the day begins.
              </p>
              <a
                href={pwaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-2xl bg-dream-purple text-white font-bold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Open Web App
              </a>
            </div>
            <div>
              <h4 className="font-bold text-midnight-indigo mb-4">Support</h4>
              <ul className="space-y-3 text-midnight-indigo/70">
                <li><a href="/contact" className="hover:text-dream-purple transition-colors">Contact</a></li>
                <li><a href="/support" className="hover:text-dream-purple transition-colors">Help Center</a></li>
                <li><a href="#faq" className="hover:text-dream-purple transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-midnight-indigo mb-4">Legal</h4>
              <ul className="space-y-3 text-midnight-indigo/70">
                <li><a href="/privacy" className="hover:text-dream-purple transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-dream-purple transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-midnight-indigo/50 pt-8 border-t border-midnight-indigo/10">
            <p className="mb-2">© 2025 Note My Dream. Your dreams stay yours.</p>
            <p className="text-xs">Made with care for mindful mornings.</p>
          </div>
        </div>
      </footer>

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
