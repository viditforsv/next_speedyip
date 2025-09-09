import React, { useMemo, useState } from "react";

/**
 * Trademark Landing Page — Next.js/React + Tailwind skeleton
 * -----------------------------------------------------------
 * • Single-file drop-in for /app/trademark/page.tsx (Next.js App Router)
 * • Uses a config JSON (CONFIG) so content/fees live in one place
 * • Stage-wise fees only up to acceptance (Safety & Affinity)
 * • Strategy section covers oppositions/monitoring/portfolio (no public prices)
 * • Bulk/multi-class discount note included
 * • Anchors: #safety, #affinity, #strategy, #addons
 * • No external libs; Tailwind classes for styling
 */

// =============== CONFIG (edit here) ===============
const CONFIG = {
  route: "/trademark",
  seo: {
    title: "Trademark Filing, Objection Handling & Strategic Brand Protection",
    metaDescription:
      "Stage-wise fees up to acceptance for Safety & Affinity models. Strategic retainers for monitoring, oppositions, and portfolio growth in India & abroad.",
  },
  hero: {
    headline: "Trademark Filing, Objection Handling & Strategic Brand Protection",
    subtext:
      "Register safely, register your chosen name, or turn trademarks into a strategic advantage.",
    ctas: [
      { label: "Register with Minimum Hurdles", href: "#safety", context: "safety" },
      { label: "Register My Chosen Brand Name", href: "#affinity", context: "affinity" },
      { label: "Ongoing Strategy & Oppositions", href: "#strategy", context: "strategy" },
    ],
    note: "Bulk or multi-class filings? Per-mark fees reduce. Govt. fees additional.",
  },
  whyUs: [
    "Mindset-based paths that match Google Ads user intent.",
    "Transparent, stage-wise fees up to acceptance—no surprises.",
    "Strategic depth for monitoring, oppositions, and international portfolios.",
  ],
  safety: {
    title: "Safety — Register with Minimum Hurdles",
    who: "Startups/MSMEs, marketplace sellers, early apps; flexible on name.",
    promise: "Choose the safest mark, file cleanly, and handle routine Registry steps.",
    scope: "Search → Filing → ER → Hearings → Acceptance/Publication",
    pricing: [
      { label: "Knockout Search (5 marks)", fee: 6500 },
      { label: "Extra Search (3)", fee: 3500 },
      { label: "Extra Search (5)", fee: 5000 },
      { label: "Filing (per mark, per class)", fee: 9000, note: "Govt. fee additional per class" },
      { label: "ER Response", fee: 7500 },
    ],
    hearings: [
      { label: "Non-effective", fee: 3500 },
      { label: "First effective", fee: 15000 },
      { label: "Subsequent effective", fee: 9000 },
    ],
    bulkNote:
      "Multi-mark/multi-class instructions qualify for reduced per-unit professional fees.",
  },
  affinity: {
    title: "Affinity — Register My Chosen Brand Name",
    who: "Growth-stage brands, family businesses, D2C; attached to a specific name.",
    promise: "We won’t force a name change; we build arguments to register your chosen mark.",
    tabs: [
      {
        id: "proposed",
        label: "Proposed-to-be-Used",
        pricing: [
          { label: "Filing (per mark, per class)", fee: 7500, note: "Govt. fee additional per class" },
          { label: "ER Response", fee: 11000 },
        ],
        hearings: [
          { label: "Non-effective", fee: 3500 },
          { label: "First effective", fee: 15000 },
          { label: "Subsequent effective", fee: 9000 },
        ],
      },
      {
        id: "inuse",
        label: "In Use (with evidence)",
        pricing: [
          { label: "Filing (per mark, per class)", fee: 7500, note: "Govt. fee additional per class" },
          { label: "User Affidavit & Evidence", feeRange: [4500, 6000] },
          { label: "ER Response", fee: 11000 },
        ],
        hearings: [
          { label: "Non-effective", fee: 3500 },
          { label: "First effective", fee: 12500 },
          { label: "Subsequent effective", fee: 7500 },
        ],
      },
    ],
    bulkNote:
      "Multi-mark/multi-class instructions qualify for reduced per-unit professional fees.",
  },
  strategy: {
    title: "Strategy — Ongoing Protection, Oppositions & Portfolio Growth",
    positioning: "Retainer/custom. No public price list.",
    modules: [
      {
        title: "Pre-remediation (on-register risk control)",
        bullets: [
          "Spot conflicting applications/registrations",
          "Proactive oppositions/cancellations",
          "Defensive filings in allied classes",
        ],
      },
      {
        title: "Monitoring & Watching (India + global)",
        bullets: [
          "Register watch and alerts",
          "Marketplace and app-store sweeps",
          "Action recommendations",
        ],
      },
      {
        title: "Oppositions (offensive & defensive)",
        bullets: [
          "Counterstatement (defense after publication)",
          "Evidence in Support of Application (defense)",
          "Evidence in Reply (when you are the opponent)",
          "Opposition hearings (per hearing fee grid)",
        ],
      },
      {
        title: "Portfolio Building",
        bullets: [
          "Multi-class filings in India",
          "Madrid Protocol & national filings abroad",
          "Renewals & docketing, portfolio analytics",
        ],
      },
      {
        title: "Brand Strengthening & Enforcement",
        bullets: [
          "Periodic audits, defensive marks",
          "Takedowns/anti-counterfeit coordination",
        ],
      },
    ],
  },
  addons: {
    title: "Add-ons",
    note: "Only filing-related extras; all ongoing/defensive work appears under Strategy.",
    items: [
      { label: "Extra Search (3 marks)", fee: 3500 },
      { label: "Extra Search (5 marks)", fee: 5000 },
    ],
  },
  industries: [
    "Startup/MSME",
    "Marketplace Sellers",
    "D2C/FMCG",
    "B2B Services/SaaS",
    "Tech/App",
    "Luxury/Exporters",
  ],
  faqs: [
    {
      q: "Are Govt. fees included?",
      a: "No—professional fees are listed; Govt. fees apply per class as per category.",
    },
    {
      q: "Do you offer packages?",
      a: "We present stage-wise fees for transparency. For bulk/bundled instructions, per-unit professional fees reduce.",
    },
    {
      q: "Is opposition included in Safety/Affinity?",
      a: "No—oppositions, monitoring, and cancellations are offered under Strategy.",
    },
  ],
};
// =============== END CONFIG ===============

