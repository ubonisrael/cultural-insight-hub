import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Database, FileText, Cpu, BarChart3 } from "lucide-react";

const steps = [
  { icon: Database, label: "Brand Data", desc: "Structured input from brand onboarding: audience, pricing, cultural references, market position." },
  { icon: FileText, label: "Structured Templates", desc: "Data normalized into CDIP's proprietary cultural analysis templates — no bespoke work required." },
  { icon: Cpu, label: "Cultural Metrics Engine", desc: "Algorithmic analysis mapping brand signals against cultural, market, and audience benchmarks." },
  { icon: BarChart3, label: "Intelligence Output", desc: "Actionable scores, insights, and recommendations delivered through a standardized dashboard." },
];

const DataLayer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border px-8 py-5 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <img
          src="/Soorente_Logo.avif"
          alt="Soorente Logo"
          className="h-24 w-auto"
        />
        <span className="text-muted-foreground text-sm ml-2">/ How It Works</span>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl font-display font-bold mb-3">The Intelligence Pipeline</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            CDIP operates as a structured platform — not a consulting service. Every brand receives the same systematic analysis through our four-stage intelligence pipeline.
          </p>

          <div className="relative">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                {/* Vertical line + icon */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pt-2 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground font-display uppercase tracking-wider">Stage {i + 1}</span>
                    {i < steps.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
                  </div>
                  <h3 className="font-display font-semibold text-lg">{step.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
            <h3 className="font-display font-semibold mb-2">What This Means</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Structured SaaS model — consistent, scalable, repeatable</li>
              <li>✓ No bespoke consulting work — every brand gets the same systematic analysis</li>
              <li>✓ Platform logic — intelligence improves as more brands are analyzed</li>
            </ul>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DataLayer;
