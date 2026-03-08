import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import logo from "@/assets/logo.png";

const CTAFooter = () => (
  <>
    {/* CTA Final */}
    <section className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] bg-primary/10 rounded-full blur-[160px]" />
      </div>
      <div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-accent/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[200px] h-[200px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <span className="section-badge">Comece agora</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-2xl mx-auto">
            Pronto para transformar apostas em{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              gestão profissional
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground/80 mb-10 max-w-lg mx-auto leading-relaxed">
            Junte-se a centenas de apostadores que já organizam e lucram mais com o Bet Tagger.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-13 text-base shadow-glow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-glow-lg focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <a href="https://app.bet-tagger.com/register">
                Criar conta grátis agora
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-13 text-base text-muted-foreground hover:text-foreground hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-200"
            >
              <a href="#precos">Ver planos</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-white/[0.06] py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand column */}
          <div>
            <span className="flex items-center gap-2 text-sm font-semibold mb-2">
              <img src={logo} alt="Bet Tagger" className="h-6 w-6" />
              <span>Bet <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tagger</span></span>
            </span>
            <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-[200px]">
              Gestão de apostas profissional. Controle, análise e evolução em um só lugar.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-8 md:justify-center">
            <div className="flex flex-col gap-2.5">
              <a href="#funcionalidades" className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors">
                Funcionalidades
              </a>
              <a href="#precos" className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors">
                Preços
              </a>
              <a href="#faq" className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="md:text-right">
            <p className="text-xs text-muted-foreground/40">
              © 2026 Bet Tagger.
            </p>
            <p className="text-xs text-muted-foreground/40 mt-1">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;

