import React, { useMemo, useState } from "react";

// --- CONFIG (derived from your JSON tree) ---
const CONFIG = {
  hero: {
    headline: "Copyright Advisory, Registration Assistance & Agreements in India",
    subtext:
      "Get ownership clarity, file your copyright, draft or review license/assignment agreements, plan monetization—or request a custom portfolio strategy.",
    trust: [
      "Attorney-led",
      "Activity-wise fees (Govt. fees extra)",
      "Bulk discounts",
      "Coordination with associates (for disputes)",
    ],
  },
  goals: [
    { id: "ownership", title: "Ownership Clarity", cta: "Get ownership clarity" },
    { id: "registration", title: "Copyright Registration", cta: "File my copyright" },
    { id: "license", title: "License & Assign", cta: "Draft / review my agreement" },
    { id: "monetization", title: "Royalty & Monetization", cta: "Plan monetization" },
    { id: "strategy", title: "Portfolio & Strategy (SoP)", cta: "Submit SoP" },
  ],
  fees: [
    {
      activity: "Opinions / Advisory / Reviews",
      fee: "₹5,000 / hour",
      note: "Minimum 1 hour; 30-minute increments thereafter.",
    },
    { activity: "Work‑for‑Hire / Assignment (Standard)", fee: "Starts ₹15,000", note: "Typically ~3 hours depending on inputs/iterations." },
    { activity: "Agreements (Complex)", fee: "Starts ₹15,000", note: "Minimum billing 3 hours; scales with complexity." },
    {
      activity: "Copyright Filing + Associate Advisory (per work)",
      fee: "Starts ₹15,000",
      note: "Govt. fee extra by category; add advisory at ₹5,000/hr if opinions/directions on the work are needed pre‑filing.",
    },
    { activity: "Recordal of Assignment / Transfer", fee: "Starts ₹10,000", note: "Govt. fee extra; depends on document set & work types." },
    { activity: "Coordination with Associates (disputes/takedowns)", fee: "Starts ₹10,000", note: "Effort‑based escalation; external counsel fees separate." },
    { activity: "Memos / Written Notes / Session Summaries", fee: "₹5,000 / hour", note: "Minimum 1 hour; 30‑minute increments thereafter." },
    { activity: "Bulk Instructions (multiple works/agreements)", fee: "Discounted", note: "Per‑unit fees reduce with volume (itemized in your estimate)." },
  ],
  terms: [
    "Govt. processing applies; no certificate timeline guarantees.",
    "Govt. fees & taxes are additional.",
    "Copyright filings executed via associates; we prepare & coordinate end‑to‑end.",
    "Disputes: coordination with external associates only; litigation not advertised.",
    "Private IP services provider; not a government site.",
  ],
};

// --- UTILS ---
const classNames = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");

// Pill component
const Pill: React.FC<{ children: React.ReactNode }>=({ children })=> (
  <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs px-3 py-1 mr-2 mb-2 border border-slate-200">{children}</span>
);

// Simple anchor scroll (for smooth UX)
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Lead form
const LeadForm: React.FC<{ context?: string }>=({ context })=>{
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    need: context || "Ownership Clarity",
    message: "",
    file: undefined as File | undefined,
  });
  const needs = [
    "Ownership Clarity",
    "Copyright Registration",
    "License & Assign",
    "Monetization",
    "Strategy (SoP)",
  ];
  return (
    <form onSubmit={(e)=>{e.preventDefault(); alert("Submitted. (Wireframe demo)");}} className="w-full grid gap-4">
      <div className="grid md:grid-cols-3 gap-3">
        <input required placeholder="Name" className="input" value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} />
        <input required type="email" placeholder="Email" className="input" value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} />
        <input required placeholder="Phone" className="input" value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} />
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <select className="input" value={form.need} onChange={(e)=>setForm({ ...form, need: e.target.value })}>
          {needs.map(n=> <option key={n}>{n}</option>)}
        </select>
        <input type="file" className="input" onChange={(e)=> setForm({ ...form, file: e.target.files?.[0] })} />
      </div>
      <textarea placeholder="Message" className="input h-28" value={form.message} onChange={(e)=>setForm({ ...form, message: e.target.value })} />
      <div className="flex gap-3 flex-wrap">
        <button className="btn-primary" type="submit">Get Activity‑Wise Estimate</button>
        <a href="#leadform" className="btn-secondary">Talk to a Professional</a>
      </div>
      <p className="text-xs text-slate-500">
        Govt. fees are additional. Govt. processing applies; no certificate timelines are promised. Filings executed via associates; we prepare & coordinate end‑to‑end.
      </p>
    </form>
  );
}

