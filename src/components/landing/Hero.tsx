import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Star, CheckCircle2 } from "lucide-react";
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
  { label: "Lucro total", value: "R$ 9.680,50", color: "text-primary" },
  { label: "ROI", value: "18,40%", color: "text-primary" },
  { label: "Win Rate", value: "63,2%", color: "text-primary" },
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
          <span className="w-2 h-2 rounded-full bg-primary" />
          <p className="text-sm font-medium text-white">
            Capital: {currencyFormatter.format(payload[0].value)}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const socialProof = [
  { icon: Users, label: "+500 apostadores" },
  { icon: TrendingUp, label: "+50k apostas registradas" },
  { icon: Star, label: "4.9 / 5 de avaliação" },
];

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
    {/* Ambient glow effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />
    <div className="absolute top-32 left-1/4 w-[350px] h-[350px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge — sem emoji */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-sm">
            <CheckCircle2 size={13} className="text-primary shrink-0" />
            <span className="text-xs font-medium text-primary tracking-wide">Plano gratuito disponível — sem cartão</span>
          </div>

          <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl font-bold mb-7 text-foreground">
            Controle suas apostas.<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              {" "}Visualize seu lucro
            </span>{" "}
            com clareza.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground/75 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Evolua como um apostador profissional — registre, analise e otimize cada aposta em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base shadow-glow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-glow-lg focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <a href="https://app.bet-tagger.com/">
                Começar grátis
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 text-base border-white/[0.12] text-foreground/80 hover:bg-white/[0.06] hover:border-white/[0.20] hover:text-foreground transition-all duration-200 backdrop-blur-sm"
            >
              <a href="#funcionalidades">Ver funcionalidades</a>
            </Button>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {socialProof.map((s, i) => (
              <>
                {i > 0 && <span key={`sep-${i}`} className="text-muted-foreground/25 select-none text-sm">·</span>}
                <span key={s.label} className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-medium">
                  <s.icon size={12} className="text-primary/60" />
                  {s.label}
                </span>
              </>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Dashboard Mock — premium frame */}
      <ScrollReveal delay={200}>
        <div className="mt-20 max-w-4xl mx-auto relative">
          {/* Ambient glow behind the frame */}
          <div className="absolute inset-x-16 top-12 bottom-0 bg-primary/8 rounded-full blur-[80px] pointer-events-none -z-10" />

          <div className="rounded-3xl border border-white/[0.10] bg-card/90 backdrop-blur-sm overflow-hidden shadow-hero transition-all duration-500 hover:border-white/[0.14]">
            {/* Window chrome bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-[11px] font-medium text-muted-foreground/60 tracking-wide">Bet Tagger · Dashboard</span>
              </div>
              <div className="w-[54px]" />
            </div>

            {/* Dashboard body */}
            <div className="p-4 md:p-5 bg-gradient-to-b from-white/[0.02] to-transparent">
              {/* Area Chart — header with saldo */}
              <div className="rounded-2xl bg-surface/80 border border-white/[0.07] p-4 md:p-5 mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-medium mb-1">Progressão de Capital</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground leading-none">R$ 12.480,50</p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full mt-0.5">
                    +345,73%
                  </span>
                </div>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart
                    data={chartData}
                    margin={{ top: 6, right: 6, left: -8, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.25} />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.02} />
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
                      strokeWidth={2.5}
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

              {/* Bottom Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl bg-surface/80 border border-white/[0.07] p-4 hover:bg-surface-hover hover:border-primary/20 transition-all duration-200"
                  >
                    <p className="text-[10px] text-muted-foreground/70 uppercase tracking-widest font-medium mb-1">{m.label}</p>
                    <p className={`text-xl md:text-2xl font-bold ${m.color}`}>{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;

