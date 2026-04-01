import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="border-b border-border px-8 py-5 flex items-center justify-between">
        <span className="font-display text-2xl font-bold tracking-tight">CDIP</span>
        <Button variant="outline" size="sm" onClick={() => navigate("/admin")}>
          Admin
        </Button>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-score-mid" />
            <span className="text-sm font-display font-medium">A New Innovation by Soorente</span>
          </motion.div>

          <p className="text-sm font-display uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Cultural Design Intelligence Platform
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-6">
            From Cultural Expression to Commercial Intelligence.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 font-body">
            CDIP transforms brand data into structured cultural performance
            insights — turning narrative into measurable strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/onboarding")}
              className="gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/dashboard")}
            >
              View Intelligence Dashboard
            </Button>
          </div>
        </motion.div>
      </main>

      {/* Bottom bar */}
      <footer className="border-t border-border px-8 py-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>© 2026 Soorente — CDIP Platform</span>
        <button
          onClick={() => navigate("/data-layer")}
          className="hover:text-foreground transition-colors"
        >
          How It Works →
        </button>
      </footer>
    </div>
  );
};

export default Landing;
