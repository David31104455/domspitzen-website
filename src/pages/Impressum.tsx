import Layout from "@/components/layout/Layout";

const Impressum = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground animate-fade-in-up">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 font-body text-muted-foreground">
              <div className="bg-card p-8 rounded-lg shadow-soft">
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Verantwortlich
                </h2>
                <p className="leading-relaxed">
                  Domspitzen Event-Service<br />
                  André Folgner<br />
                  Valdersweg 87<br />
                  52399 Merzenich
                </p>
                <p className="mt-4 leading-relaxed">
                  <strong className="text-foreground">Telefon:</strong> 0151 74377888<br />
                  <strong className="text-foreground">E-Mail:</strong> Buero@domspitzen-event-catering.de
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  Haftungsausschluss
                </h2>

                <h3 className="font-display text-xl text-foreground mt-6 mb-3">
                  Inhalt des Onlineangebotes
                </h3>
                <p className="leading-relaxed">
                  Der Autor übernimmt keinerlei Gewähr für die Aktualität, Richtigkeit und
                  Vollständigkeit der bereitgestellten Informationen auf unserer Website.
                  Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller
                  oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der
                  dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und
                  unvollständiger Informationen verursacht wurden, sind grundsätzlich
                  ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches
                  oder grob fahrlässiges Verschulden vorliegt.
                </p>

                <h3 className="font-display text-xl text-foreground mt-6 mb-3">
                  Verweise und Links
                </h3>
                <p className="leading-relaxed">
                  Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"),
                  die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine
                  Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem
                  der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und
                  zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                </p>

                <h3 className="font-display text-xl text-foreground mt-6 mb-3">
                  Urheber- und Kennzeichenrecht
                </h3>
                <p className="leading-relaxed">
                  Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
                  verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu
                  beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente,
                  Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
                  Tondokumente, Videosequenzen und Texte zurückzugreifen.
                </p>
              </div>



              <div className="text-sm text-muted-foreground/60 pt-8 border-t border-border">
                <p>
                  © {new Date().getFullYear()} Domspitzen Event-Service. Alle Rechte vorbehalten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
