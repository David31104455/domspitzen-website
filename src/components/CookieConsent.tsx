import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";

interface CookiePreferences {
    essential: boolean;
    functional: boolean;
    analytics: boolean;
}

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        essential: true,
        functional: false,
        analytics: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const savePreferences = (allAccepted: boolean = false) => {
        const prefs = allAccepted
            ? { essential: true, functional: true, analytics: true }
            : preferences;

        localStorage.setItem("cookie-consent", JSON.stringify(prefs));
        setIsVisible(false);
    };

    const acceptAll = () => {
        savePreferences(true);
    };

    const acceptEssentialOnly = () => {
        setPreferences({ essential: true, functional: false, analytics: false });
        localStorage.setItem("cookie-consent", JSON.stringify({ essential: true, functional: false, analytics: false }));
        setIsVisible(false);
    };

    const saveCustomPreferences = () => {
        savePreferences(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 md:p-6 bg-black/20 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-2xl animate-fade-in-up">
                <div className="bg-card border border-border shadow-2xl rounded-2xl overflow-hidden">

                    {/* Header with accent bar */}
                    <div className="h-1 bg-gradient-to-r from-primary via-crimson to-primary" />

                    {/* Main Content */}
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col gap-5">

                            {/* Title with icon */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-display text-xl font-semibold text-foreground">
                                        Ihre Privatsphäre ist uns wichtig
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
                                        Wählen Sie, welche Kategorien Sie zulassen möchten. Mehr dazu in unserer{" "}
                                        <Link
                                            to="/datenschutz"
                                            className="text-primary hover:text-primary/80 font-medium transition-colors"
                                        >
                                            Datenschutzerklärung
                                        </Link>.
                                    </p>
                                </div>
                            </div>

                            {/* Toggle Details Button */}
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors self-start ml-16"
                            >
                                {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                {showDetails ? "Weniger anzeigen" : "Einstellungen anpassen"}
                            </button>

                            {/* Cookie Categories */}
                            {showDetails && (
                                <div className="space-y-3 ml-16 animate-fade-in">

                                    {/* Essential Cookies */}
                                    <div className="flex items-center justify-between gap-4 p-4 bg-muted/50 rounded-xl">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h4 className="font-medium text-foreground text-sm">Essenzielle Cookies</h4>
                                                <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                                                    Erforderlich
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Für Grundfunktionen wie Navigation und Menü-Steuerung.
                                            </p>
                                        </div>
                                        <div className="shrink-0">
                                            <div className="w-11 h-6 bg-primary rounded-full relative cursor-not-allowed">
                                                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Functional Cookies */}
                                    <div className="flex items-center justify-between gap-4 p-4 bg-muted/30 rounded-xl border border-border/50">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-foreground text-sm">Funktionale Cookies</h4>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Speichern Ihre Präferenzen und Einstellungen.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setPreferences(p => ({ ...p, functional: !p.functional }))}
                                            className={`shrink-0 w-11 h-6 rounded-full relative transition-all duration-200 ${preferences.functional ? "bg-primary" : "bg-gray-300"
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-200 ${preferences.functional ? "right-0.5" : "left-0.5"
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Analytics Cookies */}
                                    <div className="flex items-center justify-between gap-4 p-4 bg-muted/30 rounded-xl border border-border/50">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-foreground text-sm">Analyse-Cookies</h4>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                Helfen uns, die Website zu verbessern.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                                            className={`shrink-0 w-11 h-6 rounded-full relative transition-all duration-200 ${preferences.analytics ? "bg-primary" : "bg-gray-300"
                                                }`}
                                        >
                                            <div
                                                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-200 ${preferences.analytics ? "right-0.5" : "left-0.5"
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 pt-3 ml-16">
                                <Button
                                    variant="ghost"
                                    onClick={acceptEssentialOnly}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Nur Essenzielle
                                </Button>

                                {showDetails && (
                                    <Button
                                        variant="outline"
                                        onClick={saveCustomPreferences}
                                    >
                                        Auswahl speichern
                                    </Button>
                                )}

                                <Button
                                    variant="default"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 sm:ml-auto px-6"
                                    onClick={acceptAll}
                                >
                                    Alle akzeptieren
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
