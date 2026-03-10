import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useSiteLanguage } from "@/lib/language";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isEn, language, setLanguage } = useSiteLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: isEn ? "How it works" : "Como funciona", href: "#funcionalidades" },
    { label: isEn ? "Pricing" : "Preços", href: "#precos" },
    { label: "FAQ", href: "#faq" },
  ];

  const languageLabel = isEn ? "Language" : "Idioma";

  const languageSelector = (
    <div className="inline-flex items-center rounded-lg border border-border bg-background/60 p-0.5">
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
          language === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Mudar para portugues"
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <img src={logo} alt="Bet Tagger" className="h-8 w-8" />
          Bet{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tagger
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{languageLabel}</span>
            {languageSelector}
          </div>
          <Button asChild variant="outline" size="sm" className="border-border text-foreground hover:bg-surface-hover">
            <a href="https://app.bet-tagger.com/">{isEn ? "Sign in" : "Entrar"}</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={isEn ? "Menu" : "Menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">{languageLabel}</span>
            {languageSelector}
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="outline" size="sm" className="mt-2 w-full border-border">
            <a href="https://app.bet-tagger.com/">{isEn ? "Sign in" : "Entrar"}</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
