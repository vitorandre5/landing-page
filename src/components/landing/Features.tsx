import { Bot, Clock3, FileSpreadsheet, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { useSiteLanguage } from "@/lib/language";

const Features = () => {
  const { isEn } = useSiteLanguage();

  const features = [
    {
      icon: FileSpreadsheet,
      title: isEn ? "Without history, there is no improvement" : "Sem histórico, você não melhora",
      description: isEn
        ? "Many people bet every day, but rarely track their operation accurately. Without data, every perception becomes guesswork."
        : "Muita gente aposta todos os dias, mas não acompanha a operação com precisão. Sem dados, qualquer percepção vira achismo.",
    },
    {
      icon: Clock3,
      title: isEn ? "Manual tracking breaks consistency" : "O manual quebra a consistência",
      description: isEn
        ? "Writing down each bet takes time. After a few days, control drops, records get lost, and you are back to operating without clarity."
        : "Anotar aposta por aposta toma tempo. Depois de alguns dias, o controle para, os registros se perdem e você volta a operar sem clareza.",
    },
    {
      icon: Bot,
      title: isEn ? "Send the screenshot. AI logs it for you." : "Envie o print. A IA registra para você.",
      description: isEn
        ? "With Bet Tagger AI Auto, screenshots become automatic records inside the platform. Less friction, more speed, and more consistency."
        : "Com o AI Auto do Bet Tagger, os prints viram registros automáticos na plataforma. Menos atrito, mais velocidade e mais constância.",
    },
    {
      icon: LineChart,
      title: isEn ? "More control in your routine" : "Mais controle no dia a dia",
      description: isEn
        ? "Track profit, loss, and performance with complete history, without depending on memory, loose notes, or forgotten spreadsheets."
        : "Acompanhe lucro, prejuízo e desempenho com histórico completo, sem depender de memória, anotações soltas ou planilhas esquecidas.",
    },
  ];

  return (
  <section id="funcionalidades" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Who does not track their numbers is betting in the dark." : "Quem não acompanha os próprios números aposta no escuro."}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {isEn
              ? "Bet Tagger was built to solve exactly this: organize, log, and track your betting operation with more clarity and less manual work."
              : "O Bet Tagger foi criado para resolver exatamente isso: organizar, registrar e acompanhar sua operação com mais clareza e menos trabalho manual."}
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

      <ScrollReveal delay={250}>
        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-xl font-semibold mb-2">{isEn ? "Send the bet screenshot. AI logs it for you." : "Envie o print da aposta. A IA registra para você."}</p>
            <p className="text-sm text-muted-foreground max-w-2xl">
              {isEn
                ? "Instead of filling everything manually, use AI Auto to transform screenshots into automatic records and keep your routine organized even when betting frequently."
                : "Em vez de preencher tudo manualmente, use o AI Auto para transformar prints em registros automáticos dentro da plataforma e manter sua rotina organizada mesmo apostando com frequência."}
            </p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shrink-0">
            <a href="https://app.bet-tagger.com/">{isEn ? "Try for free" : "Testar grátis"}</a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

export default Features;
