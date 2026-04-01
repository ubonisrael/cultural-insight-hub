import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const brands = [
  { name: "Asa Studios", score: 74, category: "Fashion & Apparel", date: "2026-02-14", status: "Active" },
  { name: "Ọmọ Couture", score: 82, category: "Fashion & Apparel", date: "2026-02-28", status: "Active" },
  { name: "Adire Collective", score: 61, category: "Fashion & Apparel", date: "2026-03-01", status: "Active" },
  { name: "Nkem Atelier", score: 89, category: "Fashion & Apparel", date: "2026-03-05", status: "Pending" },
  { name: "Ìtàn Threads", score: 45, category: "Fashion & Apparel", date: "2026-03-08", status: "Active" },
];

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border px-8 py-5 flex items-center gap-4">
        <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="font-display text-2xl font-bold tracking-tight">CDIP</span>
        <span className="text-muted-foreground text-sm ml-2">/ Admin</span>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold">Brand Portfolio</h1>
              <p className="text-muted-foreground text-sm mt-1">{brands.length} brands onboarded</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold">{Math.round(brands.reduce((a, b) => a + b.score, 0) / brands.length)}</p>
              <p className="text-xs text-muted-foreground">Avg. Score</p>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="px-6 py-3 font-display font-medium text-muted-foreground">Brand</th>
                      <th className="px-6 py-3 font-display font-medium text-muted-foreground">Category</th>
                      <th className="px-6 py-3 font-display font-medium text-muted-foreground">Score</th>
                      <th className="px-6 py-3 font-display font-medium text-muted-foreground">Onboarded</th>
                      <th className="px-6 py-3 font-display font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brands.map((b) => (
                      <tr key={b.name} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors cursor-pointer" onClick={() => navigate("/dashboard")}>
                        <td className="px-6 py-4 font-display font-medium">{b.name}</td>
                        <td className="px-6 py-4 text-muted-foreground">{b.category}</td>
                        <td className="px-6 py-4">
                          <span className={`font-display font-semibold ${b.score >= 75 ? "text-score-high" : b.score >= 55 ? "text-foreground" : "text-score-low"}`}>
                            {b.score}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{b.date}</td>
                        <td className="px-6 py-4">
                          <Badge variant={b.status === "Active" ? "default" : "secondary"}>{b.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Admin;
