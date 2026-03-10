import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";
import { useSiteLanguage } from "@/lib/language";

const Pricing = () => {
  const { isEn } = useSiteLanguage();

  const plans = [
    {
      name: "Free",
      description: isEn ? "To start with no cost and test the platform routine" : "Para começar sem custo e testar a rotina da plataforma",
      monthlyPrice: "R$ 0",
      annualPrice: null,
      badge: null,
      cta: isEn ? "Start free" : "Começar grátis",
      highlighted: false,
      features: [
        isEn ? "All app features enabled" : "Todas as funcionalidades liberadas",
        isEn ? "Up to 5 bankrolls" : "Máximo de 5 bancas",
        isEn ? "Up to 5,000 bets per bankroll" : "Até 5.000 apostas por banca",
        isEn ? "10 AI Auto bets per month" : "10 apostas no AI Auto por mês",
      ],
    },
    {
      name: "Pro",
      description: isEn ? "For frequent bettors who want more speed day to day" : "Para quem aposta com frequência e quer mais velocidade no dia a dia",
      monthlyPrice: isEn ? "R$ 19.90" : "R$ 19,90",
      annualPrice: isEn ? "R$ 179 / year" : "R$ 179 / ano",
      badge: isEn ? "Most popular" : "Mais vendido",
      cta: isEn ? "Subscribe Pro" : "Assinar Pro",
      highlighted: true,
      features: [
        isEn ? "Everything unlimited in the app" : "Tudo ilimitado no app",
        isEn ? "Option to become a partner tipster" : "Opção de ser um Tipster parceiro",
        isEn ? "300 AI Auto bets per month" : "300 apostas no AI Auto por mês",
      ],
    },
    {
      name: "Unlimited",
      description: isEn ? "For users who need unlimited AI Auto and maximum freedom" : "Para quem quer usar o AI Auto sem limite e operar com máxima liberdade",
      monthlyPrice: isEn ? "R$ 39.90" : "R$ 39,90",
      annualPrice: isEn ? "R$ 299 / year" : "R$ 299 / ano",
      badge: isEn ? "Price anchor" : "Âncora de preço",
      cta: isEn ? "Subscribe Unlimited" : "Assinar Unlimited",
      highlighted: false,
      features: [
        isEn ? "Everything unlimited" : "Tudo ilimitado",
        isEn ? "Option to become a partner tipster" : "Opção de ser um Tipster parceiro",
        isEn ? "Unlimited AI Auto" : "AI Auto ilimitado",
      ],
    },
  ];

  return (
  <section id="precos" className="py-20 lg:py-28 relative overflow-visible">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Plans designed for people who bet every day" : "Planos pensados para quem aposta todo dia"}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {isEn ? "Start free and upgrade as your operation volume grows." : "Comece grátis e evolua conforme o volume da sua operação."}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto pt-4 md:pt-6">
        {plans.map((plan, index) => (
          <ScrollReveal key={plan.name} delay={index * 120}>
            <div
              className={`relative rounded-2xl bg-[linear-gradient(160deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.01)_60%)] p-8 transition-all duration-500 h-full ${
                plan.highlighted
                  ? "border-2 border-primary/90 md:scale-[1.06] md:-translate-y-2 shadow-[0_22px_50px_rgba(0,229,154,0.16)] hover:shadow-[0_28px_64px_rgba(0,229,154,0.22)]"
                  : "border border-border hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />
              </div>
              {plan.badge ? (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground border-0 shadow-lg shadow-primary/40">
                  {plan.badge}
                </Badge>
              ) : null}

              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-5">{plan.description}</p>

              <div className="mb-2">
                <span className="text-5xl font-bold">{plan.monthlyPrice}</span>
                <span className="text-muted-foreground text-sm">{isEn ? " / month" : " / mês"}</span>
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
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/35 hover:shadow-primary/50 hover:scale-[1.02]"
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
        <div className="text-center mt-8 max-w-3xl mx-auto">
          <p className="text-lg font-semibold mb-2">{isEn ? "Start free. Upgrade when your volume demands it." : "Comece no gratuito. Evolua quando o seu volume pedir."}</p>
          <p className="text-sm text-muted-foreground mb-4">
            {isEn
              ? "You do not need to decide everything now. Start with Free, test the platform, and see how Bet Tagger fits your routine. When you need more volume, convenience, and AI Auto usage, just upgrade."
              : "Você não precisa decidir tudo agora. Pode começar no plano Free, testar a plataforma e entender como o Bet Tagger encaixa na sua rotina. Quando quiser mais volume, mais praticidade e mais uso do AI Auto, é só migrar."}
          </p>
          <p className="text-center text-sm text-muted-foreground">
            {isEn
              ? "FREE: 10 AI Auto bets • PRO: 300 AI Auto bets • UNLIMITED: everything unlimited"
              : "FREE: 10 apostas no AI Auto • PRO: 300 apostas no AI Auto • UNLIMITED: tudo ilimitado"}
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

export default Pricing;
