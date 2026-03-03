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
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Feito para quem leva apostas a sério
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Independente do seu perfil, o Bet Tagger se adapta ao seu estilo.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {profiles.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 120}>
            <div className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:bg-surface-hover hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 h-full">
              <div className="mx-auto mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <p.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Profiles;
