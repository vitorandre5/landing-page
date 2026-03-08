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
  <section id="faq" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">FAQ</span>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground/80">
            Tire suas dúvidas sobre o Bet Tagger.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-white/[0.08] rounded-2xl bg-card/60 backdrop-blur-sm px-5 data-[state=open]:bg-white/[0.04] data-[state=open]:border-primary/25 data-[state=open]:border-l-2 data-[state=open]:border-l-primary/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-sm font-semibold hover:no-underline py-5 text-left text-foreground/95 hover:text-foreground [&[data-state=open]]:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-t-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground/80 leading-relaxed pb-5">
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

