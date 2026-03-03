import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "O Bet Tagger funciona para arbitragem?",
    a: "Sim! O Bet Tagger foi desenvolvido com foco em arbitragem e subbets. Você pode registrar todas as pontas de uma operação, acompanhar odds, stakes e o lucro garantido em cada entrada.",
  },
  {
    q: "Preciso colocar cartão no plano gratuito?",
    a: "Não. Você não precisa informar dados de pagamento para começar no plano Free.",
  },
  {
    q: "Serve para apostas simples também?",
    a: "Com certeza. Além de arbitragem, você pode registrar apostas simples, múltiplas e acumuladores com categorização por esporte, liga e mercado.",
  },
  {
    q: "Posso controlar apostas de tipsters?",
    a: "Sim. O módulo de tipsters permite registrar operações conjuntas, definir percentuais de divisão e acompanhar o lucro de cada tipster individualmente.",
  },
  {
    q: "Como funciona a gestão de banca?",
    a: "O sistema acompanha sua banca em tempo real, mostrando evolução, metas atingidas, drawdown e alertas de risco para você manter o controle total.",
  },
  {
    q: "Posso exportar meus dados?",
    a: "Sim. Todos os dados podem ser exportados em CSV ou PDF para análise externa, prestação de contas com tipsters ou backup pessoal.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre o Bet Tagger.
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

export default FAQ;
