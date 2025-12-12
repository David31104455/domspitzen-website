import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Star, Users, Award, Heart, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";
import weddingImage from "@/assets/wedding-catering.jpg";
import fingerfoodImage from "@/assets/fingerfood.jpg";
import corporateImage from "@/assets/corporate-event.jpg";

const services = [
  {
    title: "Hochzeiten",
    description: "Unvergessliche Hochzeitsfeiern mit exquisitem Catering und perfektem Service.",
    image: weddingImage,
  },
  {
    title: "Firmenfeiern",
    description: "Professionelles Catering für Firmenjubiläen, Meetings und Corporate Events.",
    image: corporateImage,
  },
  {
    title: "Fingerfood",
    description: "Kreative Häppchen und elegante Vorspeisen für jeden Anlass.",
    image: fingerfoodImage,
  },
];

const benefits = [
  {
    icon: Star,
    title: "Höchste Qualität",
    description: "Stets frische Zutaten in bester Qualität garantieren kulinarische Genüsse auf höchstem Niveau.",
  },
  {
    icon: Users,
    title: "Perfekter Service",
    description: "Unser gut geschultes und freundliches Fachpersonal sorgt für einen reibungslosen Ablauf.",
  },
  {
    icon: Award,
    title: "Faire Preise",
    description: "Große Auswahl an Buffets für alle Anlässe und jeden Geschmack zu fairen Preisen.",
  },
  {
    icon: Heart,
    title: "Mit Leidenschaft",
    description: "Das perfekte Fest ist unsere Leidenschaft – Ihre Zufriedenheit steht für uns an erster Stelle.",
  },
];

const Index = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textItems = [
    { prefix: "Ihr", text: "perfektes Event" },
    { prefix: "Ihr", text: "kulinarisches Erlebnis" },
    { prefix: "Ihre", text: "Traumhochzeit" },
    { prefix: "Ihr", text: "Firmenjubiläum" },
    { prefix: "Ihr", text: "unvergessliches Fest" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/60 to-foreground/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <p className="text-primary-foreground/80 text-sm md:text-base tracking-[0.3em] uppercase font-body">
              Willkommen beim
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight">
              Domspitzen
              <span className="block text-primary-foreground">Event-Service</span>
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl font-body font-light max-w-xl mx-auto leading-relaxed">
              Besondere Anlässe bedürfen besonderer Aufmerksamkeit. Wir machen Ihr Event unvergesslich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" asChild>
                <Link to="/leistungen">Unsere Leistungen</Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Das perfekte Fest ist unsere <span className="text-primary">Leidenschaft</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Egal ob Hochzeit, Taufe, runder Geburtstag, Gartenparty, Firmenjubiläum,
              Messestandcatering oder Messeparty – sprechen Sie uns an, denn unser Ziel ist es,
              Ihr Event zu einem unvergesslichen Tag zu machen, an den Sie sich noch lange
              mit Freude zurückerinnern werden!
            </p>
            <div className="pt-4">
              <p className="font-display text-xl text-foreground italic">
                "Der Domspitzen Event-Service steht für Perfektion zu jedem Anlass."
              </p>
              <p className="text-primary mt-4 font-body font-medium">
                — André Folgner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-4">
              Was wir bieten
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Unsere Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elevated transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-2xl mb-2">{service.title}</h3>
                  <p className="text-primary-foreground/80 font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/leistungen"
                    className="inline-flex items-center gap-2 text-crimson-light text-sm mt-4 font-body hover:gap-3 transition-all"
                  >
                    Mehr erfahren <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="elegant" asChild>
              <Link to="/leistungen">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-beige-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-body mb-4">
              Warum wir?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Ihre Vorteile
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">
              Bereit für <span key={textIndex} className="inline-block animate-fade-in-down">
                {textItems[textIndex].prefix} <span className="text-crimson-light">{textItems[textIndex].text}</span>
              </span>?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg">
              Lassen Sie sich durch unser zuvorkommendes und freundliches Servicepersonal
              verwöhnen und genießen Sie ihre Feier, als wären Sie ihr eigener Gast.
            </p>
            <div className="pt-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/kontakt">Jetzt Anfrage senden</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
