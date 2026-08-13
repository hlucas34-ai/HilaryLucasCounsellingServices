import Image from "next/image";

export const metadata = {
  title: "About | Hilary Lucas Counselling Services",
  description:
    "Hilary Lucas is a counsellor in Alberta working with neurodivergent youth and adults, from a trauma-informed, person-centred approach.",
};

const modalities = [
  ["CBT", "Cognitive Behavioural Therapy — noticing the thoughts that drive how you feel and act."],
  ["DBT", "Dialectical Behaviour Therapy — practical skills for big emotions and hard moments."],
  ["Somatic Therapy", "Working with what the body holds, not only what the mind can say."],
  ["Solution-Focused", "Starting from what already works and building outward from it."],
  ["IFS / Parts Work", "Meeting the different parts of you with curiosity instead of judgement."],
  ["Polyvagal Theory", "Understanding your nervous system so regulation stops feeling random."],
];

export default function About() {
  return (
    <main>

      {/* Intro */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              About Hilary
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
              Meeting You Where You Are
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Hilary is a resourceful and compassionate Counsellor with a rich background
              in mental health support and group facilitation. She leads with a
              trauma-informed, person-centred approach — ensuring every client feels
              genuinely seen, heard, and met exactly where they are.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">
              Drawing from a diverse range of evidence-based modalities including CBT, DBT,
              Somatic Therapy, Solution-Focused Therapy, Internal Family Systems (IFS), and
              Polyvagal Theory, Hilary tailors her approach to each individual&apos;s unique
              needs. She has a particular passion for supporting neurodivergent youth and
              adults, and brings deep experience helping clients build nervous system
              regulation skills as the foundation for all therapeutic work.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hilary is also well-versed in connecting clients and families to the community
              resources and practical tools that best support their goals — offering a
              grounded, fresh perspective to those who may feel stuck.
            </p>
          </div>

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

      {/* How she works */}
      <section className="bg-moss py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              What Hilary Draws From
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              No single approach fits everybody. These are the ways of working Hilary moves
              between, depending on what you need on the day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modalities.map(([name, plain]) => (
              <div
                key={name}
                className="bg-cream rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-forest mb-2">{name}</h3>
                <p className="text-gray-600 leading-relaxed">{plain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-moss rounded-2xl p-10 border border-sage/30 text-center">
            <blockquote className="text-forest italic text-xl leading-relaxed font-medium">
              &ldquo;My goal is to help you build the tools to regulate your nervous system —
              because that&apos;s where all lasting change begins.&rdquo;
            </blockquote>
            <p className="text-gold font-medium mt-5">— Hilary Lucas, Counsellor</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Have a Question First?
          </h2>
          <p className="text-cream/75 text-lg mb-8 leading-relaxed">
            The free 20-minute consult exists for exactly that. No cost, no commitment.
          </p>
          <a
            href="/booking"
            className="inline-block bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold-light transition-colors"
          >
            See Booking Options
          </a>
        </div>
      </section>

    </main>
  );
}
