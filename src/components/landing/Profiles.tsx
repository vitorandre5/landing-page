import { Scale, Gift, ClipboardList } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const profiles = [
  {
    icon: Scale,
    title: "Apostadores de Arbitragem",
    description:
      "Controle todas as pontas das suas operações de sure bet e acompanhe o lucro garantido em cada entrada.",
  },
  {
    icon: Gift,
    title: "Gestão de Freebets",
    description:
      "Gerencie rollover, free bets e promoções com visão clara do saldo real e do lucro extraído.",
  },
  {
    icon: ClipboardList,
    title: "Apostadores Organizados",
    description:
      "Registre apostas simples e múltiplas, categorize por esporte e acompanhe sua evolução mês a mês.",
  },
];

const Profiles = () => (
  <section className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">Para quem é?</span>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Feito para quem leva apostas a sério
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Independente do seu perfil, o Bet Tagger se adapta ao seu estilo.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {profiles.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="group rounded-2xl border border-white/[0.08] glass-card p-8 text-center transition-all duration-300 hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-glow-sm h-full flex flex-col items-center">
              <div className="mx-auto mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/8 border border-primary/15 group-hover:scale-110 transition-all duration-300">
                <p.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">{p.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Profiles;

