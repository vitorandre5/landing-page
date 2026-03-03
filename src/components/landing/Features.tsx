import { GitBranch, Wallet, Users, History } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: GitBranch,
    title: "Arbitragem e Subbets",
    description: "Registre operações de arbitragem e subbets com controle total de entradas, odds e resultados.",
  },
  {
    icon: Wallet,
    title: "Gestão de Bankroll",
    description: "Acompanhe seu bankroll em tempo real com alertas, metas e histórico de evolução.",
  },
  {
    icon: Users,
    title: "Parceiros e Metas",
    description: "Gerencie apostas de parceiros, divida lucros automaticamente e defina metas por período.",
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Consulte todas as suas apostas com filtros avançados, tags e exportação de dados.",
  },
];

const Features = () => (
  <section id="funcionalidades" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ferramentas profissionais para quem quer levar apostas a sério.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:bg-surface-hover hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 h-full">
              <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
