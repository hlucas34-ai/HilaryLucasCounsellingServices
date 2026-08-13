export const metadata = {
  title: "Resources | Hilary Lucas Counselling Services",
  description:
    "Support lines, family programs and practical tools for people in Alberta — including who to call right now if things are urgent.",
};

const urgent = [
  {
    name: "988 — Suicide Crisis Helpline",
    detail: "Call or text 988, any time, anywhere in Canada.",
    href: "tel:988",
  },
  {
    name: "Mental Health Help Line (Alberta)",
    detail: "1-877-303-2642 — 24/7 support, information and referral.",
    href: "tel:18773032642",
  },
  {
    name: "Health Link",
    detail: "Call 811 to reach a registered nurse, or follow the prompts for addiction and mental health.",
    href: "tel:811",
  },
  {
    name: "Kids Help Phone",
    detail: "1-800-668-6868, or text CONNECT to 686868. For young people, 24/7.",
    href: "tel:18006686868",
  },
  {
    name: "Hope for Wellness Help Line",
    detail: "1-855-242-3310 — for Indigenous people across Canada, with counselling in several languages.",
    href: "tel:18552423310",
  },
];

export default function Resources() {
  return (
    <main>

      {/* Intro */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
            Support Beyond the Session
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Counselling is one support among many. These are the places worth knowing about —
            starting with the ones that answer right now.
          </p>
        </div>
      </section>

      {/* If it's urgent */}
      <section className="bg-forest py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4 text-center">
            If You Need Someone Now
          </h2>
          <p className="text-cream/75 text-lg mb-10 text-center leading-relaxed">
            These lines are open when I&apos;m not. If there is immediate danger, call 911.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {urgent.map((u) => (
              <a
                key={u.name}
                href={u.href}
                className="block bg-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-forest mb-1">{u.name}</h3>
                <p className="text-gray-600 leading-relaxed">{u.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Family and community */}
      <section className="bg-moss py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 text-center">
            Family &amp; Community Support
          </h2>
          <p className="text-gray-600 text-lg mb-10 text-center max-w-2xl mx-auto leading-relaxed">
            Practical help exists for families in Alberta, and much of it goes unused simply
            because nobody mentioned it. If any of these might fit, ask — sorting out which
            door to knock on is part of the work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-forest mb-3">211 Alberta</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dial 211 to find programs and services near you — housing, food, counselling,
                financial help. A real person helps you search.
              </p>
              <a href="tel:211" className="text-gold font-medium hover:text-forest transition-colors">
                Call 211 &rarr;
              </a>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-forest mb-3">
                Family Support for Children with Disabilities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                An Alberta program supporting families raising a child with a disability, with
                services that can include respite, counselling and skill-building.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-forest mb-3">Local youth programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Community organisations such as the Boys &amp; Girls Club run programs and
                mentoring that sit well alongside counselling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Something to Use Right Now
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            The regulation tools on this site are free and need no account — breathing,
            grounding, and box breathing, whenever you want them.
          </p>
          <a
            href="/regulation"
            className="inline-block bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest-dark transition-colors"
          >
            Open the Regulation Tools
          </a>
        </div>
      </section>

    </main>
  );
}
