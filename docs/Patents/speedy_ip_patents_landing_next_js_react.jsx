import React, { useMemo, useRef, useState, useEffect } from "react";

// Tailwind CSS expected. Drop this into a Next.js app (e.g., app/page.tsx or a client component).
// All copy reflects your approved stage nomenclature + pricing and includes the post‑grant note.

const MODELS = ["Marketing", "Enforcement / Commercialization", "Strategic (Portfolio-Level)"] as const;

type Model = typeof MODELS[number];

type StageKey =
  | "Novelty Search"
  | "Provisional Specification Preparation and Filing"
  | "Complete Specification Drafting and Filing (with Pre-exam formalities)"
  | "FER Response"
  | "Hearing & Written Submissions"
  | "Final Application Disposal (Grant/Refusal)";

const STAGES: StageKey[] = [
  "Novelty Search",
  "Provisional Specification Preparation and Filing",
  "Complete Specification Drafting and Filing (with Pre-exam formalities)",
  "FER Response",
  "Hearing & Written Submissions",
  "Final Application Disposal (Grant/Refusal)",
];

// Effort bars per model per stage (0-4)
const EFFORT: Record<Model, Record<StageKey, number>> = {
  "Marketing": {
    "Novelty Search": 1,
    "Provisional Specification Preparation and Filing": 1,
    "Complete Specification Drafting and Filing (with Pre-exam formalities)": 2,
    "FER Response": 2,
    "Hearing & Written Submissions": 2,
    "Final Application Disposal (Grant/Refusal)": 1,
  },
  "Enforcement / Commercialization": {
    "Novelty Search": 2,
    "Provisional Specification Preparation and Filing": 2,
    "Complete Specification Drafting and Filing (with Pre-exam formalities)": 4,
    "FER Response": 3,
    "Hearing & Written Submissions": 3,
    "Final Application Disposal (Grant/Refusal)": 1,
  },
  "Strategic (Portfolio-Level)": {
    "Novelty Search": 3,
    "Provisional Specification Preparation and Filing": 3,
    "Complete Specification Drafting and Filing (with Pre-exam formalities)": 4,
    "FER Response": 4,
    "Hearing & Written Submissions": 4,
    "Final Application Disposal (Grant/Refusal)": 1,
  },
};

// Stage descriptions tailored per model
const DESCRIPTIONS: Record<Model, Record<StageKey, string>> = {
  "Marketing": {
    "Novelty Search": "Focused structural check to validate newness for filing.",
    "Provisional Specification Preparation and Filing": "Quick, compliant PS to secure an early date.",
    "Complete Specification Drafting and Filing (with Pre-exam formalities)": "Lean claims and clear drafting aimed at faster grant; all pre-exam formalities handled.",
    "FER Response": "Grant-first amendments and arguments.",
    "Hearing & Written Submissions": "Acceptance-oriented representation with concise submissions.",
    "Final Application Disposal (Grant/Refusal)": "Path to grant finalized; post‑grant guidance provided.",
  },
  "Enforcement / Commercialization": {
    "Novelty Search": "Functional + structural sweep to support broader protection.",
    "Provisional Specification Preparation and Filing": "PS with multiple embodiments/use-cases to prepare for breadth.",
    "Complete Specification Drafting and Filing (with Pre-exam formalities)": "Broadest defensible claims, multiple embodiments, enablement validated; all pre‑exam formalities handled.",
    "FER Response": "Breadth-protecting arguments; alternative claim sets; divisionals if needed.",
    "Hearing & Written Submissions": "Weigh breadth vs allowability; argue to minimize workarounds.",
    "Final Application Disposal (Grant/Refusal)": "Grant with stronger scope for enforcement/licensing.",
  },
  "Strategic (Portfolio-Level)": {
    "Novelty Search": "Multi-variant mapping to plan filings around product/technology/solution.",
    "Provisional Specification Preparation and Filing": "PS planning for multiple specs/splits aligned to roadmap.",
    "Complete Specification Drafting and Filing (with Pre-exam formalities)": "Layered specs, splits, and PCT-ready drafting; all pre‑exam formalities handled.",
    "FER Response": "Portfolio choreography: breadth defense + gap‑filling filings (divisionals/fresh).",
    "Hearing & Written Submissions": "Keep ring‑fence offensive across jurisdictions; coordinate family timelines.",
    "Final Application Disposal (Grant/Refusal)": "Grant plus portfolio completeness and risk mitigation.",
  },
};

