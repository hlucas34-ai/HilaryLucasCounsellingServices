export const metadata = {
  title: "Groups & Workshops | Hilary Lucas Counselling Services",
  description:
    "Group programs and workshops for youth, adults and parents — skill-building in a safe, facilitated setting.",
};

export default function Groups() {
  return (
    <main>

      {/* Intro */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Groups &amp; Workshops
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
            Alongside Other People
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Some things are easier to learn in company. Groups and workshops are facilitated,
            structured, and built so nobody is put on the spot.
          </p>
        </div>
      </section>

      {/* What it looks like */}
      <section className="bg-moss py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-10 text-center">
            What Group Work Looks Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-forest mb-3">Facilitated, not free-form</h3>
              <p className="text-gray-600 leading-relaxed">
                Every session has a shape and a purpose. You always know what the hour is for
                before it starts.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-forest mb-3">Skills you can use</h3>
              <p className="text-gray-600 leading-relaxed">
                Regulation, communication, managing big feelings — practised in the room, so
                they hold up outside it.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-forest mb-3">Nobody is put on the spot</h3>
              <p className="text-gray-600 leading-relaxed">
                Taking part can mean listening. There is no requirement to share before
                you&apos;re ready.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Who they're for */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-8 text-center">
            Who They&apos;re For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-moss rounded-2xl p-7 border border-sage/30">
              <h3 className="text-xl font-bold text-forest mb-2">Youth</h3>
              <p className="text-gray-600 leading-relaxed">
                Especially neurodivergent young people who do better with structure and
                shared language.
              </p>
            </div>
            <div className="bg-moss rounded-2xl p-7 border border-sage/30">
              <h3 className="text-xl font-bold text-forest mb-2">Adults</h3>
              <p className="text-gray-600 leading-relaxed">
                Skill-building and community for people who&apos;d rather not do this on their
                own.
              </p>
            </div>
            <div className="bg-moss rounded-2xl p-7 border border-sage/30">
              <h3 className="text-xl font-bold text-forest mb-2">Parents &amp; families</h3>
              <p className="text-gray-600 leading-relaxed">
                Regulating yourself first, so you can model it for the child who is watching
                you do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="bg-forest py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Want to Know What&apos;s Running?
          </h2>
          <p className="text-cream/75 text-lg mb-8 leading-relaxed">
            Groups and workshops run in blocks through the year. The quickest way to hear
            what&apos;s coming up, and whether it suits you, is to ask in a free consult.
          </p>
          <a
            href="/booking"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold-light transition-colors"
          >
            Ask About Upcoming Groups
          </a>
        </div>
      </section>

    </main>
  );
}
