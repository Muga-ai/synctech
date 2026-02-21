'use client'

import Link from "next/link"

export default function ImpactPage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 md:px-16 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 blur-[250px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center relative">

        <h1 className="text-4xl md:text-5xl font-semibold">
          Impact Partnership Program
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          A long-term collaboration model designed for partners who want to accelerate
          Kenya’s real estate infrastructure while participating in ecosystem growth.
        </p>

      </section>

      {/* Core Philosophy */}
      <section className="max-w-6xl mx-auto mt-28 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-semibold">
            Why This Exists
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I am building integrated platforms across listings, valuations,
            property management, and service networks. The Impact Partnership
            allows aligned collaborators to directly support and benefit from this growth.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            This model ensures sustainability, transparency, and shared incentives.
          </p>
        </div>

        <div className="bg-zinc-900 border border-emerald-500 rounded-3xl p-10 glow-emerald-subtle">

          <p className="text-emerald-400 font-medium text-xl">
            “Aligned capital + aligned expertise = accelerated infrastructure.”
          </p>

        </div>

      </section>

      {/* Model Explanation */}
      <section className="max-w-6xl mx-auto mt-32">

        <h2 className="text-3xl font-semibold text-center">
          How The Model Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-emerald-400">
              Commitment Structure
            </h3>
            <p className="mt-4 text-gray-400">
              Long-term engagement through retainers that directly fund ecosystem development.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-emerald-400">
              Revenue Share
            </h3>
            <p className="mt-4 text-gray-400">
              Partners receive 7% revenue share of jointly scaled platforms,
              vested over 24 months.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-emerald-400">
              Transparency
            </h3>
            <p className="mt-4 text-gray-400">
              Growth tracking, structured reporting, and clear performance alignment.
            </p>
          </div>

        </div>

      </section>

      {/* Who It Is For */}
      <section className="max-w-4xl mx-auto mt-32 text-center">

        <h2 className="text-3xl font-semibold">
          Ideal Partners
        </h2>

        <div className="mt-10 text-gray-400 space-y-4">
          <p>• Real estate agencies and brokerages</p>
          <p>• Developers and project managers</p>
          <p>• Valuation firms</p>
          <p>• Institutional investors</p>
          <p>• Technology collaborators</p>
        </div>

      </section>

      {/* Why 7% */}
      <section className="max-w-4xl mx-auto mt-32 bg-zinc-900 border border-zinc-800 rounded-2xl p-12">

        <h2 className="text-3xl font-semibold text-center">
          Why 7%?
        </h2>

        <p className="mt-6 text-gray-400 leading-relaxed text-center">
          The 7% structure rewards meaningful long-term commitment while
          keeping the ecosystem sustainable. Larger strategic partnerships
          can be discussed individually.
        </p>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-32 text-center">

        <h2 className="text-3xl font-semibold">
          Ready to Collaborate?
        </h2>

        <p className="mt-6 text-gray-400">
          Start a conversation about becoming an Impact Partner.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <Link
            href="/contact"
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl glow-emerald font-medium"
          >
            Leave an Impact
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 border border-zinc-700 hover:border-emerald-500 transition rounded-xl"
          >
            View All Services
          </Link>

        </div>

      </section>

    </main>
  )
}