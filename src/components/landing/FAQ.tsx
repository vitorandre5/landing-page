import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import { useSiteLanguage } from "@/lib/language";

const FAQ = () => {
  const { isEn } = useSiteLanguage();

  const faqs = [
    {
      q: isEn ? "Can I start without paying?" : "Posso começar sem pagar?",
      a: isEn
        ? "Yes. The Free plan allows you to use the platform and test how it works in your routine."
        : "Sim. O plano Free permite usar a plataforma e testar como ela funciona na sua rotina.",
    },
    {
      q: isEn ? "Do I need to fill everything manually?" : "Preciso preencher tudo manualmente?",
      a: isEn
        ? "No. You can use AI Auto to send a bet screenshot and register it automatically inside the platform."
        : "Não. Você pode usar o AI Auto para enviar o print da aposta e registrar automaticamente dentro da plataforma.",
    },
    {
      q: isEn ? "Is the free plan enough for a real test?" : "O plano gratuito já serve para testar de verdade?",
      a: isEn
        ? "Yes. It is ideal to get started, learn the interface, and validate the workflow in your day to day."
        : "Sim. Ele é ideal para começar, conhecer a interface e validar o fluxo no seu dia a dia.",
    },
    {
      q: isEn ? "Which plan makes the most sense for me?" : "Qual plano faz mais sentido para mim?",
      a: isEn
        ? "If you want to test, start with Free. If you bet frequently, Pro tends to be the best value. If you use AI Auto heavily, Unlimited is the best fit."
        : "Se você quer testar, comece no Free. Se aposta com frequência, o Pro tende a ser o melhor custo-benefício. Se usa muito o AI Auto, o Unlimited faz mais sentido.",
    },
    {
      q: isEn ? "Does Bet Tagger find bets for me?" : "O Bet Tagger serve para encontrar apostas?",
      a: isEn
        ? "No. The focus is to organize, log, and track your operation with much more clarity."
        : "Não. O foco é organizar, registrar e acompanhar sua operação com muito mais clareza.",
    },
  ];

  return (
  <section id="faq" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Common questions before you start" : "Dúvidas comuns antes de começar"}
          </h2>
          <p className="text-muted-foreground">
            {isEn ? "Direct answers so you can choose the right plan with confidence." : "Respostas diretas para você escolher o plano ideal com segurança."}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl bg-card px-5 data-[state=open]:bg-surface-hover data-[state=open]:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
  );
};

export default FAQ;
