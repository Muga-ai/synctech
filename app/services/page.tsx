 'use client'

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 md:px-16 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-250px] right-[-200px] w-[900px] h-[900px] bg-emerald-500/10 blur-[220px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center relative">

        <h1 className="text-4xl md:text-5xl font-semibold">
          Robust Services. Shared Success.
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          While building Kenya’s real estate infrastructure,
          I offer strategic services that support agencies, developers,
          investors, and operators. Every engagement helps accelerate the ecosystem.
        </p>

      </section>

      {/* SERVICES DETAILS */}
      <section className="max-w-6xl mx-auto mt-28 grid md:grid-cols-3 gap-10">

        {/* VA */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500 transition">

          <h3 className="text-xl font-semibold text-emerald-400">
            Real Estate Virtual Assistance
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Operational support tailored specifically for real estate professionals.
            Designed for agents, brokers, and small agencies that need leverage.
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 text-sm">
            <li>• Property listing creation & optimization</li>
            <li>• Lead generation and structured follow-up systems</li>
            <li>• CRM organization and pipeline management</li>
            <li>• Social media coordination</li>
            <li>• Market research and competitor analysis</li>
            <li>• Administrative workflow support</li>
          </ul>

        </div>

        {/* TECH */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500 transition">

          <h3 className="text-xl font-semibold text-emerald-400">
            PropTech Development & Consulting
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Strategic technology support for real estate businesses
            looking to modernize operations or build digital tools.
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 text-sm">
            <li>• Custom property tools and dashboards</li>
            <li>• Valuation system integrations</li>
            <li>• Marketplace feature enhancements</li>
            <li>• Workflow automation</li>
            <li>• Platform strategy consulting</li>
            <li>• Ecosystem integration planning</li>
          </ul>

        </div>

        {/* IMPACT */}
        <div className="bg-zinc-900 border border-emerald-500 rounded-2xl p-8 glow-emerald-subtle">

          <h3 className="text-xl font-semibold text-emerald-400">
            Impact Partnership
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Long-term strategic engagement designed to accelerate the ecosystem.
            This is for partners who want deeper alignment.
          </p>

          <ul className="mt-6 space-y-3 text-gray-400 text-sm">
            <li>• Dedicated collaboration model</li>
            <li>• Priority access to new features</li>
            <li>• Co-branding opportunities</li>
            <li>• 7% revenue share (vested over 24 months)</li>
            <li>• Transparent growth tracking</li>
          </ul>

          <p className="mt-6 text-sm text-gray-400">
            Why 7%? It rewards commitment while keeping the ecosystem sustainable.
            Larger strategic commitments can be discussed individually.
          </p>

        </div>

      </section>

      {/* PROCESS */}
      <section className="max-w-4xl mx-auto mt-32 text-center">

        <h2 className="text-3xl font-semibold">
          How Engagement Works
        </h2>

        <div className="mt-10 space-y-4 text-gray-400">

          <p>1. Initial consultation to understand your goals.</p>
          <p>2. Clear scope definition and collaboration structure.</p>
          <p>3. Execution with structured communication.</p>
          <p>4. Ongoing optimization and strategic improvement.</p>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto mt-32 bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">

        <h2 className="text-3xl font-semibold">
          Let’s Build Something That Outlives Us
        </h2>

        <p className="mt-6 text-gray-400">
          Start a conversation and explore collaboration options.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl glow-emerald font-medium"
          >
            SUBMIT — TO LEAVE AN IMPACT
          </Link>
        </div>

      </section>

    </main>
  );
}