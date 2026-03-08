import { Bot, Wallet, Users, History } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Bot,
    title: "AI Auto",
    description: "IA que identifica os prints das apostas e planilha tudo automaticamente, com precisão e velocidade.",
  },
  {
    icon: Wallet,
    title: "Gestão de Banca",
    description: "Acompanhe sua banca em tempo real com alertas, metas e histórico de evolução.",
  },
  {
    icon: Users,
    title: "Tipsters e Metas",
    description: "Gerencie apostas de tipsters, divida lucros automaticamente e defina metas por período.",
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Consulte todas as suas apostas com filtros avançados, tags e exportação de dados.",
  },
];

const Features = () => (
  <section id="funcionalidades" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">Funcionalidades</span>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground/80 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Uma IA que identifica os prints das apostas e transforma em planilha automática para você focar no lucro.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 80}>
            <div className="group rounded-2xl border border-white/[0.08] glass-card p-6 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-glow-sm h-full flex flex-col">
              <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/8 transition-colors duration-300 border border-primary/15">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed flex-1">{f.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

