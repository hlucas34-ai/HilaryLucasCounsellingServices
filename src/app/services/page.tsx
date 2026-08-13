export const metadata = {
  title: "Services | Hilary Lucas Counselling Services",
  description:
    "Individual counselling, group programs and workshops, and free regulation tools — virtual across Alberta and in person in Camrose.",
};

export default function Services() {
  return (
    <main>

      {/* Intro */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
            How I Can Help
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every person&apos;s journey is unique. These are the ways we can work together —
            and the free consult is the place to work out which one fits.
          </p>
        </div>
      </section>

      {/* The services */}
      <section className="bg-moss py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-4">
              Individual Counselling
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-5">
              One-on-one support, tailored to you. We work at your pace, using a blend of
              CBT, DBT, Somatic Therapy, Internal Family Systems and Polyvagal-informed
              approaches — building nervous system regulation as the foundation everything
              else rests on.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Especially welcome here: neurodivergent youth and adults, people who have felt
              unseen in other rooms, and anyone who feels stuck and isn&apos;t sure why.
            </p>
            <a
              href="/booking"
              className="inline-block bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest-dark transition-colors"
            >
              Book a Session
            </a>
          </div>

          <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-4">
              Groups &amp; Workshops
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Skill-building in a safe, facilitated setting, alongside people who understand.
              Group work is often where regulation skills become real, because you practise
              them with others rather than only talking about them.
            </p>
            <a
              href="/groups"
              className="inline-block border-2 border-forest text-forest px-8 py-3 rounded-full font-medium hover:bg-moss transition-colors"
            >
              See Groups &amp; Workshops
            </a>
          </div>

          <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-4">
              Regulation Tools
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Free interactive exercises you can use any time — guided breathing, a grounding
              practice, and box breathing for anxious moments. No account, no cost, nothing to
              sign up for.
            </p>
            <a
              href="/regulation"
              className="inline-block border-2 border-forest text-forest px-8 py-3 rounded-full font-medium hover:bg-moss transition-colors"
            >
              Try the Tools
            </a>
          </div>

        </div>
      </section>

      {/* Practical */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-10 text-center">
            The Practical Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-moss rounded-2xl p-7 border border-sage/30">
              <h3 className="text-xl font-bold text-forest mb-2">Where</h3>
              <p className="text-gray-600 leading-relaxed">
                Virtually, anywhere in Alberta. In person in Camrose, through the Camrose
                Wellness Collective.
              </p>
            </div>
            <div className="bg-moss rounded-2xl p-7 border border-sage/30">
              <h3 className="text-xl font-bold text-forest mb-2">Starting</h3>
              <p className="text-gray-600 leading-relaxed">
                With a free 20-minute consult — a conversation, not an intake form, so you
                can decide without pressure.
              </p>
            </div>
            <div className="bg-moss rounded-2xl p-7 border border-sage/30">
              <h3 className="text-xl font-bold text-forest mb-2">Fees</h3>
              <p className="text-gray-600 leading-relaxed">
                Talked through in the consult, so you know exactly what to expect before
                anything is booked.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
