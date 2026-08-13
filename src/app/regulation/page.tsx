"use client";

import { useEffect, useRef, useState } from "react";

type Phase = { label: string; seconds: number; scale: number };

const BREATHE: Phase[] = [
  { label: "Breathe in", seconds: 4, scale: 1 },
  { label: "Hold", seconds: 2, scale: 1 },
  { label: "Breathe out", seconds: 6, scale: 0.55 },
];

const BOX: Phase[] = [
  { label: "Breathe in", seconds: 4, scale: 1 },
  { label: "Hold", seconds: 4, scale: 1 },
  { label: "Breathe out", seconds: 4, scale: 0.55 },
  { label: "Hold", seconds: 4, scale: 0.55 },
];

const GROUNDING = [
  { count: "Five", sense: "things you can see", hint: "Look around slowly. Name them, out loud if you can." },
  { count: "Four", sense: "things you can feel", hint: "The chair, your feet on the floor, fabric, temperature." },
  { count: "Three", sense: "things you can hear", hint: "Let the far-away sounds count too." },
  { count: "Two", sense: "things you can smell", hint: "If nothing comes, name two smells you like." },
  { count: "One", sense: "thing you can taste", hint: "Or one slow breath through your mouth." },
];

function Pacer({ phases, tone }: { phases: Phase[]; tone: string }) {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // One interval, one piece of state. Everything else is worked out from the
  // seconds elapsed, so a phase can never land out of order or tick twice.
  useEffect(() => {
    if (!running) return;
    timer.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [running]);

  function reset() {
    setRunning(false);
    setElapsed(0);
  }

  const cycle = phases.reduce((sum, p) => sum + p.seconds, 0);
  const rounds = Math.floor(elapsed / cycle);
  let into = elapsed % cycle;
  let index = 0;
  while (into >= phases[index].seconds) {
    into -= phases[index].seconds;
    index += 1;
  }
  const phase = phases[index];
  const left = phase.seconds - into;

  return (
    <div className="flex flex-col items-center">
      <div className="h-72 flex items-center justify-center">
        <div
          className={`rounded-full ${tone} flex items-center justify-center transition-transform ease-in-out`}
          style={{
            width: 220,
            height: 220,
            transform: `scale(${running ? phase.scale : 0.8})`,
            transitionDuration: `${phase.seconds}s`,
          }}
        >
          <div className="text-center px-4">
            <p className="text-cream text-xl font-medium">{running ? phase.label : "Ready"}</p>
            <p className="text-cream/80 text-4xl font-bold mt-1">{running ? left : "—"}</p>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mt-2 mb-6">
        {rounds === 0 ? "Take as long as you like." : `${rounds} round${rounds === 1 ? "" : "s"} done.`}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => setRunning((r) => !r)}
          className="bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest-dark transition-colors"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="border-2 border-forest text-forest px-8 py-3 rounded-full font-medium hover:bg-moss transition-colors"
        >
          Start over
        </button>
      </div>
    </div>
  );
}

function Grounding() {
  const [step, setStep] = useState(0);
  const done = step >= GROUNDING.length;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="min-h-64 flex flex-col items-center justify-center max-w-lg">
        {done ? (
          <>
            <p className="text-3xl font-bold text-forest mb-3">That&apos;s the whole thing.</p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Notice how you feel compared to a minute ago. Any answer is fine, including
              &ldquo;about the same&rdquo; — it works better with practice.
            </p>
          </>
        ) : (
          <>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Step {step + 1} of {GROUNDING.length}
            </p>
            <p className="text-3xl md:text-4xl font-bold text-forest mb-4">
              {GROUNDING[step].count} {GROUNDING[step].sense}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">{GROUNDING[step].hint}</p>
          </>
        )}
      </div>

      <div className="flex gap-4 mt-8">
        {done ? (
          <button
            onClick={() => setStep(0)}
            className="bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest-dark transition-colors"
          >
            Go again
          </button>
        ) : (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="bg-forest text-cream px-8 py-3 rounded-full font-medium hover:bg-forest-dark transition-colors"
          >
            Done — next
          </button>
        )}
      </div>
    </div>
  );
}

const TOOLS = [
  { key: "breathe", name: "Breathing", blurb: "In for four, out for six. Longer out-breaths settle the nervous system." },
  { key: "ground", name: "Grounding", blurb: "Five senses, one at a time, to bring you back into the room." },
  { key: "box", name: "Box breathing", blurb: "Four counts each way. Steady and even, for anxious moments." },
];

export default function Regulation() {
  const [tool, setTool] = useState("breathe");

  return (
    <main>
      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Regulation Tools
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
            Something to Do Right Now
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Free, no account, nothing recorded. Use them whenever you like — before a hard
            conversation, after one, or in the middle of an ordinary day.
          </p>
        </div>
      </section>

      <section className="bg-moss py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOLS.map((t) => {
            const active = tool === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTool(t.key)}
                className={`text-left rounded-2xl p-7 transition-shadow shadow-sm hover:shadow-md ${
                  active ? "bg-forest" : "bg-cream"
                }`}
              >
                <h2 className={`text-xl font-bold mb-2 ${active ? "text-cream" : "text-forest"}`}>
                  {t.name}
                </h2>
                <p className={`leading-relaxed ${active ? "text-cream/75" : "text-gray-600"}`}>
                  {t.blurb}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {tool === "breathe" && <Pacer phases={BREATHE} tone="bg-forest" />}
          {tool === "box" && <Pacer phases={BOX} tone="bg-sage" />}
          {tool === "ground" && <Grounding />}
        </div>
      </section>

      <section className="bg-forest py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cream mb-4">If It Isn&apos;t Enough Today</h2>
          <p className="text-cream/75 text-lg mb-8 leading-relaxed">
            Tools help, and sometimes you need a person. The free consult is twenty minutes
            and costs nothing.
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
