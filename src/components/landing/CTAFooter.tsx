import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import logo from "@/assets/logo.png";

const CTAFooter = () => (
  <>
    {/* CTA Final */}
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-10 right-1/4 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
            Pronto para transformar apostas em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              gestão profissional
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Junte-se a centenas de apostadores que já organizam e lucram mais com o Bet Tagger.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.03]"
          >
            Criar conta grátis agora
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </ScrollReveal>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-sm font-bold">
            <img src={logo} alt="Bet Tagger" className="h-6 w-6" />
            Bet{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tagger
            </span>
          </span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#funcionalidades" className="hover:text-foreground transition-colors">
              Funcionalidades
            </a>
            <a href="#precos" className="hover:text-foreground transition-colors">
              Preços
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Bet Tagger. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
