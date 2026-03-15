import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, BarChart3, CheckCircle2, MoreHorizontal, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import ScrollReveal from "./ScrollReveal";
import { useSiteLanguage } from "@/lib/language";

const chartData = [
  { date: "01/01", lucro: 2800, capital: 10800 },
  { date: "05/01", lucro: 3320, capital: 11320 },
  { date: "10/01", lucro: 3180, capital: 11180 },
  { date: "15/01", lucro: 4020, capital: 12020 },
  { date: "20/01", lucro: 4680, capital: 12680 },
  { date: "25/01", lucro: 4520, capital: 12520 },
  { date: "01/02", lucro: 5580, capital: 13580 },
  { date: "05/02", lucro: 6240, capital: 14240 },
  { date: "10/02", lucro: 7020, capital: 15020 },
  { date: "15/02", lucro: 6760, capital: 14760 },
  { date: "20/02", lucro: 8120, capital: 16120 },
  { date: "25/02", lucro: 9340, capital: 17340 },
  { date: "01/03", lucro: 10120, capital: 18120 },
  { date: "05/03", lucro: 11380, capital: 19380 },
  { date: "07/03", lucro: 12480, capital: 20480 },
];

const CustomTooltip = ({ active, payload, label, chartDataLabel, currencyFormatter }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-black/95 px-3 py-2.5 shadow-2xl border border-white/10">
        <p className="text-xs font-semibold text-white/80 mb-1">{label}</p>
        <div className="flex items-center gap-2 text-white">
          <span className="w-2.5 h-2.5 rounded-sm bg-white" />
          <p className="text-sm font-semibold whitespace-nowrap">{chartDataLabel}: {currencyFormatter.format(payload[0].value)}</p>
        </div>
      </div>
    );
  }
  return null;
};

