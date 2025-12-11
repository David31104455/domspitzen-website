import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/location", label: "Partnerlocation" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/anfahrt", label: "Anfahrt" },
  { href: "/impressum", label: "Impressum" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <img
              src="/logo.png"
              alt="Domspitzen Event-Service"
              className="h-24 w-auto object-contain py-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-body tracking-wide transition-colors duration-300 hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:015174377888"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-body">0151 74377888</span>
            </a>
            <Button variant="elegant" asChild>
              <Link to="/kontakt">Anfrage senden</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-body tracking-wide transition-colors duration-300 hover:bg-secondary",
                    location.pathname === link.href
                      ? "text-primary bg-secondary"
                      : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 pb-2">
                <Button variant="gold" className="w-full" asChild>
                  <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
                    Anfrage senden
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
