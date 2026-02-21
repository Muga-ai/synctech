'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 md:px-16 py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-500/10 blur-[220px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="max-w-4xl mx-auto text-center relative">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Let’s Build Something That Outlives Us
        </h1>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Whether you're exploring services, technology collaboration,
          or the Impact Partnership model, this is the place to start.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <form
          action="https://formspree.io/f/xjgearpz"
          method="POST"
          className="grid gap-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="bg-black border border-zinc-700 rounded-xl p-4 focus:border-emerald-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="bg-black border border-zinc-700 rounded-xl p-4 focus:border-emerald-500 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone / WhatsApp"
            className="bg-black border border-zinc-700 rounded-xl p-4 focus:border-emerald-500 outline-none"
          />

          {/* Interest Section */}
          <div className="text-gray-400 text-sm">
            <p className="mb-3 text-white font-medium">Interest</p>

            <label className="block mb-2">
              <input
                type="checkbox"
                name="interest"
                value="VA Services"
              />{' '}
              VA Services
            </label>

            <label className="block mb-2">
              <input
                type="checkbox"
                name="interest"
                value="Tech Development"
              />{' '}
              Tech Development
            </label>

            <label className="block">
              <input
                type="checkbox"
                name="interest"
                value="Impact Partnership"
              />{' '}
              Impact Partnership (7% Revenue Share Model)
            </label>
          </div>

          <input
            type="text"
            name="budget"
            placeholder="Monthly Budget Range (KES)"
            className="bg-black border border-zinc-700 rounded-xl p-4 focus:border-emerald-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Brief Message (optional)"
            rows={5}
            className="bg-black border border-zinc-700 rounded-xl p-4 focus:border-emerald-500 outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-4 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 transition rounded-2xl font-medium glow-emerald-strong"
          >
            SUBMIT — LEAVE AN IMPACT
          </motion.button>

        </form>

      </section>

    </main>
  )
}