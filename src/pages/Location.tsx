import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Check } from "lucide-react";

const Location = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/location-1.jpg"
                        alt="Klosterhof Seligenthal Außenansicht"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-up">
                    <span className="inline-block mb-4 text-xl md:text-2xl tracking-[0.2em] uppercase text-crimson-light font-medium">
                        Partnerlocation
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Klosterhof Seligenthal
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-body">
                        Historisches Ambiente trifft auf moderne Eleganz – der perfekte Ort für Ihre unvergessliche Feier.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-right">
                            <h2 className="font-display text-3xl md:text-4xl text-foreground">
                                Feiern im Grünen
                            </h2>
                            <p className="text-muted-foreground leading-relaxed font-body">
                                Der Klosterhof Seligenthal bietet eine einzigartige Kulisse für Hochzeiten,
                                Firmenfeiern und private Feste. Umgeben von malerischer Natur verbindet
                                diese Location historischen Charme mit erstklassigem Komfort.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Historisches Fachwerk-Ambiente",
                                    "Großzügige Außenbereiche und Terrassen",
                                    "Kirche fußläufig erreichbar",
                                    "Bestuhlung und Dekoration nach Wunsch",
                                    "Barrierefreier Zugang",
                                    "Ausreichend Parkmöglichkeiten"
                                ].map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-foreground/80 font-body">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-primary" />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <Button variant="elegant" asChild>
                                    <Link to="/kontakt">Termin anfragen</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-left">
                            <img
                                src="/location-3.jpg"
                                alt="Klosterhof Seligenthal Eingangsbereich"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">Impressionen</span>
                        <h2 className="font-display text-3xl md:text-4xl mt-2 text-foreground">Die Räumlichkeiten</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                            <img
                                src="/location-1.jpg"
                                alt="Außenbereich"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-display text-xl">Außenbereich</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                            <img
                                src="/location-2.jpg"
                                alt="Innenhof"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-display text-xl">Innenhof</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                            <img
                                src="/location-3.jpg"
                                alt="Eingang"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-display text-xl">Eingang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">Hier finden Sie uns</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-body">
                        <strong>Klosterhof Seligenthal</strong><br />
                        Zum Klosterhof 1<br />
                        53721 Siegburg, Deutschland<br />
                        <br />
                        Vereinbaren Sie gerne einen Besichtigungstermin.
                    </p>
                    <div className="w-full h-[400px] bg-secondary rounded-lg overflow-hidden shadow-sm">
                        <iframe
                            src="https://maps.google.com/maps?q=Zum+Klosterhof+1,+53721+Siegburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Location;
