import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const data = [
  { metric: "Pricing Fit", value: 62 },
  { metric: "Audience Fit", value: 85 },
  { metric: "Cultural Consistency", value: 78 },
  { metric: "Visual Cohesion", value: 55 },
];

const MarketAlignmentChart = () => (
  <ResponsiveContainer width="100%" height={260}>
    <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
      <PolarGrid stroke="hsl(0 0% 88%)" />
      <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "hsl(0 0% 45%)" }} />
      <Radar dataKey="value" stroke="hsl(0 0% 10%)" fill="hsl(0 0% 10%)" fillOpacity={0.15} strokeWidth={2} />
    </RadarChart>
  </ResponsiveContainer>
);

export default MarketAlignmentChart;
