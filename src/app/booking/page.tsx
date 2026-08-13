export const metadata = {
  title: "Booking | Hilary Lucas Counselling Services",
  description:
    "Book a virtual counselling session anywhere in Alberta, or an in-person session in Camrose.",
};

export default function Booking() {
  return (
    <main>

      {/* Intro */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Booking
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
            Let&apos;s Find a Time
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            There are two ways to meet. Choose whichever suits you — and if you&apos;re
            not sure yet, the free consult below is a good place to start.
          </p>
        </div>
      </section>

      {/* The two doors */}
      <section className="bg-moss py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Virtual */}
          <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-forest mb-3">Virtual Sessions</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Available anywhere in Alberta, from wherever you feel most comfortable.
              Start with a free 20-minute consult — no cost, no commitment, just a
              chance to see whether we&apos;re a good fit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Pick a time that works and you&apos;ll get an email to confirm it.
            </p>
            <a
              href="https://HilaryLucas.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest-dark transition-colors text-center"
            >
              See Available Times
            </a>
          </div>

          {/* In person */}
          <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-forest mb-3">In Person, in Camrose</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Sessions in the Camrose area happen through the Camrose Wellness
              Collective, where booking is handled by the clinic.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Their booking page will show you what&apos;s open.
            </p>
            <a
              href="https://camrosewellness.janeapp.com/#/counselling-psychology-mental-health"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto border-2 border-forest text-forest px-8 py-3 rounded-full font-medium hover:bg-moss transition-colors text-center"
            >
              Book at Camrose Wellness
            </a>
          </div>

        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-forest py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-cream/75 text-lg leading-relaxed">
            Begin with the free 20-minute consult. It&apos;s a conversation, not an
            intake form — a chance to ask questions, say what&apos;s going on, and
            decide at your own pace whether to carry on.
          </p>
        </div>
      </section>

    </main>
  );
}