// Helpers
const formatINR = (val: number) => `₹${val.toLocaleString("en-IN")}`;
const FeeCell: React.FC<{ fee?: number; feeRange?: [number, number] }> = ({ fee, feeRange }) => {
  if (typeof fee === "number") return <span className="font-semibold">{formatINR(fee)}</span>;
  if (feeRange) return (
    <span className="font-semibold">{formatINR(feeRange[0])}–{formatINR(feeRange[1])}</span>
  );
  return <span>-</span>;
};

// UI Primitives
const Section: React.FC<{ id?: string; title?: string; children?: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-12">
    {title && <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>}
    {children}
  </section>
);

const Card: React.FC<{ children?: React.ReactNode; className?: string }>=({children, className})=> (
  <div className={`rounded-2xl border border-zinc-200 bg-white/70 shadow-sm p-6 ${className||""}`}>{children}</div>
);

// Components
const Hero: React.FC<{ onChoose: (context: string) => void }>=({ onChoose })=> (
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white p-8 md:p-12">
    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{CONFIG.hero.headline}</h1>
    <p className="text-white/90 text-lg md:text-xl mb-6 max-w-3xl">{CONFIG.hero.subtext}</p>
    <div className="flex flex-wrap gap-3">
      {CONFIG.hero.ctas.map((cta)=> (
        <a
          key={cta.label}
          href={cta.href}
          onClick={()=> onChoose(cta.context)}
          className="inline-flex items-center justify-center rounded-xl bg-white text-indigo-700 hover:bg-white/90 px-4 py-2 font-semibold shadow"
        >
          {cta.label}
        </a>
      ))}
    </div>
    <p className="mt-4 text-sm text-white/80">{CONFIG.hero.note}</p>
  </div>
);

const WhyUs: React.FC = () => (
  <div className="grid md:grid-cols-3 gap-4">
    {CONFIG.whyUs.map((txt, i)=> (
      <Card key={i}><p className="text-zinc-700">{txt}</p></Card>
    ))}
  </div>
);

