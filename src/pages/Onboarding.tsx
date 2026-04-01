import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const audiences = ["Gen Z (18–24)", "Millennials (25–40)", "Gen X (41–56)", "Mass Market", "Luxury Consumers", "Diaspora Communities"];
const categories = ["Fashion & Apparel", "Beauty & Skincare", "Food & Beverage", "Art & Design", "Music & Entertainment", "Lifestyle & Wellness"];
const priceRanges = ["Budget (£0–£50)", "Mid-Range (£50–£200)", "Premium (£200–£500)", "Luxury (£500+)"];

const Onboarding = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    brandName: "", audience: "", category: "", inspiration: "", priceRange: "", location: "", socialMetrics: "",
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard", { state: form });
  };

  return (
    <div className="min-h-screen">
      <nav className="border-b border-border px-8 py-5 flex items-center gap-4">
        <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="font-display text-2xl font-bold tracking-tight">CDIP</span>
        <span className="text-muted-foreground text-sm ml-2">/ Brand Onboarding</span>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl font-display font-bold mb-2">Brand Intelligence Setup</h1>
          <p className="text-muted-foreground mb-10">Complete the form below to generate your cultural intelligence report.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Field label="Brand Name">
              <Input placeholder="e.g. Asa Studios" value={form.brandName} onChange={(e) => update("brandName", e.target.value)} required />
            </Field>

            <Field label="Target Audience">
              <Select value={form.audience} onValueChange={(v) => update("audience", v)}>
                <SelectTrigger><SelectValue placeholder="Select audience segment" /></SelectTrigger>
                <SelectContent>{audiences.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}</SelectContent>
              </Select>
            </Field>

            <Field label="Product Category">
              <Select value={form.category} onValueChange={(v) => update("category", v)}>
                <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </Field>

            <Field label="Cultural Inspiration Source">
              <Input placeholder="e.g. West African textile heritage, Afrofuturism" value={form.inspiration} onChange={(e) => update("inspiration", e.target.value)} />
            </Field>

            <Field label="Price Range">
              <Select value={form.priceRange} onValueChange={(v) => update("priceRange", v)}>
                <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                <SelectContent>{priceRanges.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
              </Select>
            </Field>

            <Field label="Market Location">
              <Input placeholder="e.g. Lagos, London, New York" value={form.location} onChange={(e) => update("location", e.target.value)} />
            </Field>

            <Field label="Social Media Metrics">
              <Input placeholder="e.g. 12K Instagram, 5K TikTok, 2K Twitter" value={form.socialMetrics} onChange={(e) => update("socialMetrics", e.target.value)} />
            </Field>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full gap-2">
                Generate Intelligence Report <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="text-sm font-display font-medium">{label}</Label>
    {children}
  </div>
);

export default Onboarding;
