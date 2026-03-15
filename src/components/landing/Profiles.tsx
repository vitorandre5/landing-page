import { CheckCircle2, XCircle, ImageUp, Bot, LayoutDashboard, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useSiteLanguage } from "@/lib/language";

const Profiles = () => {
  const { isEn } = useSiteLanguage();

  const forWho = [
    isEn ? "For people who bet every day or almost every day" : "Para quem aposta todos os dias ou quase todos os dias",
    isEn ? "For people who want to leave the mess behind and track real numbers" : "Para quem quer sair da bagunça e acompanhar os números de verdade",
    isEn ? "For people tired of manual spreadsheets" : "Para quem está cansado de planilhas manuais",
    isEn ? "For people who want to log entries faster" : "Para quem quer registrar entradas com mais rapidez",
    isEn ? "For people who want to run their operation with more organization" : "Para quem quer tratar a operação com mais organização",
  ];

  const notFor = [
    isEn ? "The tool does not choose bets for you" : "A ferramenta não escolhe aposta por você",
    isEn ? "It does not replace strategy" : "Não substitui estratégia",
    isEn ? "It does not promise automatic profit" : "Não promete lucro automático",
  ];

  const aiAutoSteps = [
    {
      icon: ImageUp,
      title: isEn ? "Bet screenshot" : "Print da aposta",
      imageDesktop: "/placeholders/ai-auto/print-da-aposta.png",
      imageMobile: "/placeholders/ai-auto/mobile/print-da-aposta-1080x1350.png",
    },
    {
      icon: Send,
      title: isEn ? "Screenshot upload" : "Envio do print",
      imageDesktop: "/placeholders/ai-auto/envio-do-print.png",
      imageMobile: "/placeholders/ai-auto/mobile/envio-do-print-1080x1350.png",
    },
    {
      icon: Bot,
      title: isEn ? "Automatic reading" : "Leitura automática",
      imageDesktop: "/placeholders/ai-auto/leitura-automatica.png",
      imageMobile: "/placeholders/ai-auto/mobile/leitura-automatica-1080x1350.png",
    },
    {
      icon: LayoutDashboard,
      title: isEn ? "Updated dashboard" : "Dashboard atualizado",
      imageDesktop: "/placeholders/ai-auto/dashboard-atualizado.png",
      imageMobile: "/placeholders/ai-auto/mobile/dashboard-atualizado-1080x1350.png",
    },
  ];

  return (
  <section id="operacao-organizada" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "You do not improve what you do not measure." : "Você não evolui naquilo que não mede."}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {isEn
              ? "A bettor who takes the operation seriously tracks numbers, compares performance, and fixes mistakes. Bet Tagger does not promise miracles. It gives you structure to track your operation in a simple, fast, and consistent way."
              : "Apostador que leva a operação a sério acompanha números, compara desempenho e corrige erros. O Bet Tagger não promete milagre. Ele te dá estrutura para acompanhar sua operação de forma simples, rápida e consistente."}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto mb-6">
        <ScrollReveal>
          <div className="rounded-2xl border border-border bg-card p-7 h-full">
            <h3 className="text-xl font-semibold mb-4">{isEn ? "Built for people who bet frequently and want more control." : "Feito para quem aposta com frequência e quer mais controle."}</h3>
            <div className="space-y-3">
              {forWho.map((item) => (
                <p key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-2xl border border-border bg-card p-7 h-full">
            <h3 className="text-xl font-semibold mb-4">{isEn ? "Bet Tagger is not a magic shortcut." : "O Bet Tagger não é atalho mágico."}</h3>
            <div className="space-y-3 mb-4">
              {notFor.map((item) => (
                <p key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <XCircle size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {isEn
                ? "It solves a real problem for frequent bettors: organize, log, and track your operation clearly."
                : "Ele resolve um problema real para quem aposta com frequência: organizar, registrar e acompanhar a operação com clareza."}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={180}>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7 md:p-8 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-2">{isEn ? "A simpler way to keep your operation organized." : "Um jeito mais simples de manter sua operação organizada."}</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            {isEn
              ? "With Bet Tagger, you can log bets manually or speed everything up with AI Auto to read screenshots and launch entries in the platform."
              : "Com o Bet Tagger, você pode registrar suas apostas manualmente ou acelerar tudo usando o AI Auto para ler prints e lançar as entradas na plataforma."}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {aiAutoSteps.map((step) => (
              <div key={step.title} className="rounded-xl border border-border bg-[linear-gradient(160deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_60%)] p-5 text-center">
                <picture>
                  <source media="(max-width: 640px)" srcSet={step.imageMobile} />
                  <img
                    src={step.imageDesktop}
                    alt={`Placeholder ${step.title}`}
                    className="w-full aspect-[4/5] sm:aspect-[16/10] rounded-lg border border-border object-cover mb-4 shadow-lg shadow-black/25"
                  />
                </picture>
                <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12">
                  <step.icon size={20} className="text-primary" />
                </div>
                <p className="text-base font-semibold">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

export default Profiles;