// Pricing per stage for Marketing & Enforcement; Strategic is custom.
const PRICING: Record<StageKey, { Marketing?: string; Enforcement?: string; Strategic?: string }> = {
  "Novelty Search": { Marketing: "₹20,000", Enforcement: "₹30,000", Strategic: "Custom" },
  "Provisional Specification Preparation and Filing": { Marketing: "₹20,000", Enforcement: "₹35,000", Strategic: "Custom" },
  "Complete Specification Drafting and Filing (with Pre-exam formalities)": { Marketing: "₹50,000", Enforcement: "₹1,15,000", Strategic: "Custom" },
  "FER Response": { Marketing: "₹35,000", Enforcement: "₹55,000", Strategic: "Custom" },
  "Hearing & Written Submissions": { Marketing: "₹40,000", Enforcement: "₹60,000", Strategic: "Custom" },
  "Final Application Disposal (Grant/Refusal)": { Marketing: "Included", Enforcement: "Included", Strategic: "Included" },
};

function EffortBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1" aria-label={`Effort level ${level} of 4`}>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={
            "h-2 w-6 rounded-full " +
            (i < level ? "bg-rose-500" : "bg-gray-200 dark:bg-gray-700")
          }
        />
      ))}
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-5xl mx-auto text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}

export default function SpeedyIPPatentsPage() {
  const [activeModel, setActiveModel] = useState<Model>("Marketing");

  const heroRef = useRef<HTMLDivElement | null>(null);
  const intentRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const smoothScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    // Sticky CTA appear after scroll
    const handle = () => {
      const el = document.getElementById("sticky-cta");
      if (!el) return;
      const show = window.scrollY > 300;
      el.style.transform = show ? "translateY(0)" : "translateY(150%)";
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const tableRows = useMemo(() => STAGES, []);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Sticky CTA */}
      <div
        id="sticky-cta"
        className="fixed z-40 bottom-4 left-0 right-0 mx-auto w-full px-4 sm:max-w-md transition-transform duration-300 translate-y-[150%]"
      >
        <div className="rounded-2xl shadow-lg bg-rose-600 text-white p-3 flex items-center justify-between">
          <span className="text-sm font-medium">Ready to compare plans?</span>
          <button
            onClick={() => smoothScroll(intentRef)}
            className="bg-white text-rose-600 font-semibold px-3 py-1.5 rounded-xl hover:bg-rose-50"
          >
            Compare Plans
          </button>
        </div>
      </div>

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-white dark:from-neutral-900 dark:to-neutral-950" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Patent Attorneys & Agents for Fast, Affordable & Strategic Patent Filing in India
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Choose the path that matches your purpose — quick marketing patents, enforceable commercialization filings,
              or a global strategic portfolio.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Attorney-led",
                "Transparent stage-wise pricing",
                "High grant success (historical)",
              ].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => smoothScroll(intentRef)}
                className="px-5 py-3 rounded-2xl bg-rose-600 text-white font-semibold hover:bg-rose-700"
              >
                Compare Plans
              </button>
              <button
                onClick={() => smoothScroll(formRef)}
                className="px-5 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Get My Quote
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-rose-100 to-rose-200 dark:from-neutral-800 dark:to-neutral-900 shadow-inner flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-rose-700 dark:text-rose-300 font-semibold">Your Purpose, Your Plan</div>
                <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Marketing • Enforcement • Strategic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTENT SELECTION */}
      <section ref={intentRef} className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeading
          title="Pick the model that matches your purpose"
          subtitle="Not all filings are the same. Choose speed for visibility, breadth for enforcement/licensing, or a strategic portfolio for offense & defense."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {MODELS.map((m) => (
            <button
              key={m}
              onClick={() => {
                setActiveModel(m);
                smoothScroll(timelineRef);
              }}
              className={
                "group text-left rounded-3xl p-5 border transition shadow-sm hover:shadow-md " +
                (activeModel === m
                  ? "border-rose-600 bg-rose-50/60 dark:bg-neutral-900"
                  : "border-neutral-200 dark:border-neutral-800")
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{m}</h3>
                <span className="text-rose-600 group-hover:translate-x-0.5 transition">→</span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {m === "Marketing"
                  ? "Fast grant for visibility, investor decks, academia."
                  : m === "Enforcement / Commercialization"
                  ? "Broader rights, minimize workarounds, enable licensing."
                  : "Multi‑jurisdiction ring‑fencing, risk mitigation, offensive & defensive patents."}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* STAGE TIMELINE */}
      <section ref={timelineRef} className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeading
          title="Your patent journey"
          subtitle="See what happens at each stage and how our approach changes based on your selected model."
        />

        {/* Model Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {MODELS.map((m) => (
            <button
              key={m}
              onClick={() => setActiveModel(m)}
              className={
                "px-4 py-2 rounded-full border text-sm font-medium " +
                (activeModel === m
                  ? "bg-rose-600 text-white border-rose-600"
                  : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900")
              }
            >
              {m}
            </button>
          ))}
        </div>

        <ol className="space-y-5">
          {STAGES.map((stage) => (
            <li key={stage} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold">{stage}</h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    {DESCRIPTIONS[activeModel][stage]}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wide text-neutral-500">Effort</span>
                  <EffortBar level={EFFORT[activeModel][stage]} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* PRICING TABLE */}
      <section ref={pricingRef} className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeading
          title="Stage‑wise pricing"
          subtitle="Transparent professional fee ranges by model. Government fees and taxes are extra; fees may vary with complexity."
        />
        <div className="overflow-x-auto rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900">
              <tr>
                <th className="text-left p-4 font-semibold">Stage</th>
                <th className="text-left p-4 font-semibold">Marketing (Fast Grant)</th>
                <th className="text-left p-4 font-semibold">Enforcement / Commercialization</th>
                <th className="text-left p-4 font-semibold">Strategic (Portfolio‑Level)</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((stage, idx) => (
                <tr key={stage} className={idx % 2 ? "bg-white/50 dark:bg-neutral-950" : "bg-white dark:bg-neutral-950"}>
                  <td className="p-4 align-top">{stage}</td>
                  <td className="p-4 align-top">{PRICING[stage].Marketing}</td>
                  <td className="p-4 align-top">{PRICING[stage].Enforcement}</td>
                  <td className="p-4 align-top">{PRICING[stage].Strategic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">
          <p>
            <strong>Additional Note (Post‑Grant Costs):</strong> After grant, <em>Annual Maintenance Fees</em> (renewal fees) and <em>Form 27</em> submissions are mandatory under Indian Patent Law. The applicable costs for these stages will be shared later, when such requirements arise.
          </p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => smoothScroll(formRef)}
            className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-semibold hover:bg-rose-700"
          >
            Get My Detailed Quote
          </button>
        </div>
      </section>

      {/* DETAILED MODELS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeading title="Model details" />
        <div className="grid md:grid-cols-3 gap-5">
          {/* Marketing */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-lg font-semibold">Marketing</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Achieve a quick patent grant for credibility, investor decks, and academic submissions.
            </p>
            <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Streamlined drafting; clear, compliant specifications</li>
              <li>Grant‑oriented FER responses</li>
              <li>Acceptance‑focused hearings and submissions</li>
            </ul>
            <button
              onClick={() => smoothScroll(formRef)}
              className="mt-5 w-full px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90"
            >
              Get Fast‑Grant Quote
            </button>
          </div>

          {/* Enforcement */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-lg font-semibold">Enforcement / Commercialization</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Build enforceable rights that deter competitors and enable licensing.
            </p>
            <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Broad claim drafting with multiple embodiments</li>
              <li>Breadth‑protecting FER arguments; alternative claim sets</li>
              <li>Divisionals when scope must narrow; hearing advocacy</li>
            </ul>
            <button
              onClick={() => smoothScroll(formRef)}
              className="mt-5 w-full px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90"
            >
              Get Enforcement Quote
            </button>
          </div>

          {/* Strategic */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-lg font-semibold">Strategic (Portfolio‑Level)</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Treat IP as an offensive and defensive business tool.
            </p>
            <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Attacking patents; multi‑layer ring‑fencing</li>
              <li>Multi‑jurisdiction filings (India, US, EU, CN, JP)</li>
              <li>Technology monitoring; oppositions/invalidations; monetization</li>
            </ul>
            <button
              onClick={() => smoothScroll(formRef)}
              className="mt-5 w-full px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90"
            >
              Design My Portfolio Strategy
            </button>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section ref={formRef} className="max-w-4xl mx-auto px-6 py-12">
        <SectionHeading title="Get your itemized quote" subtitle="Tell us a bit about your invention and preferred model; we’ll respond with a tailored estimate." />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We will contact you shortly.");
          }}
          className="grid md:grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm">Name</label>
            <input className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Email</label>
            <input type="email" className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Phone</label>
            <input className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm">Type of Invention</label>
            <input className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-1">
            <label className="text-sm">Model of Interest</label>
            <select className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {MODELS.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 md:col-span-1 mt-6">
            <input id="intl" type="checkbox" className="h-4 w-4 rounded border-neutral-300 dark:border-neutral-700" />
            <label htmlFor="intl" className="text-sm">Interested in international filing (PCT/Foreign)?</label>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm">Attach Invention Disclosure (optional)</label>
            <input type="file" className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900" />
          </div>
          <div className="md:col-span-2">
            <button className="w-full px-6 py-3 rounded-2xl bg-rose-600 text-white font-semibold hover:bg-rose-700">Submit & Get Quote</button>
          </div>
        </form>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeading title="Why SpeedyIP" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { k: "2,000+", v: "Patents filed" },
            { k: "10+", v: "Countries served" },
            { k: "10+", v: "Years of experience" },
          ].map((item) => (
            <div key={item.v} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 text-center">
              <div className="text-3xl font-bold text-rose-600">{item.k}</div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{item.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <SectionHeading title="FAQs" />
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {[
            {
              q: "What’s the difference between Marketing and Enforcement models?",
              a: "Marketing prioritizes speed to grant with leaner claims; Enforcement emphasizes broader protection, multiple embodiments, and proactive breadth defense during FERs and hearings.",
            },
            {
              q: "Do all models include FER & Hearings?",
              a: "Yes. Every plan includes full, attorney-led FER responses and hearing representation. The goal and depth of optional routes differ by model.",
            },
            {
              q: "Are government fees included?",
              a: "No. Prices shown are professional fees. Government fees and taxes are additional and depend on entity type and filing specifics.",
            },
            {
              q: "What happens after grant?",
              a: "Annual Maintenance Fees (renewals) and Form 27 submissions are required post‑grant; we’ll advise timelines and associated costs when due.",
            },
            {
              q: "Can I extend my filing to other countries?",
              a: "Yes. We can plan PCT and national phase entries, or direct foreign filings as part of the Strategic model or upon request.",
            },
          ].map((item, idx) => (
            <details key={idx} className="group">
              <summary className="list-none cursor-pointer p-4 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <span className="font-medium">{item.q}</span>
                <span className="text-neutral-500 group-open:rotate-180 transition">⌄</span>
              </summary>
              <div className="p-4 pt-0 text-sm text-neutral-600 dark:text-neutral-300">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">Ready to file your patent the right way?</h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Choose your model and get an itemized quote today.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => smoothScroll(intentRef)}
            className="px-6 py-3 rounded-2xl bg-rose-600 text-white font-semibold hover:bg-rose-700"
          >
            Compare Plans
          </button>
          <button
            onClick={() => smoothScroll(formRef)}
            className="px-6 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            Talk to a Patent Attorney
          </button>
        </div>
      </section>
    </main>
  );
}
