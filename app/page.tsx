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

      {/* Feel the Difference Section */}
      <section id="feel-difference" className="py-16 md:py-20 bg-gradient-to-b from-lavender-mist/20 to-white/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
            textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
            letterSpacing: '-0.01em'
          }}>
            Feel the difference in your mornings.
          </h2>
          <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-3xl mx-auto leading-relaxed mb-10">
            As your reflections accumulate, mornings feel less rushed and more grounded. A few quiet moments can change how you move through the day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="glass-medium rounded-2xl p-6 text-left">
              <p className="text-midnight-indigo font-semibold">Wake up with more clarity.</p>
            </div>
            <div className="glass-medium rounded-2xl p-6 text-left">
              <p className="text-midnight-indigo font-semibold">Reduce that "spinning mind" feeling.</p>
            </div>
            <div className="glass-medium rounded-2xl p-6 text-left">
              <p className="text-midnight-indigo font-semibold">Notice what your inner world has been trying to say.</p>
            </div>
            <div className="glass-medium rounded-2xl p-6 text-left">
              <p className="text-midnight-indigo font-semibold">Start the day connected, not scattered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calm Record Timeline Section */}
      <section id="calm-record" className="py-16 md:py-20 bg-gradient-to-b from-white/50 to-white/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
              textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
              letterSpacing: '-0.01em'
            }}>
              A calm record of your inner world
            </h2>
            <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-3xl mx-auto leading-relaxed">
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
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
              textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
              letterSpacing: '-0.01em'
            }}>
              A soft weekly check-in
            </h2>
            <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-3xl mx-auto leading-relaxed">
              On Sunday mornings, your Dream Guide offers a gentle reflection on your week — highlighting tones, emotions, and recurring themes. Nothing diagnostic. Nothing interpretive. Just a quiet way to notice your inner world.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="space-y-4 text-midnight-indigo/80">
              <p className="text-lg">Your dreams felt calmer this week.</p>
              <p className="text-lg">A recurring tone: <span className="font-semibold text-dream-purple">curiosity</span>.</p>
              <p className="text-lg italic">A gentle question: What do you want to carry forward into next week?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="founder-story" className="py-16 md:py-20 bg-gradient-to-b from-white/40 to-lavender-mist/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
              textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
              letterSpacing: '-0.01em'
            }}>
              Why I built NoteMyDream
            </h2>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-10">
            <p className="text-lg text-midnight-indigo/80 leading-relaxed mb-6">
              I built NoteMyDream because my own mornings felt rushed and disconnected. I was waking from vivid dreams that disappeared before I could understand how they made me feel. I wanted a quiet, non-judgmental space to reflect before the noise of the day. This app is that space — a soft morning companion for anyone seeking clarity, calm, and emotional awareness.
            </p>
            <p className="text-right text-midnight-indigo/60 font-semibold">— Founder</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-b from-white/50 to-lavender-mist/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
              textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
              letterSpacing: '-0.01em'
            }}>
              What early users are saying
            </h2>
            <p className="text-base sm:text-lg text-midnight-indigo/70 max-w-2xl mx-auto">
              Join others who've made morning reflection part of their routine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{
                  background: 'linear-gradient(135deg, #6B5CE7 0%, #A99FF5 100%)'
                }}>
                  S
                </div>
                <div>
                  <p className="font-semibold text-midnight-indigo">Sarah M.</p>
                  <p className="text-sm text-midnight-indigo/60">Morning Person</p>
                </div>
              </div>
              <p className="text-midnight-indigo/80 italic leading-relaxed">
                "Finally, a way to capture my dreams without fumbling with typing. The voice feature is perfect for those groggy mornings."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{
                  background: 'linear-gradient(135deg, #8B7CE8 0%, #6B5CE7 100%)'
                }}>
                  M
                </div>
                <div>
                  <p className="font-semibold text-midnight-indigo">Michael T.</p>
                  <p className="text-sm text-midnight-indigo/60">Dream Journaler</p>
                </div>
              </div>
              <p className="text-midnight-indigo/80 italic leading-relaxed">
                "The AI guide asks such thoughtful questions. It's like having a gentle conversation with myself each morning."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{
                  background: 'linear-gradient(135deg, #A99FF5 0%, #8B7CE8 100%)'
                }}>
                  A
                </div>
                <div>
                  <p className="font-semibold text-midnight-indigo">Alex K.</p>
                  <p className="text-sm text-midnight-indigo/60">Mindfulness Practitioner</p>
                </div>
              </div>
              <p className="text-midnight-indigo/80 italic leading-relaxed">
                "This has become my favorite morning ritual. It's calming, insightful, and helps me start the day with clarity."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-dream-purple" fill="currentColor" viewBox="0 0 20 20">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
              textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
              letterSpacing: '-0.01em'
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
      <section id="cta" className="py-16 md:py-20 bg-gradient-to-b from-lavender-mist/40 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight-indigo mb-4 leading-tight" style={{
            textShadow: '0 2px 8px rgba(107, 92, 231, 0.25), 0 4px 16px rgba(107, 92, 231, 0.15)',
            letterSpacing: '-0.01em'
          }}>
            Start Your Morning Ritual
          </h2>
          <p className="text-base sm:text-lg text-midnight-indigo/70 mb-8">
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
      <footer className="py-16 px-6 bg-gradient-to-b from-white to-lavender-mist/20 border-t border-midnight-indigo/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-midnight-indigo mb-4">Note My Dream</h3>
              <p className="text-base text-midnight-indigo/70 mb-6 max-w-md">
                Your morning reflection companion. A gentle space for capturing dreams and finding clarity before the day begins.
              </p>
              <a
                href={pwaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-dream-purple text-white font-semibold hover:scale-105 transition-transform duration-200"
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
