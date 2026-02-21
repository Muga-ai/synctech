import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-24">

      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">
          About Me
        </h1>
      </section>

      <section className="max-w-5xl mx-auto mt-20">

        <p className="text-gray-400 leading-relaxed text-lg">
          I’m Luke Muga — a real estate graduate who saw the pain points first-hand
          and decided to fix them with code and hustle.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          What started as helping agents with listings and admin has evolved into a complete ecosystem:
        </p>

        <ul className="mt-6 space-y-3 text-gray-400">
          <li>• findahome.co.ke — verified listings & AI-powered market intelligence</li>
          <li>• Housify — modern property & tenant management</li>
          <li>• Valuations engine & FundiPlus network — instant pricing and on-ground renovation services</li>
        </ul>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Every platform talks to the others. Every shilling earned from services goes straight back into making them better.
        </p>

        <p className="mt-6 text-white font-medium">
     It’s legacy building for Kenya’s real estate industry.
        </p>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl glow-emerald"
          >
            EXPLORE SERVICES & PARTNERSHIPS →
          </Link>
        </div>

      </section>

    </main>
  );
}