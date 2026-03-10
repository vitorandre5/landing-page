import { ArrowLeftRight, Download, Upload } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useSiteLanguage } from "@/lib/language";

const ImportExport = () => {
  const { isEn } = useSiteLanguage();

  const bullets = [
    isEn ? "Bet import" : "Importacao de apostas",
    isEn ? "Data export" : "Exportacao de dados",
    isEn ? "Simpler migration and backup" : "Migracao e backup mais simples",
    isEn ? "More freedom over your history" : "Mais liberdade sobre seu historico",
  ];

  const cards = [
    {
      icon: Upload,
      title: isEn ? "Import and centralize" : "Importe e centralize",
      description: isEn
        ? "Bring your existing betting history into Bet Tagger, including records from other tools such as Bet Analytix, and keep everything organized in one place."
        : "Traga seu historico de apostas para dentro do Bet Tagger, inclusive registros de outras ferramentas como o Bet Analytix, e mantenha tudo organizado em um unico lugar.",
    },
    {
      icon: Download,
      title: isEn ? "Export whenever you need" : "Exporte quando precisar",
      description: isEn
        ? "Export your data easily for external analysis, backup routines, and operational continuity whenever your workflow needs it."
        : "Exporte seus dados com facilidade para analises externas, rotinas de backup e continuidade operacional sempre que sua rotina exigir.",
    },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isEn ? "Your history goes with you." : "Seu historico vai com voce."}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isEn
                ? "Import bets from other tools, including Bet Analytix, and centralize everything in Bet Tagger. When you need to, export your data with ease to keep backup and external analyses up to date."
                : "Importe apostas de outras ferramentas, incluindo o Bet Analytix, e centralize tudo no Bet Tagger. Quando quiser, exporte seus dados com facilidade para manter backup e analises externas em dia."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto mb-8">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 120}>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-7 h-full">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary/12 mb-4">
                  <card.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={180}>
          <div className="max-w-5xl mx-auto rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-7">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <ArrowLeftRight size={16} />
              {isEn ? "Operational continuity" : "Continuidade operacional"}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {bullets.map((item) => (
                <p key={item} className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground/90">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ImportExport;
