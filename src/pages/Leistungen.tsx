import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Cake, Briefcase, Utensils, Snowflake, MapPin, Package, Users, Flower, Camera } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Hochzeiten",
    description: "Ihr schönster Tag verdient die perfekte Begleitung. Von der romantischen Trauung bis zur ausgelassenen Feier – wir sorgen für kulinarische Höhepunkte, die Ihre Gäste begeistern werden.",
  },
  {
    icon: Cake,
    title: "Familienfeste",
    description: "Ob Taufe, Kommunion, Konfirmation oder runder Geburtstag – wir gestalten Ihre Familienfeier zu einem unvergesslichen Erlebnis mit liebevoll zubereiteten Speisen.",
  },
  {
    icon: Briefcase,
    title: "Messe-Catering",
    description: "Professionelles Catering für Ihren Messeauftritt. Beeindrucken Sie Ihre Geschäftspartner und Kunden mit exquisiten Häppchen und erstklassigem Service.",
  },
  {
    icon: Users,
    title: "Firmenfeiern",
    description: "Firmenjubiläen, Betriebsfeste oder Weihnachtsfeiern – wir sorgen dafür, dass Ihre Mitarbeiter und Geschäftspartner einen unvergesslichen Abend erleben.",
  },
  {
    icon: Utensils,
    title: "Fingerfood",
    description: "Kreative Häppchen für jeden Anlass. Unsere Fingerfood-Kreationen vereinen höchste Qualität mit geschmackvoller Präsentation und sind der Hingucker auf jeder Veranstaltung.",
  },
  {
    icon: Snowflake,
    title: "X-Mas Specials",
    description: "Die Weihnachtszeit ist die Zeit der Besinnung und des Genusses. Entdecken Sie unsere festlichen Menüs und weihnachtlichen Buffet-Variationen.",
  },
  {
    icon: MapPin,
    title: "Partnerlocation",
    description: "Sie suchen noch die perfekte Location? Wir helfen Ihnen gerne bei der Suche und stehen Ihnen mit unserer Erfahrung beratend zur Seite.",
  },
  {
    icon: Package,
    title: "Verleih-Service & Künstlervermittlung",
    description: "Von der Tischdecke bis zum DJ – wir vermitteln Ihnen alles, was Sie für Ihre perfekte Veranstaltung benötigen. Ein Rundum-Sorglos-Paket.",
  },
  {
    icon: Flower,
    title: "Dekorationsservice",
    description: "Unser hauseigener Dekorationsservice sorgt für das perfekte Ambiente. Mit individuellen Blumenarrangements und stilvoller Dekoration verleihen wir Ihrem Event eine ganz persönliche Note.",
  },
  {
    icon: Camera,
    title: "Fotobox & Magic Mirror",
    description: "Halten Sie die schönsten Momente fest! Wir bieten Ihnen eine Auswahl an Fotoboxen, Magic Mirror und klassischen Photobooths für unvergessliche Erinnerungsfotos Ihrer Gäste.",
  },
];

const Leistungen = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-crimson-light text-sm tracking-[0.3em] uppercase font-body mb-4 animate-fade-in">
            Unsere Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground animate-fade-in-up">
            Leistungen
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg mt-6 max-w-2xl mx-auto animate-fade-in-up">
            Auf Ihren Wunsch hin bietet Ihnen unser Rundumservice die Möglichkeit,
            von der Planung bis hin zur Durchführung Ihre Veranstaltung komplett in unsere Hände zu legen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-lg p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Individuelle Beratung
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Jede Veranstaltung ist einzigartig. Deshalb nehmen wir uns Zeit für Sie
              und beraten Sie ganz individuell nach Ihren Wünschen und Vorstellungen.
              Gemeinsam erstellen wir ein maßgeschneidertes Konzept für Ihr Event.
            </p>
            <div className="pt-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/kontakt">Kostenlos beraten lassen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leistungen;
