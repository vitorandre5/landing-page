import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import ScrollReveal from "./ScrollReveal";

const partnersData = [
  { name: "Tipster A", lucro: 1820 },
  { name: "Tipster B", lucro: 1340 },
  { name: "Tipster C", lucro: 960 },
  { name: "Tipster D", lucro: 700 },
];

const books = [
  { name: "Bet365", profit: "R$ 2.140", pct: "+18,2%", trend: "up" },
  { name: "Betano", profit: "R$ 1.560", pct: "+14,7%", trend: "up" },
  { name: "Sportingbet", profit: "R$ 780", pct: "+9,3%", trend: "up" },
  { name: "Pinnacle", profit: "R$ 340", pct: "+4,1%", trend: "up" },
];

const summaryChips = [
  { label: "Lucro total", value: "R$ 4.820" },
  { label: "ROI médio", value: "+12,1%" },
  { label: "Casas ativas", value: "4" },
];

const PartnerTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-white/[0.10] bg-popover/95 px-3 py-2 shadow-xl backdrop-blur-sm">
        <p className="text-xs text-muted-foreground mb-0.5">{payload[0].payload.name}</p>
        <p className="text-sm font-bold text-primary">R$ {payload[0].value.toLocaleString("pt-BR")}</p>
      </div>
    );
  }
  return null;
};

const Analytics = () => (
  <section className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">Analytics</span>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Seu lucro em números, não em achismo
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Visualize exatamente de onde vem seu lucro e otimize sua estratégia.
          </p>
        </div>
      </ScrollReveal>

      {/* Summary chips */}
      <ScrollReveal delay={50}>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {summaryChips.map((c) => (
            <div key={c.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-surface/60 backdrop-blur-sm">
              <span className="text-xs text-muted-foreground/70 font-medium">{c.label}</span>
              <span className="text-xs font-bold text-primary">{c.value}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* Card A - Interactive Chart */}
        <ScrollReveal delay={0}>
          <div className="rounded-2xl border border-white/[0.08] glass-card p-6 hover:border-primary/20 transition-all duration-300 h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Lucro por Tipster
              </h3>
              <span className="text-[11px] font-medium text-primary bg-primary/10 border border-primary/15 px-2.5 py-0.5 rounded-full">
                Últimos 30 dias
              </span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={partnersData} layout="vertical" barCategoryGap="25%">
                <XAxis type="number" hide />
                <Tooltip content={<PartnerTooltip />} cursor={{ fill: "hsl(0 0% 14% / 0.6)" }} />
                <Bar dataKey="lucro" radius={[0, 8, 8, 0]}>
                  {partnersData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#partnerGradient)`}
                      className="cursor-pointer"
                    />
                  ))}
                </Bar>
                <defs>
                  <linearGradient id="partnerGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(155 65% 26%)" />
                    <stop offset="100%" stopColor="hsl(155 72% 38%)" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-3 space-y-1.5">
              {partnersData.map((p) => (
                <div key={p.name} className="flex justify-between text-xs">
                  <span className="text-muted-foreground/70">{p.name}</span>
                  <span className="text-primary font-semibold">R$ {p.lucro.toLocaleString("pt-BR")}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Card B - List */}
        <ScrollReveal delay={120}>
          <div className="rounded-2xl border border-white/[0.08] glass-card p-6 hover:border-primary/20 transition-all duration-300 h-full">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Lucro por Casa
              </h3>
              <span className="text-[11px] font-medium text-muted-foreground/50 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-full">
                Top 4
              </span>
            </div>
            <div className="space-y-0.5">
              {books.map((b, i) => (
                <div
                  key={b.name}
                  className="flex items-center justify-between py-3 px-2 rounded-xl border-b border-white/[0.06] last:border-0 hover:bg-white/[0.04] hover:border-l-2 hover:border-l-primary/40 transition-all duration-200 -mx-1 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground/50 font-mono w-4">{i + 1}</span>
                    <span className="font-medium text-sm text-foreground/90">{b.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">{b.profit}</span>
                    <span className="text-xs text-primary font-semibold bg-primary/10 border border-primary/15 px-2 py-0.5 rounded-full">
                      {b.pct}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Analytics;

