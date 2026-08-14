import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden grain">
        {/* Pooled light: sage settling where the portrait stands, a warm
            whisper low on the text side — the room the words sit in. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(38rem 30rem at 78% 30%, rgba(122,158,126,0.16), transparent 65%), radial-gradient(34rem 26rem at 8% 90%, rgba(196,146,42,0.07), transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Text */}
          <div className="flex-1 reveal">
            <p className="eyebrow mb-6">
              Counselling Services &middot; Alberta
            </p>
            <h1 className="font-display font-semibold text-forest-dark text-[2.75rem] sm:text-5xl lg:text-[2.9rem] xl:text-[3.4rem] leading-[1.1] tracking-[-0.01em] mb-7">
              You Deserve to Feel
              <br className="hidden lg:block" />{" "}
              <span className="relative inline-block italic text-gold-deep">
                at Home
                <svg
                  aria-hidden
                  className="absolute left-0 -bottom-2 w-full"
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                  style={{ height: "0.22em" }}
                >
                  <path
                    d="M4 9 C 35 3, 85 3, 116 7"
                    fill="none"
                    stroke="#C4922A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                </svg>
              </span>{" "}
              in Yourself
            </h1>
            <p className="text-lg text-ink-soft mb-10 max-w-lg leading-relaxed">
              Compassionate, neurodiversity-affirming counselling for youth and adults.
              Building nervous system regulation skills as the foundation for healing and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://HilaryLucas.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-9 py-4 text-center"
              >
                Book a Session
              </a>
              <a
                href="/about"
                className="btn btn-quiet px-9 py-4 text-center"
              >
                Learn More
              </a>
            </div>
            <p className="mt-7 text-sm text-ink-soft/80 tracking-wide">
              Virtual sessions across Alberta
              <span className="text-sage mx-2" aria-hidden>&bull;</span>
              In-person in Camrose
            </p>
          </div>

          {/* Portrait — Hilary in a round window of sage light */}
          <div className="flex-1 flex justify-center reveal" style={{ transitionDelay: "150ms" }}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute w-[26rem] h-[26rem] rounded-full -bottom-10 -right-12"
                style={{
                  background: "radial-gradient(circle, rgba(122,158,126,0.32), transparent 65%)",
                  filter: "blur(24px)",
                }}
              />
              <div className="portrait w-[20rem] md:w-[24rem] aspect-square">
                <div className="portrait-ring" aria-hidden />
                <Image
                  src="/hilary-portrait.webp"
                  alt="Hilary Lucas, Counsellor"
                  fill
                  sizes="(min-width: 768px) 22rem, 19rem"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-moss py-24 md:py-28 px-6 overflow-hidden grain">
        {/* Light gathering at the top of the room, cards lifting off it */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50rem 22rem at 50% -6rem, rgba(255,253,248,0.65), transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="font-display font-semibold text-forest-dark text-4xl md:text-[2.75rem] leading-tight mb-5">How I Can Help</h2>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
              Every person&apos;s journey is unique. I offer a range of supports designed to meet you exactly where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Individual Counselling */}
            <div className="card-warm group p-9 reveal">
              <div className="icon-chip mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-[1.4rem] font-semibold text-forest-dark mb-3">Individual Counselling</h3>
              <p className="text-ink-soft leading-relaxed mb-6">
                One-on-one support tailored to you. Using a blend of CBT, DBT, Somatic Therapy, IFS, and Polyvagal-informed approaches to help you heal and grow.
              </p>
              <a href="/services" className="link-arrow text-[15px]">
                Learn more <span className="arr" aria-hidden>&rarr;</span>
              </a>
            </div>

            {/* Groups & Workshops */}
            <div className="card-warm group p-9 reveal" style={{ transitionDelay: "100ms" }}>
              <div className="icon-chip mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-[1.4rem] font-semibold text-forest-dark mb-3">Groups & Workshops</h3>
              <p className="text-ink-soft leading-relaxed mb-6">
                Connect with others in a safe, facilitated setting. Group programs and workshops designed to build skills, community, and confidence.
              </p>
              <a href="/groups" className="link-arrow text-[15px]">
                Learn more <span className="arr" aria-hidden>&rarr;</span>
              </a>
            </div>

            {/* Regulation Tool */}
            <div className="card-warm group p-9 reveal" style={{ transitionDelay: "200ms" }}>
              <div className="icon-chip mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display text-[1.4rem] font-semibold text-forest-dark mb-3">Regulation Tools</h3>
              <p className="text-ink-soft leading-relaxed mb-6">
                Free interactive exercises to support your nervous system — guided breathing, grounding meditations, and box breathing available anytime you need them.
              </p>
              <a href="/regulation" className="link-arrow text-[15px]">
                Try it now <span className="arr" aria-hidden>&rarr;</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="relative bg-cream py-24 md:py-28 px-6 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(30rem 24rem at 82% 50%, rgba(235,242,232,0.9), transparent 65%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">
          <div className="flex-1 reveal">
            <p className="eyebrow mb-6">About Hilary</p>
            <h2 className="font-display font-semibold text-forest-dark text-4xl md:text-[2.6rem] leading-tight mb-7">
              Meeting You
              <br className="hidden md:block" />{" "}
              Where You Are
            </h2>
            <p className="text-ink-soft leading-relaxed mb-9 max-w-lg">
              Hilary is a resourceful and compassionate Counsellor with a rich background in mental health support and group facilitation. She leads with a trauma-informed, person-centred approach — ensuring every client feels genuinely seen, heard, and met exactly where they are.
            </p>
            <a
              href="/about"
              className="btn btn-quiet px-8 py-3.5"
            >
              Read Hilary&apos;s Full Bio
            </a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end reveal" style={{ transitionDelay: "150ms" }}>
            <figure className="max-w-md">
              <div
                aria-hidden
                className="font-display text-gold-light select-none -ml-1 mb-2"
                style={{ fontSize: "5.5rem", lineHeight: "0.7" }}
              >
                &ldquo;
              </div>
              <blockquote className="font-display italic text-forest-dark text-[1.5rem] leading-[1.45]">
                My goal is to help you build the tools to regulate your nervous system — because that&apos;s where all lasting change begins.
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <span aria-hidden className="block w-10 h-px bg-gold/60" />
                <span className="text-sm font-semibold tracking-[0.14em] uppercase text-sage-dark">
                  Hilary Lucas, Counsellor
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-forest py-24 md:py-28 px-6 overflow-hidden grain">
        {/* Sage light pooling from above, warmth low on the left —
            a lit room, not a flat band. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(52rem 26rem at 50% -8rem, rgba(122,158,126,0.35), transparent 70%), radial-gradient(30rem 20rem at 10% 110%, rgba(196,146,42,0.14), transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display font-semibold text-cream text-4xl md:text-5xl leading-tight mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-cream/80 text-lg mb-11 leading-relaxed">
            Virtual sessions available across Alberta. In-person sessions available in Camrose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://HilaryLucas.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold px-9 py-4 text-center"
            >
              Book a Virtual Session
            </a>
            <a
              href="/booking"
              className="btn btn-on-dark px-9 py-4 text-center"
            >
              See All Options
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
