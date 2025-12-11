import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-crimson-light text-sm tracking-[0.3em] uppercase font-body mb-4 animate-fade-in">
            Wir freuen uns auf Sie
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground animate-fade-in-up">
            Kontakt
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg mt-6 max-w-2xl mx-auto animate-fade-in-up">
            Haben Sie Fragen, Wünsche oder Anregungen? Bitte nehmen Sie Kontakt mit uns auf,
            wir helfen Ihnen gerne weiter!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                Kontaktformular
              </h2>
              <iframe
                width="100%"
                height="832px"
                src="https://enquiry.bridebook.com/de?publicId=dewXowldyX&fields=email&fields=partnerName&fields=phone&fields=partnerName2&fields=guestsInitialTarget&fields=weddingDate&fields=message"
                style={{ border: "none" }}
              />
              <div className="mt-8 flex justify-center">
                <a href="https://bridebook.com/de/wedding-venues/klosterhof-seligenthal-siegburg-k-ln-dewXowldyX" target="_blank" className="hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://image.bridebook.com/assets/cms/badges/Featured_on_Badge_light_de.png"
                    alt="Ihr Bridebook Abzeichen"
                    width="200"
                  />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                Hier finden Sie uns
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground font-body">
                      Domspitzen Event-Service<br />
                      Valdersweg 87<br />
                      52399 Merzenich
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
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

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">E-Mail</h3>
                    <a
                      href="mailto:Buero@domspitzen-event-catering.de"
                      className="text-muted-foreground font-body hover:text-primary transition-colors break-all"
                    >
                      Buero@domspitzen-event-catering.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">Erreichbarkeit</h3>
                    <p className="text-muted-foreground font-body">
                      Wir sind jederzeit für Sie erreichbar.<br />
                      Rufen Sie uns an oder schreiben Sie uns!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">Social Media</h3>
                    <div className="flex flex-col gap-2 mt-1">
                      <a
                        href="https://www.instagram.com/domspitzen_event_service/?hl=de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground font-body hover:text-primary transition-colors"
                      >
                        @domspitzen_event_service
                      </a>
                      <a
                        href="https://www.instagram.com/klosterhof_seligenthal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground font-body hover:text-primary transition-colors"
                      >
                        @klosterhof_seligenthal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
