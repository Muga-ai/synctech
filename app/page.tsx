'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowDownCircle } from 'lucide-react'
import { useRef } from 'react'

export default function Home() {
  const ecosystemRef = useRef(null)
  const ecosystemInView = useInView(ecosystemRef, { once: true })

  return (
    <main className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-text)] overflow-hidden flex flex-col">

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-[var(--color-surface)] to-black z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.06),transparent_60%)] z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* HERO */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-24">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs tracking-[0.35em] uppercase text-[var(--color-text-muted)]"
          >
            Synchronised Real Estate infrastructure for Kenya
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.04em] leading-none mb-6 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent"
          >
            Luke Muga
          </motion.h1>

          {/* RESTORED TONE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl font-semibold text-[var(--color-primary)] mb-6"
          >
            PropTech Enthusiast & Ecosystem Architect
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl text-lg md:text-xl leading-relaxed opacity-90 mb-16"
          >
            I’m building Kenya’s first fully integrated real estate operating system —
            listings, valuations, property management, fundi network —
            while delivering world-class human expertise today.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center gap-8 text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
            <span>4 Integrated Platforms</span>
            <span>1 Unified Data System</span>
            <span>Built & Operated in Kenya</span>
          </div>

        </section>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30" />

        {/* ECOSYSTEM */}
        <section ref={ecosystemRef} className="px-6 py-28">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl mx-auto">

            {[
              {
                title: 'Find A Home Kenya',
                desc: 'Verified listings + AI-driven pricing',
                link: 'https://findahome.co.ke'
              },
              {
                title: 'Valuations OS',
                desc: 'Real-time property valuation engine',
                link: 'https://valora-mauve.vercel.app'
              },
              {
                title: 'Tunzaprop',
                desc: 'Digital property & tenant management',
                link: 'https://tunzaprop.co.ke'
              },
              {
                title: 'FundiPlus',
                desc: 'Last-mile service & renovation network',
                link: 'https://fundiplus.vercel.app'
              }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={ecosystemInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="group p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:border-[var(--color-primary)] glow-emerald-subtle hover:glow-emerald transition-all duration-500"
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm opacity-75 leading-relaxed">
                  {item.desc}
                </p>
              </motion.a>
            ))}

          </div>
        </section>
         <section className="max-w-4xl mx-auto text-center mt-32">

  <h2 className="text-2xl font-semibold">
    Work With Me
  </h2>

  <p className="mt-6 text-gray-400 leading-relaxed">
    Beyond building platforms, I offer structured collaboration through
    Virtual Assistance, PropTech Consulting, and Impact Partnerships.
  </p>

  <Link
    href="/services"
    className="inline-block mt-10 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl glow-emerald"
  >
    Explore Services →
  </Link>
<Link
  href="/impact"
  className="inline-block mt-6 px-8 py-4 border border-emerald-500 hover:bg-emerald-500 transition rounded-xl"
>
  Explore Impact Partnership →
</Link>
</section>
        <section className="pb-28 flex flex-col items-center border-t border-white/10">
          <Link href="/about" className="group flex flex-col items-center mt-16">
            <span className="text-xl font-semibold tracking-wide text-[var(--color-primary)] mb-4 group-hover:text-white transition-colors">
              Discover My Journey
            </span>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <ArrowDownCircle className="h-9 w-9 text-[var(--color-primary)] group-hover:text-white transition-all duration-300" />
            </motion.div>
          </Link>
        </section>

      </div>
    </main>
  )
}