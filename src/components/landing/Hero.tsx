import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, DollarSign, BarChart3 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import ScrollReveal from "./ScrollReveal";

const numberFormatter = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const metrics = [
  { label: "Apostas", value: "412", color: "text-foreground" },
  { label: "Lucros", value: "R$ 9.680,50", color: "text-primary" },
  { label: "ROI", value: "18,40%", color: "text-primary" },
  { label: "Progressão", value: "+345,73%", color: "text-primary" },
];

const chartData = [
  { date: "01/01", saldo: 2800 },
  { date: "05/01", saldo: 3320 },
  { date: "10/01", saldo: 3180 },
  { date: "15/01", saldo: 4020 },
  { date: "20/01", saldo: 4680 },
  { date: "25/01", saldo: 4520 },
  { date: "01/02", saldo: 5580 },
  { date: "05/02", saldo: 6240 },
  { date: "10/02", saldo: 7020 },
  { date: "15/02", saldo: 6760 },
  { date: "20/02", saldo: 8120 },
  { date: "25/02", saldo: 9340 },
  { date: "01/03", saldo: 10120 },
  { date: "05/03", saldo: 11380 },
  { date: "07/03", saldo: 12480 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl bg-black/95 px-3 py-2.5 shadow-2xl border border-white/10 backdrop-blur-sm">
        <p className="text-xs font-semibold text-white mb-1">{label}</p>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-white" />
          <p className="text-sm font-medium text-white">
            Capital: {currencyFormatter.format(payload[0].value)}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    {/* Glow effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 backdrop-blur-sm">
            ✅ Plano gratuito disponível — sem cartão
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Controle suas apostas esportivas com precisão. Visualize seu {" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              lucro
            </span>{" "}
            com clareza.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Controle suas apostas com precisão. Visualize seu lucro com clareza. Evolua como um verdadeiro profissional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <a href="https://app.bet-tagger.com/">
                Começar grátis
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-surface-hover hover:border-primary/30 transition-all duration-300"
            >
              Ver Dashboard
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Dashboard Mock */}
      <ScrollReveal delay={200}>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-5 md:p-6 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500">
            {/* Area Chart */}
            <div className="rounded-xl bg-surface border border-border p-4 md:p-5 mb-4">
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart
                  data={chartData}
                  margin={{
                    top: 6,
                    right: 6,
                    left: -8,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.03} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="2 6" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={12}
                    minTickGap={24}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                    tickFormatter={(value) => `${numberFormatter.format(value)} R$`}
                    tickMargin={10}
                    width={68}
                    tickCount={5}
                    domain={[0, "dataMax"]}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={false}
                    animationDuration={120}
                  />
                  <Area
                    type="monotoneX"
                    dataKey="saldo"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2.75}
                    fill="url(#areaGradient)"
                    dot={false}
                    activeDot={{
                      r: 4,
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                      fill: "hsl(var(--primary))",
                    }}
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Saldo Atual */}
            <div className="rounded-xl bg-surface border border-border p-4 mb-4">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">Saldo Atual</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">R$ 12.480,50</p>
            </div>

            {/* Bottom Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-surface border border-border p-4 hover:bg-surface-hover hover:border-primary/20 transition-all duration-300"
                >
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">{m.label}</p>
                  <p className={`text-xl md:text-2xl font-bold ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;
