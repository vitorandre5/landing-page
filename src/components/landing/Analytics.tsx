import { Eye, Clock3, ScanSearch, FolderClock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useSiteLanguage } from "@/lib/language";

const Analytics = () => {
  const { isEn } = useSiteLanguage();

  const benefitCards = [
    {
      icon: Eye,
      title: isEn ? "See your real result" : "Veja seu resultado real",
      description: isEn
        ? "Track profit, loss, and performance without relying on memory, loose notes, or forgotten spreadsheets."
        : "Acompanhe lucro, prejuízo e desempenho sem depender de memória, anotações soltas ou planilhas esquecidas.",
    },
    {
      icon: Clock3,
      title: isEn ? "Save operational time" : "Economize tempo no operacional",
      description: isEn
        ? "Reduce manual bet-by-bet logging and make your daily routine much more practical."
        : "Reduza o trabalho de registrar aposta por aposta e torne sua rotina muito mais prática.",
    },
    {
      icon: ScanSearch,
      title: isEn ? "Find patterns in your operation" : "Descubra padrões na sua operação",
      description: isEn
        ? "Understand what works better, where you make more mistakes, and which decisions impact your results the most."
        : "Entenda o que funciona melhor, onde você erra mais e quais decisões mais impactam seus resultados.",
    },
    {
      icon: FolderClock,
      title: isEn ? "Keep organized history" : "Mantenha histórico organizado",
      description: isEn
        ? "Keep your bets in one place to analyze your progress with much more clarity."
        : "Tenha suas apostas registradas em um só lugar para analisar sua evolução com muito mais clareza.",
    },
  ];

  return (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Control your bets with more clarity and less effort." : "Controle suas apostas com mais clareza e menos esforço."}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {isEn
              ? "Less manual work to log entries and more consistency to track your operation."
              : "Menos trabalho manual para registrar entradas e mais consistência para acompanhar sua operação."}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {benefitCards.map((card, index) => (
          <ScrollReveal key={card.title} delay={index * 120}>
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-[linear-gradient(155deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_55%)] p-6 md:p-7 hover:border-primary/25 transition-all duration-300 h-full">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/70 via-primary/20 to-transparent" />
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/12 mb-4">
                <card.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{card.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Analytics;
