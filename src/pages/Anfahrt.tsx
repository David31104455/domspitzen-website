import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Anfahrt = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-crimson-light text-sm tracking-[0.3em] uppercase font-body mb-4 animate-fade-in">
            So finden Sie uns
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground animate-fade-in-up">
            Anfahrt
          </h1>
        </div>
      </section>

      {/* Map & Info Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden shadow-soft">
              <iframe
                src="https://maps.google.com/maps?q=Zum+Klosterhof+1,+53721+Siegburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Klosterhof Seligenthal"
                className="w-full h-[450px]"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                  Hier finden Sie uns
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground font-body">
                        Klosterhof Seligenthal<br />
                        Zum Klosterhof 1<br />
                        53721 Siegburg
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">Telefon</h3>
                      <a
                        href="tel:015174377888"
                        className="text-muted-foreground font-body hover:text-primary transition-colors"
                      >
                        0151 74377888
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">E-Mail</h3>
                      <a
                        href="mailto:Buero@domspitzen-event-catering.de"
                        className="text-muted-foreground font-body hover:text-primary transition-colors"
                      >
                        Buero@domspitzen-event-catering.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="gold" size="lg" asChild>
                  <a
                    href="https://www.google.com/maps/dir//Zum+Klosterhof+1,+53721+Siegburg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Route planen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Anfahrt;
