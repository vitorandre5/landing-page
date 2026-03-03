import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import ScrollReveal from "./ScrollReveal";

const partnersData = [
  { name: "Parceiro A", lucro: 1820 },
  { name: "Parceiro B", lucro: 1340 },
  { name: "Parceiro C", lucro: 960 },
  { name: "Parceiro D", lucro: 700 },
];

const books = [
  { name: "Bet365", profit: "R$ 2.140", pct: "+18,2%", trend: "up" },
  { name: "Betano", profit: "R$ 1.560", pct: "+14,7%", trend: "up" },
  { name: "Sportingbet", profit: "R$ 780", pct: "+9,3%", trend: "up" },
  { name: "Pinnacle", profit: "R$ 340", pct: "+4,1%", trend: "up" },
];

const PartnerTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-xl">
        <p className="text-xs text-muted-foreground">{payload[0].payload.name}</p>
        <p className="text-sm font-bold text-primary">R$ {payload[0].value.toLocaleString("pt-BR")}</p>
      </div>
    );
  }
  return null;
};

const Analytics = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu lucro em números, não em achismo
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Visualize exatamente de onde vem seu lucro e otimize sua estratégia.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {/* Card A - Interactive Chart */}
        <ScrollReveal delay={0}>
          <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/20 transition-all duration-300 h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-5 uppercase tracking-wide">
              Lucro por Parceiro
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={partnersData} layout="vertical" barCategoryGap="25%">
                <XAxis type="number" hide />
                <Tooltip content={<PartnerTooltip />} cursor={{ fill: "hsl(0 0% 16.1% / 0.5)" }} />
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
                    <stop offset="0%" stopColor="hsl(155 79% 25%)" />
                    <stop offset="100%" stopColor="hsl(155 91% 42%)" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-2 space-y-1">
              {partnersData.map((p) => (
                <div key={p.name} className="flex justify-between text-xs text-muted-foreground">
                  <span>{p.name}</span>
                  <span className="text-primary font-medium">R$ {p.lucro.toLocaleString("pt-BR")}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Card B - List */}
        <ScrollReveal delay={150}>
          <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/20 transition-all duration-300 h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-5 uppercase tracking-wide">
              Lucro por Casa
            </h3>
            <div className="space-y-1">
              {books.map((b, i) => (
                <div
                  key={b.name}
                  className="flex items-center justify-between py-3.5 px-3 rounded-lg border-b border-border last:border-0 hover:bg-surface-hover transition-colors duration-200 -mx-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-mono w-5">{i + 1}.</span>
                    <span className="font-medium text-sm">{b.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold">{b.profit}</span>
                    <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
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