const Hero = () => {
  const { isEn } = useSiteLanguage();
  const [chartDataMode, setChartDataMode] = useState<"profits" | "capital">("profits");
  const [chartAnimationSeed, setChartAnimationSeed] = useState(0);

  const locale = isEn ? "en-US" : "pt-BR";
  const numberFormatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const metrics = [
    { label: isEn ? "Bets" : "Apostas", value: "412", color: "text-white" },
    { label: isEn ? "Profit" : "Lucros", value: isEn ? "R$ 9,680.50" : "R$ 9.680,50", color: "text-[#19e68c]" },
    { label: "ROI", value: isEn ? "18.40%" : "18,40%", color: "text-[#19e68c]" },
    { label: isEn ? "Progression" : "Progressão", value: isEn ? "+345.73%" : "+345,73%", color: "text-[#19e68c]" },
  ];

  const heroBullets = [
    isEn ? "Log bets in seconds" : "Registre apostas em segundos",
    isEn ? "Send screenshots and let AI log them for you" : "Envie prints e a IA planilha para você",
    isEn ? "Track your numbers with more clarity" : "Acompanhe seus números com mais clareza",
  ];

  const activeChartKey: "lucro" | "capital" = chartDataMode === "capital" ? "capital" : "lucro";
  const activeChartLabel = chartDataMode === "capital" ? (isEn ? "Capital" : "Capital") : (isEn ? "Profit" : "Lucro");

  const handleChartModeChange = (nextMode: "profits" | "capital") => {
    if (nextMode === chartDataMode) return;
    setChartDataMode(nextMode);
    setChartAnimationSeed((prev) => prev + 1);
  };

  return (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    {/* Glow effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 hover:bg-primary/15 backdrop-blur-sm px-4 py-1.5 rounded-full">
            {isEn ? "AI Auto: send a screenshot and log it automatically" : "AI Auto: envie print e registre automaticamente"}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            {isEn ? "Stop logging bets manually." : "Pare de planilhar apostas na mão."}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-7">
            {isEn
              ? "Organize your betting operation faster and use AI to convert bet screenshots into automatic records, tracking profit, performance, and history without relying on manual spreadsheets."
              : "Organize sua operação com mais rapidez e use IA para transformar prints de apostas em registros automáticos, acompanhando lucro, desempenho e histórico sem depender de planilhas manuais."}
          </p>

          <div className="flex flex-col items-start gap-3 mb-10 max-w-md mx-auto">
            {heroBullets.map((bullet) => (
              <p key={bullet} className="text-sm md:text-base text-foreground/90 flex items-center gap-2.5 text-left">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>{bullet}</span>
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <a href="https://app.bet-tagger.com/">
                {isEn ? "Start free" : "Começar grátis"}
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground rounded-xl hover:bg-surface-hover hover:border-primary/30 transition-all duration-300"
            >
              <a href="#operacao-organizada">
                {isEn ? "See how AI Auto works" : "Ver como funciona o AI Auto"}
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            {isEn ? "Join without a credit card and start organizing your operation now." : "Entre sem cartão e comece a organizar sua operação agora."}
          </p>
        </div>
      </ScrollReveal>

      {/* Dashboard Mock */}
      <ScrollReveal delay={200}>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-0 md:p-0">
            {/* Area Chart */}
            <div className="mb-4 bg-card border border-border rounded-xl p-4 ui-surface-motion hover:border-primary/30 hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
              <div className="mb-2 flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      aria-label={isEn ? "Chart data" : "Dados do gráfico"}
                      className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44 p-1.5">
                    <p className="px-2 py-1 text-xs font-medium text-muted-foreground">{isEn ? "Chart data" : "Dados do gráfico"}</p>
                    <DropdownMenuItem
                      onSelect={() => {
                        handleChartModeChange("profits");
                      }}
                      className={chartDataMode === "profits" ? "mt-1 rounded-md bg-muted text-foreground" : "mt-1 rounded-md"}
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {isEn ? "Profits" : "Lucros"}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => {
                        handleChartModeChange("capital");
                      }}
                      className={chartDataMode === "capital" ? "rounded-md bg-muted text-foreground" : "rounded-md"}
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Capital
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <ResponsiveContainer width="100%" height={300}>
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
                    <linearGradient id="heroChartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00e59a" stopOpacity={0.28} />
                      <stop offset="100%" stopColor="#00e59a" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="2 6" stroke="#2a313a" vertical={false} />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={12}
                    minTickGap={24}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    tickFormatter={(value) => `${numberFormatter.format(value)}\u00A0R$`}
                    tickMargin={10}
                    width={90}
                    tickCount={5}
                    domain={[0, "dataMax"]}
                  />
                  <Tooltip content={<CustomTooltip chartDataLabel={activeChartLabel} currencyFormatter={currencyFormatter} />} cursor={false} animationDuration={120} />
                  <Area
                    key={`${activeChartKey}-${chartAnimationSeed}`}
                    type="monotone"
                    dataKey={activeChartKey}
                    stroke="#00e59a"
                    strokeWidth={2.5}
                    fill="url(#heroChartGradient)"
                    dot={false}
                    isAnimationActive
                    animationDuration={420}
                    animationEasing="ease-in-out"
                    activeDot={{
                      r: 4,
                      stroke: "#00e59a",
                      strokeWidth: 2,
                      fill: "#00e59a",
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Saldo Atual */}
            <div className="mb-4 bg-card border border-border rounded-xl p-4 ui-surface-motion hover:border-primary/30 hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">{isEn ? "Current balance" : "Saldo Atual"}</p>
              <p className="text-2xl md:text-4xl font-bold text-[#19e68c] whitespace-nowrap">{isEn ? "R$ 12,480.50" : "R$ 12.480,50"}</p>
            </div>

            {/* Bottom Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-card border border-border rounded-xl p-4 ui-surface-motion hover:border-primary/30 hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
                >
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">{m.label}</p>
                  <p className={`text-3xl leading-none font-bold ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

export default Hero;
