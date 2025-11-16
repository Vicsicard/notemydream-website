**Build a mobile-first landing page for “NoteMyDream — Your Morning Reflection Companion” that bakes in retention & habit formation concepts from the start: morning ritual, gentle notifications, dream timeline, weekly summaries, and soft identity (“I am someone who reflects in the morning”). Use a calm, minimal, wellness aesthetic.**

---

## **✅ Step-by-Step Instructions for the IDE**

### **Step 1 – Set the Technical & Style Context**

**Prompt to IDE:**

Assume this project is built with React (or Next.js) and Tailwind CSS.  
 Your job is to build a single, mobile-first landing page for NoteMyDream, a “Morning Reflection Companion” app.  
 Design principles:

* Calm, soft, morning-light aesthetic

* Spacious white/grey backgrounds, rounded cards, minimal shadows

* Primary color: `#5063FF` (Dream Blue)

* Dark text: `#13172A` (Midnight Indigo)

* Soft accent: `#E7E6FF` (Lavender Mist)

* Font: Inter (or system fallback if not available)  
   The page must be highly readable on mobile and scale nicely to desktop.

Ask it to **confirm** understanding, then move on.

---

### **Step 2 – Create the Page Structure Skeleton**

**Prompt to IDE:**

Create a React component for the main landing page with the following section order (no detailed styling yet, just structure and placeholder content):

1. Hero Section

2. Ritual Promise Section

3. 1-2-3 Habit Loop (Record → Reflect → Revisit)

4. Morning Reminder Preview

5. Emotional Rewards Section

6. Dream Timeline Preview

7. Weekly Summary Preview

8. Gentle Streak/Rhythm Section

9. Founder Story Section

10. Final CTA Section

Use semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`) and Tailwind utility classes for layout. Add `id` attributes to each section so we can anchor link later (e.g., `id="hero"`, `id="ritual"`, `id="habit-loop"`, etc.).

Let the IDE scaffold the sections.

---

### **Step 3 – Implement the Hero Section (Cue \+ Identity)**

We want: *identity \+ promise \+ CTA*, priming “this is a morning ritual”.

**Prompt to IDE:**

In the Hero section, implement:

* Main headline: **“NoteMyDream — Your Morning Reflection Companion”**

* Subheadline:  
   “Wake up, speak your dream, and start your day with gentle clarity.”

* Primary CTA button: “Get the iOS App”

* Secondary CTA button: “Get the Android App”

* Supporting line under buttons in smaller text:  
   “Built for quiet, half-awake mornings — not late-night scrolling.”

Layout:

* Left/top: text stack (headline, subheadline, buttons, small line)

* Right/bottom: phone mockup placeholder (just a rounded rectangle with a gradient for now).

Style the hero with:

* Background: very light gradient (e.g., from `#EFF1F5` to white)

* Plenty of padding (`py-16`, `px-4` on mobile, larger on desktop)

* Text centered on mobile, left-aligned on desktop.

---

### **Step 4 – Add the Ritual Promise Section (Identity & Habit Framing)**

This section answers: “What kind of *morning person* will I become?”

**Prompt to IDE:**

In the Ritual Promise section, add:

* Section title: **“Build a morning ritual that supports you.”**

* Short paragraph:  
   “NoteMyDream isn’t just an app. It’s a calm moment at the start of your day — a gentle check-in with your inner world before notifications, news, and noise.”

* A 3-column (stacked on mobile) list of benefits:

  1. “Begin each day with gentle clarity.”

  2. “Turn dream moments into emotional insight.”

  3. “Create a routine that feels natural, not forced.”

Use a soft card or subtle background to separate this section from the hero (`bg-white` with shadow or `bg-[#F4E8DA]/40`). Align text center on mobile, left on desktop.

---

### **Step 5 – Implement the 1-2-3 Habit Loop Section**

This explains the **Record → Reflect → Revisit** loop from Section 9\.

**Prompt to IDE:**

In the Habit Loop section, create a three-step visual layout:

* Title: **“How your morning reflection habit works”**

* Step 1: **Record**  
   Text: “Wake up and speak your dream in a few sleepy sentences — no typing, no pressure.”

* Step 2: **Reflect**  
   Text: “Your Dream Guide responds with gentle questions to help you notice how the dream feels this morning.”

* Step 3: **Revisit**  
   Text: “Your reflections are saved to a quiet timeline you can revisit anytime.”

Show the steps as three cards with icons (e.g., mic, chat bubble, calendar). Use Tailwind to stack them on mobile and display them in a row on desktop (`grid grid-cols-1 md:grid-cols-3 gap-6`).

This section visually teaches the habit loop and sets expectations.

---

### **Step 6 – Add the Morning Reminder Preview (Cue)**

We’re previewing the **gentle notification** that supports the habit.

**Prompt to IDE:**

Create a “Morning Reminder” section:

* Title: **“A gentle nudge when you wake up”**

* Small explanatory text:  
   “Choose a reminder time that matches your natural rhythm. No streak pressure — just a soft invitation to reflect when it feels right.”

* On the side, show a phone notification mockup card with:

  * App name: “NoteMyDream”

  * Notification text: “Good morning. When you’re ready, want to reflect on last night’s dream?”

  * Time: “7:32 AM”

