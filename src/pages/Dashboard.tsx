import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Target, Eye, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import MarketAlignmentChart from "@/components/MarketAlignmentChart";

const fade = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const brand = (location.state) || { brandName: "Asa Studios", audience: "Gen Z (18–24)", category: "Fashion & Apparel", location: "Lagos, London" };
  const brandName = brand.brandName || "Asa Studios";
  const resonanceScore = 74;

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border px-8 py-5 flex items-center gap-4">
        <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="font-display text-2xl font-bold tracking-tight">CDIP</span>
        <span className="text-muted-foreground text-sm ml-2">/ Intelligence Dashboard</span>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Brand Overview */}
        <motion.div {...fade} transition={{ delay: 0 }}>
          <Card>
            <CardHeader><CardTitle className="text-xl font-display">Brand Overview — {brandName}</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <Stat label="Market" value={brand.location || "Lagos, London"} />
                <Stat label="Audience" value={brand.audience || "Gen Z (18–24)"} />
                <Stat label="Category" value={brand.category || "Fashion & Apparel"} />
                <Stat label="Price Position" value={brand.priceRange || "Premium (£200–£500)"} />
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {brandName} occupies a culturally-anchored position within the {brand.category || "fashion"} landscape, leveraging heritage storytelling to differentiate in an increasingly commoditized market. Initial analysis indicates strong narrative coherence with moderate commercial alignment — suggesting high growth potential pending strategic recalibration of pricing and distribution channels.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cultural Resonance Score */}
          <motion.div {...fade} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <CardHeader><CardTitle className="text-lg font-display">Cultural Resonance Score</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-display font-bold">{resonanceScore}</span>
                  <span className="text-muted-foreground text-sm mb-2">/ 100</span>
                </div>
                <Progress value={resonanceScore} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Score reflects alignment between brand narrative and target audience cultural signals. A score above 70 indicates strong cultural relevance with room for commercial optimization.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Market Alignment Index */}
          <motion.div {...fade} transition={{ delay: 0.15 }}>
            <Card className="h-full">
              <CardHeader><CardTitle className="text-lg font-display">Market Alignment Index</CardTitle></CardHeader>
              <CardContent>
                <MarketAlignmentChart />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strategic Insights */}
          <motion.div {...fade} transition={{ delay: 0.2 }}>
            <Card className="h-full">
              <CardHeader><CardTitle className="text-lg font-display flex items-center gap-2"><Eye className="w-4 h-4" /> Strategic Insights</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Your pricing exceeds your audience purchasing power by 18% — consider a tiered entry strategy.",
                    "Your cultural narrative is strong but not consistently reflected in product visuals.",
                    "High potential in diaspora-led urban markets (London, Toronto, Atlanta).",
                    "Social engagement rate (3.2%) outpaces category average (1.8%), indicating latent demand.",
                    "Competitor gap identified in culturally-authentic mid-range positioning.",
                  ].map((insight, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs font-display font-semibold text-secondary-foreground">{i + 1}</span>
                      <span className="text-muted-foreground">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Recommendations */}
          <motion.div {...fade} transition={{ delay: 0.25 }}>
            <Card className="h-full">
              <CardHeader><CardTitle className="text-lg font-display flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Recommendations</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: Target, title: "Refine Narrative Positioning", desc: "Align brand story with audience aspirational identity. Focus on heritage-meets-modernity messaging." },
                    { icon: TrendingUp, title: "Adjust Entry Price Point", desc: "Introduce a gateway product at £80–£120 to capture price-sensitive cultural consumers." },
                    { icon: Palette, title: "Increase Storytelling Content Frequency", desc: "Shift from product-led to story-led content. Target 60% narrative, 40% product across channels." },
                    { icon: Eye, title: "Expand Distribution Channels", desc: "Prioritize pop-up retail and cultural events in diaspora hubs for brand awareness." },
                  ].map((rec, i) => (
                    <div key={i} className="flex gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="shrink-0 w-8 h-8 rounded bg-primary flex items-center justify-center">
                        <rec.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-display font-semibold">{rec.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{rec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex justify-center pt-4 pb-8">
          <Button variant="outline" onClick={() => navigate("/data-layer")}>
            How Our Intelligence Engine Works →
          </Button>
        </div>
      </main>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
    <p className="font-display font-medium text-sm mt-1">{value}</p>
  </div>
);

export default Dashboard;
