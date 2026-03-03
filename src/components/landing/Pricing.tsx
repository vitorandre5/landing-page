import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  "Registro ilimitado de apostas",
  "Arbitragem e subbets",
  "Gestão de bankroll",
  "Dashboard completo",
  "Parceiros e metas",
  "Exportação de dados",
  "Suporte prioritário",
];

const Pricing = () => (
  <section id="precos" className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos simples e transparentes
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Comece grátis por 7 dias. Sem compromisso, sem cartão de crédito.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {/* Semestral */}
        <ScrollReveal delay={0}>
          <div className="relative rounded-2xl border-2 border-primary bg-card p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full">
            <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground border-0 shadow-lg shadow-primary/30">
              Melhor custo-benefício
            </Badge>
            <h3 className="text-lg font-semibold mb-1">Plano Semestral</h3>
            <p className="text-muted-foreground text-sm mb-5">Cobrado a cada 6 meses</p>
            <div className="mb-6">
              <span className="text-5xl font-bold">R$ 22,90</span>
              <span className="text-muted-foreground text-sm"> / mês</span>
            </div>
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]">
              Assinar Semestral
            </Button>
          </div>
        </ScrollReveal>

        {/* Mensal */}
        <ScrollReveal delay={150}>
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-500 h-full">
            <h3 className="text-lg font-semibold mb-1">Plano Mensal</h3>
            <p className="text-muted-foreground text-sm mb-5">Sem fidelidade</p>
            <div className="mb-6">
              <span className="text-5xl font-bold">R$ 59,90</span>
              <span className="text-muted-foreground text-sm"> / mês</span>
            </div>
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Check size={12} className="text-muted-foreground" />
                  </div>
                  {b}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="w-full border-border text-foreground hover:bg-surface-hover hover:border-primary/30 font-semibold transition-all duration-300"
            >
              Assinar Mensal
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={300}>
        <p className="text-center text-sm text-muted-foreground mt-8">
          ✅ Teste grátis por 7 dias • Cancele quando quiser
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Pricing;
