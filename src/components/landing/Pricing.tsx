import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Free",
    description: "Testar e viciar",
    monthlyPrice: "R$ 0",
    annualPrice: null,
    badge: null,
    cta: "Começar grátis",
    ctaHref: "https://app.bet-tagger.com/",
    highlighted: false,
    features: [
      "Todas as funcionalidades liberadas",
      "Máximo de 5 bancas",
      "Até 5.000 apostas por banca",
      "10 apostas no AI Auto por mês",
    ],
  },
  {
    name: "Pro",
    description: "Plano Premium",
    monthlyPrice: "R$ 19,90",
    annualPrice: "R$ 179 / ano",
    annualSavings: "Economize 25%",
    badge: "Mais vendido",
    cta: "Assinar Pro",
    ctaHref: "https://app.bet-tagger.com/",
    highlighted: true,
    features: [
      "Tudo ilimitado no app",
      "Opção de ser um Tipster parceiro",
      "300 apostas no AI Auto por mês",
    ],
  },
  {
    name: "Unlimited",
    description: "High Roller",
    monthlyPrice: "R$ 39,90",
    annualPrice: "R$ 299 / ano",
    annualSavings: "Economize 37%",
    badge: null,
    cta: "Assinar Unlimited",
    ctaHref: "https://app.bet-tagger.com/",
    highlighted: false,
    features: [
      "Tudo ilimitado",
      "Opção de ser um Tipster parceiro",
      "AI Auto ilimitado",
    ],
  },
];

const Pricing = () => (
  <section id="precos" className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">Planos</span>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Planos pensados para quem aposta todo dia
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Escale do gratuito ao unlimited com margem sustentável e foco em performance.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <ScrollReveal key={plan.name} delay={index * 100}>
            <div
              className={`relative rounded-2xl flex flex-col h-full transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/[0.07] to-transparent border border-primary/30 ring-1 ring-primary/20 shadow-glow-md hover:shadow-glow-lg"
                  : "glass-card border-white/[0.08] hover:border-primary/20 hover:shadow-glow-sm"
              } p-8`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground border-0 shadow-glow-sm text-xs font-semibold px-3 py-1">
                  {plan.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground/70 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/[0.07]">
                <div className="flex items-baseline gap-1 mb-1.5">
                  <span className="text-4xl font-bold tracking-tight text-foreground">{plan.monthlyPrice}</span>
                  <span className="text-muted-foreground/60 text-sm"> / mês</span>
                </div>
                {plan.annualPrice ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-muted-foreground/60">ou {plan.annualPrice}</span>
                    {plan.annualSavings && (
                      <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/15 px-2 py-0.5 rounded-full">
                        {plan.annualSavings}
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground/50">para sempre</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-primary/15 border border-primary/25" : "bg-white/[0.06] border border-white/[0.10]"
                      }`}
                    >
                      <Check
                        size={11}
                        className={plan.highlighted ? "text-primary" : "text-muted-foreground"}
                      />
                    </div>
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  asChild
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`w-full font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02]"
                      : "border-white/[0.12] text-foreground/90 hover:bg-white/[0.06] hover:border-primary/30"
                  }`}
                >
                  <a href={plan.ctaHref}>{plan.cta}</a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <p className="text-center text-xs text-muted-foreground/50 mt-10">
          FREE: 10 apostas no AI Auto &nbsp;·&nbsp; PRO: 300 apostas no AI Auto &nbsp;·&nbsp; UNLIMITED: tudo ilimitado
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Pricing;

