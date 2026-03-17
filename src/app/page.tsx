import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Counselling Services &middot; Alberta
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
              You Deserve to Feel at Home in Yourself
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Compassionate, neurodiversity-affirming counselling for youth and adults.
              Building nervous system regulation skills as the foundation for healing and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://HilaryLucas.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest-dark transition-colors text-center"
              >
                Book a Session
              </a>
              <a
                href="/about"
                className="border-2 border-forest text-forest px-8 py-3 rounded-full font-medium hover:bg-moss transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hilary-photo.jpg"
                alt="Hilary Lucas, Counsellor"
                width={320}
                height={384}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-moss py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">How I Can Help</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Every person&apos;s journey is unique. I offer a range of supports designed to meet you exactly where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Individual Counselling */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Individual Counselling</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                One-on-one support tailored to you. Using a blend of CBT, DBT, Somatic Therapy, IFS, and Polyvagal-informed approaches to help you heal and grow.
              </p>
              <a href="/services" className="text-gold font-medium hover:text-forest transition-colors text-sm">
                Learn more &rarr;
              </a>
            </div>

            {/* Groups & Workshops */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Groups & Workshops</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Connect with others in a safe, facilitated setting. Group programs and workshops designed to build skills, community, and confidence.
              </p>
              <a href="/groups" className="text-gold font-medium hover:text-forest transition-colors text-sm">
                Learn more &rarr;
              </a>
            </div>

            {/* Regulation Tool */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">Regulation Tools</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Free interactive exercises to support your nervous system — guided breathing, grounding meditations, and box breathing available anytime you need them.
              </p>
              <a href="/regulation" className="text-gold font-medium hover:text-forest transition-colors text-sm">
                Try it now &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">About Hilary</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              Meeting You Where You Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
              Hilary is a resourceful and compassionate Counsellor with a rich background in mental health support and group facilitation. She leads with a trauma-informed, person-centred approach — ensuring every client feels genuinely seen, heard, and met exactly where they are.
            </p>
            <a
              href="/about"
              className="inline-block border-2 border-forest text-forest px-8 py-3 rounded-full font-medium hover:bg-moss transition-colors"
            >
              Read Hilary&apos;s Full Bio
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-moss rounded-2xl p-10 max-w-sm border border-sage/30">
              <blockquote className="text-forest italic text-lg leading-relaxed font-medium">
                &ldquo;My goal is to help you build the tools to regulate your nervous system — because that&apos;s where all lasting change begins.&rdquo;
              </blockquote>
              <p className="text-gold font-medium mt-4 text-sm">— Hilary Lucas, Counsellor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-forest py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-cream/75 text-lg mb-8">
            Virtual sessions available across Alberta. In-person sessions available in Camrose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://HilaryLucas.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold-light transition-colors text-center"
            >
              Book a Virtual Session
            </a>
            <a
              href="/booking"
              className="border-2 border-cream text-cream px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors text-center"
            >
              See All Options
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
