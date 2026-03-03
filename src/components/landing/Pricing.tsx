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
    badge: "Mais vendido",
    cta: "Assinar Pro",
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
    badge: "Âncora de preço",
    cta: "Assinar Unlimited",
    highlighted: false,
    features: [
      "Tudo ilimitado",
      "Opção de ser um Tipster parceiro",
      "AI Auto ilimitado",
    ],
  },
];

const Pricing = () => (
  <section id="precos" className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos pensados para quem aposta todo dia
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Escale do gratuito ao unlimited com margem sustentável e foco em performance.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <ScrollReveal key={plan.name} delay={index * 120}>
            <div
              className={`relative rounded-2xl bg-card p-8 transition-all duration-500 h-full ${
                plan.highlighted
                  ? "border-2 border-primary hover:shadow-xl hover:shadow-primary/10"
                  : "border border-border hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              {plan.badge ? (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground border-0 shadow-lg shadow-primary/30">
                  {plan.badge}
                </Badge>
              ) : null}

              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-5">{plan.description}</p>

              <div className="mb-1">
                <span className="text-5xl font-bold">{plan.monthlyPrice}</span>
                <span className="text-muted-foreground text-sm"> / mês</span>
              </div>

              {plan.annualPrice ? (
                <p className="text-sm text-muted-foreground mb-6">ou {plan.annualPrice}</p>
              ) : (
                <div className="mb-6 h-5" />
              )}

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlighted ? "bg-primary/10" : "bg-muted"
                      }`}
                    >
                      <Check
                        size={12}
                        className={plan.highlighted ? "text-primary" : "text-muted-foreground"}
                      />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.cta === "Começar grátis" ? (
                <Button
                  asChild
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`w-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02]"
                      : "border-border text-foreground hover:bg-surface-hover hover:border-primary/30"
                  }`}
                >
                  <a href="https://app.bet-tagger.com/">{plan.cta}</a>
                </Button>
              ) : (
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`w-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02]"
                      : "border-border text-foreground hover:bg-surface-hover hover:border-primary/30"
                  }`}
                >
                  {plan.cta}
                </Button>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <p className="text-center text-sm text-muted-foreground mt-8">
          FREE: 10 apostas no AI Auto • PRO: 300 apostas no AI Auto • UNLIMITED: tudo ilimitado
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Pricing;