// --- PAGE ---
export default function CopyrightLanding() {
  const [leadContext, setLeadContext] = useState<string | undefined>(undefined);

  const onOpenLead = (ctx?: string) => {
    setLeadContext(ctx);
    scrollTo("leadform");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Styles for quick prototype (Tailwind utility layer) */}
      <style>{`
        .container{max-width:1100px;margin:0 auto;padding:0 1rem}
        .btn-primary{background:#111827;color:#fff;padding:.75rem 1rem;border-radius:.75rem;font-weight:600}
        .btn-secondary{background:#e5e7eb;color:#111827;padding:.75rem 1rem;border-radius:.75rem;font-weight:600}
        .card{border:1px solid #e5e7eb;border-radius:1rem;padding:1rem;background:#fff}
        .h1{font-size:clamp(1.5rem,3.6vw,2.5rem);font-weight:800;line-height:1.1}
        .h2{font-size:clamp(1.25rem,2.6vw,1.75rem);font-weight:800}
        .sub{color:#374151}
        .input{border:1px solid #e5e7eb;border-radius:.75rem;padding:.75rem;background:#fff}
        .section{padding:64px 0}
        .table{width:100%;border-collapse:separate;border-spacing:0 8px}
        .table th{font-weight:700;text-align:left;color:#374151}
        .table td{background:#fff;border:1px solid #e5e7eb;padding:12px;border-radius:.5rem}
        .grid-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
      `}</style>

      {/* HERO */}
      <header className="section bg-slate-50 border-b border-slate-200">
        <div className="container grid gap-6">
          <h1 className="h1">{CONFIG.hero.headline}</h1>
          <p className="sub max-w-3xl">{CONFIG.hero.subtext}</p>
          <div className="flex flex-wrap">{CONFIG.hero.trust.map((t)=> <Pill key={t}>{t}</Pill>)}</div>
          <div className="flex gap-3 flex-wrap">
            <button className="btn-primary" onClick={()=> onOpenLead(undefined)}>Get Activity‑Wise Estimate</button>
            <a className="btn-secondary" href="#leadform">Talk to a Professional</a>
          </div>
        </div>
      </header>

      {/* GOALS */}
      <section className="section" id="goals">
        <div className="container">
          <h2 className="h2 mb-4">What do you need today?</h2>
          <div className="grid-cards">
            {CONFIG.goals.map((g)=> (
              <article key={g.id} className="card">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{g.title}</h3>
                  <a href={`#${g.id}`} className="text-slate-500 text-sm">Jump ↓</a>
                </div>
                <div className="mt-4 flex gap-2">
                  <a href={`#${g.id}`} className="btn-secondary">Learn more</a>
                  <button className="btn-primary" onClick={()=> onOpenLead(g.title)}>{g.cta}</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERSHIP */}
      <Section id="ownership" title="Ownership Clarity" onPrimary={()=> onOpenLead("Ownership Clarity")}
        bullets={[
          "Authorship/ownership advisory & copyrightability opinions",
          "Work‑for‑hire and assignment drafting/review",
        ]}
        primaryLabel="Get ownership clarity"
      />

      {/* REGISTRATION */}
      <Section id="registration" title="Copyright Registration" onPrimary={()=> onOpenLead("Copyright Registration")}
        bullets={[
          "Filing assistance per work",
          "Recordals of assignment/transfer",
          "Pre‑filing advisory checks",
          "Filings executed via associates; we prepare & coordinate end‑to‑end",
        ]}
        primaryLabel="File my copyright"
      />

      {/* LICENSE */}
      <Section id="license" title="License & Assign" onPrimary={()=> onOpenLead("License & Assign")}
        bullets={[
          "Exclusive/non‑exclusive licenses, assignments",
          "Usage scopes (term, territory, royalty clauses)",
          "Digital distribution terms",
        ]}
        primaryLabel="Draft / review my agreement"
      />

      {/* MONETIZATION */}
      <Section id="monetization" title="Royalty & Monetization" onPrimary={()=> onOpenLead("Monetization")}
        bullets={[
          "Licensing strategies & royalty frameworks",
          "Guidance on collective rights bodies",
        ]}
        primaryLabel="Plan monetization"
      />

      {/* STRATEGY */}
      <Section id="strategy" title="Portfolio & Strategy (SoP)" onPrimary={()=> onOpenLead("Strategy (SoP)")}
        bullets={[
          "Portfolio audits & management",
          "Commercialization roadmaps",
          "Integration with trademarks/patents/brand",
          "Custom engagement after SoP review; no public price list",
        ]}
        primaryLabel="Submit SoP"
      />

      {/* FEES TABLE */}
      <section className="section bg-slate-50 border-y border-slate-200" id="fees">
        <div className="container">
          <h2 className="h2 mb-4">Activity‑Wise Professional Fees</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Professional Fee</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {CONFIG.fees.map((row)=> (
                  <tr key={row.activity}>
                    <td className="align-top">{row.activity}</td>
                    <td className="align-top whitespace-nowrap">{row.fee}</td>
                    <td className="align-top text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">Government fees & taxes are additional and vary by work category. Scope changes and complexity may affect fees. Government processing applies; no promise of certificate timelines.</p>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="section" id="leadform">
        <div className="container">
          <h2 className="h2 mb-2">Tell us what you need today</h2>
          <p className="sub mb-6">Your context: <strong>{leadContext || "(not set)"}</strong></p>
          <LeadForm context={leadContext} />
        </div>
      </section>

      {/* TERMS */}
      <footer className="section bg-slate-50 border-t border-slate-200" id="terms">
        <div className="container grid gap-2">
          <h2 className="h2">Terms / Legal Notes</h2>
          <ul className="list-disc pl-5 text-slate-700">
            {CONFIG.terms.map((t)=> <li key={t}>{t}</li>)}
          </ul>
        </div>
      </footer>
    </div>
  );
}

// Generic section component
function Section({ id, title, bullets, primaryLabel, onPrimary }:{
  id: string;
  title: string;
  bullets: string[];
  primaryLabel: string;
  onPrimary: ()=>void;
}){
  return (
    <section className="section" id={id}>
      <div className="container grid gap-4">
        <h2 className="h2">{title}</h2>
        <ul className="grid gap-2 text-slate-700 list-disc pl-5">
          {bullets.map((b)=>(<li key={b}>{b}</li>))}
        </ul>
        <div className="flex gap-3 flex-wrap">
          <button className="btn-primary" onClick={onPrimary}>{primaryLabel}</button>
          <a className="btn-secondary" href="#fees">See fees</a>
        </div>
      </div>
    </section>
  );
}