Style the notification like an iOS push: rounded, light shadow, `bg-white`, small app icon placeholder circle.

This visually sells the “cue” from Section 9\.

---

### **Step 7 – Emotional Rewards Section (Why They’ll Keep Using It)**

Tie in the *reward* part of the habit loop.

**Prompt to IDE:**

Build an “Emotional Benefits” section:

* Title: **“Feel the difference in your mornings”**

* Short paragraph:  
   “As your reflections accumulate, mornings feel less rushed and more grounded. A few quiet moments can change how you move through the day.”

* 4 bullet points or small cards:

  * “Wake up with more clarity.”

  * “Reduce that ‘spinning mind’ feeling.”

  * “Notice what your inner world has been trying to say.”

  * “Start the day connected, not scattered.”

Use softer colors (`bg-[#E7E6FF]/40` or `bg-[#EFF1F5]`) and keep the layout very clean and minimal.

---

### **Step 8 – Dream Timeline Preview (Long-Term Reward)**

This primes the user for the **timeline reward** and future pacing.

**Prompt to IDE:**

Add a “Dream Timeline” section:

* Title: **“A calm record of your inner world”**

* Copy:  
   “Every morning reflection becomes part of a living timeline. Scroll back through your dreams and notice what’s been surfacing over weeks and months.”

* Visual:  
   A card or mockup representing a vertical list of dream entries (date, a short snippet, and a small tag like ‘calm’, ‘intense’, ‘curious’).

This is just a static mock UI, no actual functionality needed. Focus on clarity and calm spacing.

---

### **Step 9 – Weekly Summary Preview (Anticipation)**

This connects to the weekly email/summary from Section 9\.

**Prompt to IDE:**

Build a “Weekly Reflection Summary” section:

* Title: **“A soft weekly check-in”**

* Description:  
   “At the end of the week, your Dream Guide offers a gentle summary — no interpretations, just patterns and feelings you might want to notice.”

* Show a mock summary card with lines like:

  * “This week, your dreams often felt: calm, curious.”

  * “A gentle question for the week ahead: What do you want to carry forward from these dreams?”

Use a prominent card with rounded corners and `bg-white` to make this feel special.

---

### **Step 10 – Gentle Streak / Rhythm Section (Identity & Consistency)**

We want soft streak messaging, not gamified.

**Prompt to IDE:**

Create a “Your rhythm, not a race” section:

* Title: **“A reflection rhythm that feels good to keep”**

* Body text:  
   “NoteMyDream notices when you’ve shown up for yourself a few mornings in a row and quietly celebrates your rhythm. No guilt if you miss a day — your ritual is here whenever you’re ready.”

* Visual:  
   A simple horizontal row of 7 circles or dots, with 3–4 highlighted, labeled “Recent mornings you reflected.”

Keep this section very soft. No “streak lost” language anywhere.

This ties directly into Section 9’s streak philosophy.

---

### **Step 11 – Founder Story Section (Trust & Emotional Bond)**

Retention improves when users feel connected to *why* the product exists.

**Prompt to IDE:**

Add a Founder Story section:

* Title: **“Why I built NoteMyDream”**

* Short founder bio block with placeholder name:  
   “I built NoteMyDream because my mornings felt rushed and disconnected. I was waking up from vivid dreams, but they disappeared before I could really feel what they were about. I wanted a soft, non-judgmental space to notice what my inner world was saying before emails and news took over. This app is that space — a gentle morning companion for anyone who wants more awareness, not more noise.”

Layout:

* Founder avatar placeholder (circle)

* Name \+ small “Creator of NoteMyDream” label

* Text in a card with `bg-white` and padding.

---

### **Step 12 – Final CTA Section (Commitment to the Ritual)**

Close with a strong, soft CTA that aligns with habit identity.

**Prompt to IDE:**

Implement a final CTA section at the bottom:

* Title: **“Begin your morning reflection ritual.”**

* Short line:  
   “Create a calm moment at the start of your day — your future self will thank you.”

* CTA buttons (same as hero):

  * “Get the iOS App”

  * “Get the Android App”

Optionally add a small line under the buttons:  
 “Coming soon? Swap this text later for live store links.”

Center everything, add generous padding (`py-16`), and use a soft gradient background similar to the hero for a sense of closure.

---

### **Step 13 – Make It Mobile-First & Polished**

**Prompt to IDE:**

Now go through the whole page and:

* Ensure every section looks great on mobile first (single column, readable font sizes, generous line height).

* Add responsive layouts for `md` and `lg` breakpoints (e.g., two-column layouts where appropriate).

* Keep max content width to something like `max-w-5xl mx-auto`.

* Use consistent spacing between sections (`py-12` or `py-16`).

* Ensure all CTA buttons use the primary color and consistent styling.

* Add smooth scroll behavior if we link any in-page anchors later.

---

### **Step 14 – Optional: Add Tiny Motion for Calmness**

If you want a bit of animation:

**Prompt to IDE:**

Add very subtle motion:

* Fade-in sections on scroll using a simple intersection observer or a small animation library, but keep durations around 200–300ms and ease-out curves.

* Animate hover states for buttons with scale `transform hover:scale-[1.02]` and a soft shadow.  
   Keep all motion calm and non-distracting.