const PricingTable: React.FC<{ rows: any[]; hearings?: any[] }>=({ rows, hearings })=> (
  <div className="overflow-x-auto">
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="text-zinc-500">
          <th className="py-2">Activity</th>
          <th className="py-2">Fee</th>
          <th className="py-2">Notes</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, idx)=> (
          <tr key={idx} className="border-t">
            <td className="py-3 font-medium">{r.label}</td>
            <td className="py-3"><FeeCell fee={r.fee} feeRange={r.feeRange} /></td>
            <td className="py-3 text-zinc-500">{r.note || ""}</td>
          </tr>
        ))}
        {hearings && (
          <tr className="border-t bg-zinc-50/60">
            <td className="py-3 font-semibold">Hearings</td>
            <td className="py-3" colSpan={2}>
              <div className="flex flex-wrap gap-3 text-sm">
                {hearings.map((h:any)=> (
                  <span key={h.label} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border">
                    <span className="text-zinc-700">{h.label}:</span>
                    <FeeCell fee={h.fee} />
                  </span>
                ))}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

const SafetyBlock: React.FC = () => (
  <Section id="safety" title={CONFIG.safety.title}>
    <div className="mb-4 text-zinc-700">{CONFIG.safety.who}</div>
    <div className="mb-2 text-zinc-700"><span className="font-semibold">Scope:</span> {CONFIG.safety.scope}</div>
    <Card>
      <PricingTable rows={CONFIG.safety.pricing} hearings={CONFIG.safety.hearings} />
      <p className="mt-4 text-sm text-zinc-600">{CONFIG.safety.bulkNote}</p>
      <LeadCTA context="safety" label="Get my stage-wise estimate" />
    </Card>
  </Section>
);

const AffinityTabs: React.FC = () => {
  const [tab, setTab] = useState(CONFIG.affinity.tabs[0].id);
  const active = useMemo(()=> CONFIG.affinity.tabs.find(t=>t.id===tab)!, [tab]);
  return (
    <Section id="affinity" title={CONFIG.affinity.title}>
      <div className="mb-4 text-zinc-700">{CONFIG.affinity.who}</div>
      <div className="mb-2 text-zinc-700"><span className="font-semibold">Promise:</span> {CONFIG.affinity.promise}</div>

      <div className="mb-4 inline-flex rounded-xl border bg-white p-1 shadow-sm">
        {CONFIG.affinity.tabs.map((t)=> (
          <button
            key={t.id}
            onClick={()=> setTab(t.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold ${tab===t.id? "bg-indigo-600 text-white" : "text-zinc-700 hover:bg-zinc-50"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <Card>
        <PricingTable rows={active.pricing} hearings={active.hearings} />
        <p className="mt-4 text-sm text-zinc-600">{CONFIG.affinity.bulkNote}</p>
        <LeadCTA context="affinity" label="Register my chosen name" />
      </Card>
    </Section>
  );
};

const StrategyModules: React.FC = () => (
  <Section id="strategy" title={CONFIG.strategy.title}>
    <p className="text-zinc-700 mb-4">{CONFIG.strategy.positioning}</p>
    <div className="grid md:grid-cols-2 gap-4">
      {CONFIG.strategy.modules.map((m:any)=> (
        <Card key={m.title}>
          <h3 className="font-semibold text-lg mb-2">{m.title}</h3>
          <ul className="list-disc list-inside text-zinc-700 space-y-1">
            {m.bullets.map((b:string)=> (<li key={b}>{b}</li>))}
          </ul>
        </Card>
      ))}
    </div>
    <LeadCTA context="strategy" label="Design my strategy retainer" />
  </Section>
);

const AddOns: React.FC = () => (
  <Section id="addons" title={CONFIG.addons.title}>
    <p className="text-zinc-700 mb-4">{CONFIG.addons.note}</p>
    <Card>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-zinc-500">
            <th className="py-2">Add-on</th>
            <th className="py-2">Fee</th>
          </tr>
        </thead>
        <tbody>
          {CONFIG.addons.items.map((it:any)=> (
            <tr key={it.label} className="border-t">
              <td className="py-3 font-medium">{it.label}</td>
              <td className="py-3"><FeeCell fee={it.fee} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </Section>
);

const Chips: React.FC = () => (
  <Section title="Industries & stages we serve">
    <div className="flex flex-wrap gap-2">
      {CONFIG.industries.map((c)=> (
        <span key={c} className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">{c}</span>
      ))}
    </div>
  </Section>
);

const FAQ: React.FC = () => (
  <Section title="FAQs">
    <div className="space-y-3">
      {CONFIG.faqs.map((f:any, i:number)=> (
        <Card key={i}>
          <p className="font-semibold">{f.q}</p>
          <p className="text-zinc-700 mt-1">{f.a}</p>
        </Card>
      ))}
    </div>
  </Section>
);

// Lead form (simple demo; replace with your submission handler)
const LeadCTA: React.FC<{ context: string; label: string }> = ({ context, label }) => {
  const onClick = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    const select = document.querySelector<HTMLSelectElement>("#lead-need");
    if (select) select.value = context;
  };
  return (
    <button onClick={onClick} className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 font-semibold">
      {label}
    </button>
  );
};

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <Section id="lead-form" title="Get your stage-wise estimate">
      <Card>
        {submitted ? (
          <div className="text-green-700 font-semibold">Thanks! We’ll reach out shortly.</div>
        ) : (
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-600 mb-1">Full Name</label>
              <input required className="w-full rounded-lg border px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg border px-3 py-2" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">Phone</label>
              <input type="tel" required className="w-full rounded-lg border px-3 py-2" placeholder="+91-" />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">What do you need today?</label>
              <select id="lead-need" className="w-full rounded-lg border px-3 py-2">
                <option value="safety">Register safely (Safety)</option>
                <option value="affinity">Register my chosen name (Affinity)</option>
                <option value="strategy">Strategy & Oppositions</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-zinc-600 mb-1">Message (optional)</label>
              <textarea className="w-full rounded-lg border px-3 py-2" rows={4} placeholder="Tell us a bit about your brand/mark" />
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 font-semibold">Get estimate</button>
              <a href="#lead-form" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 font-semibold text-indigo-700 border-indigo-200 hover:bg-indigo-50">Talk to an attorney</a>
            </div>
          </form>
        )}
      </Card>
    </Section>
  );
};

// Page
export default function TrademarkLandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8 space-y-10">
      <Hero onChoose={() => {}} />
      <WhyUs />
      <SafetyBlock />
      <AffinityTabs />
      <StrategyModules />
      <AddOns />
      <Chips />
      <FAQ />
      <LeadForm />
      <footer className="text-xs text-zinc-500 pb-8">
        All fees are professional fees per mark/per class unless stated. Govt. fees are additional. Oppositions, monitoring, cancellations, portfolio/international filings and enforcement are offered under Strategy. Bulk/multi-class discounts apply.
      </footer>
    </main>
  );
}
