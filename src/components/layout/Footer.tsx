import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <h4 className="font-display text-lg font-medium text-crimson-light">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2 items-center">
              {[
                { href: "/", label: "Home" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/location", label: "Partnerlocation" },
                { href: "/galerie", label: "Galerie" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground/70 hover:text-crimson-light transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <h4 className="font-display text-lg font-medium text-crimson-light">
              Unsere Services
            </h4>
            <nav className="flex flex-col gap-2 items-center">
              {[
                "Hochzeiten",
                "Familienfeste",
                "Firmenfeiern",
                "Messe-Catering",
                "Fingerfood",
              ].map((service) => (
                <span
                  key={service}
                  className="text-primary-foreground/70 text-sm font-body"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <h4 className="font-display text-lg font-medium text-crimson-light">
              Kontakt
            </h4>
            <div className="space-y-3 flex flex-col items-center">
              <a
                href="tel:015174377888"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-crimson-light transition-colors text-sm font-body"
              >
                <Phone className="w-4 h-4 text-crimson-light" />
                0151 74377888
              </a>
              <a
                href="mailto:Buero@domspitzen-event-catering.de"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-crimson-light transition-colors text-sm font-body"
              >
                <Mail className="w-4 h-4 text-crimson-light" />
                Buero@domspitzen-event-catering.de
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70 text-sm font-body">
                <MapPin className="w-4 h-4 text-crimson-light mt-0.5" />
                <span>
                  Valdersweg 87
                  <br />
                  52399 Merzenich
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm font-body">
              © {new Date().getFullYear()} Domspitzen Event-Service. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link
                to="/impressum"
                className="text-primary-foreground/50 hover:text-crimson-light transition-colors text-sm font-body"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-primary-foreground/50 hover:text-crimson-light transition-colors text-sm font-body"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
