import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, DollarSign, BarChart3 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import ScrollReveal from "./ScrollReveal";

const metrics = [
  { label: "Apostas", value: "53", color: "text-foreground" },
  { label: "Lucros", value: "R$ 33,42", color: "text-primary" },
  { label: "ROI", value: "1,30%", color: "text-primary" },
  { label: "Progressão", value: "13,56%", color: "text-destructive" },
];

const chartData = [
  { date: "01/01", saldo: 120 },
  { date: "05/01", saldo: 280 },
  { date: "10/01", saldo: 210 },
  { date: "15/01", saldo: 520 },
  { date: "20/01", saldo: 680 },
  { date: "25/01", saldo: 590 },
  { date: "01/02", saldo: 820 },
  { date: "05/02", saldo: 950 },
  { date: "10/02", saldo: 1100 },
  { date: "15/02", saldo: 980 },
  { date: "20/02", saldo: 1340 },
  { date: "25/02", saldo: 1580 },
  { date: "01/03", saldo: 1820 },
  { date: "05/03", saldo: 2140 },
  { date: "07/03", saldo: 2460 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-xl">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-bold text-primary">R$ {payload[0].value.toLocaleString("pt-BR")}</p>
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
            ✅ Teste grátis por 7 dias — sem cartão
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Controle suas apostas.
            <br />
            Acompanhe seu{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              lucro
            </span>
            .
            <br />
            Evolua como profissional.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Plataforma completa para registrar apostas, arbitragem, subbets e
            acompanhar sua performance em tempo real.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
            >
              Começar grátis (7 dias)
              <ArrowRight className="ml-2" size={18} />
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
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(155 91% 42%)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="hsl(155 91% 42%)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 18%)" vertical={false} />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(0 0% 54.9%)", fontSize: 10 }}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(0 0% 54.9%)", fontSize: 10 }}
                    tickFormatter={(v) => `${v} R$`}
                    width={60}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="saldo"
                    stroke="hsl(155 91% 42%)"
                    strokeWidth={2}
                    fill="url(#areaGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Saldo Atual */}
            <div className="rounded-xl bg-surface border border-border p-4 mb-4">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">Saldo Atual</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">R$ 271,15</p>
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
