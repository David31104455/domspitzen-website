import Layout from "@/components/layout/Layout";

const Galerie = () => {
    // Create an array of 52 items for placeholders
    const images = Array.from({ length: 52 }, (_, i) => ({
        id: i + 1,
        alt: `Galerie Foto ${i + 1}`,
        // Using a placeholder service for visual variety, or we could use local images repeatedly.
        // mix of orientation for Masonry effect if we were using a masonry lib, 
        // but a grid is safer for standard placeholder behavior.
        src: `https://placehold.co/400x600/e2e8f0/1e293b?text=Foto+${i + 1}`
    }));

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-32 bg-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground animate-fade-in-up">
                        Galerie
                    </h1>
                    <p className="mt-6 text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
                        Einblicke in unsere Veranstaltungen und Impressionen (Platzhalter).
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary/20 hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-display text-lg tracking-wider">
                                        {image.alt}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Galerie;
