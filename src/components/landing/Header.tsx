import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Preços", href: "#precos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <img src={logo} alt="Bet Tagger" className="h-7 w-7" />
          <span>Bet <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tagger</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-all duration-200"
          >
            <a href="https://app.bet-tagger.com/">Entrar</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-glow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <a href="https://app.bet-tagger.com/">
              Começar grátis
              <ArrowRight className="ml-1.5" size={14} />
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground p-1 rounded-lg hover:bg-white/[0.06] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/[0.06] px-4 pt-2 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/[0.06]">
            <Button asChild variant="ghost" size="sm" className="w-full justify-center border border-white/[0.08] text-muted-foreground hover:text-foreground hover:bg-white/[0.06]">
              <a href="https://app.bet-tagger.com/">Entrar</a>
            </Button>
            <Button
              asChild
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow-sm transition-all duration-200"
            >
              <a href="https://app.bet-tagger.com/">
                Começar grátis
                <ArrowRight className="ml-1.5" size={14} />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
