import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about",      label: t.nav.about      },
        { href: "#projects",   label: t.nav.projects   },
        { href: "#experience", label: t.nav.experience },
        { href: "#contact",    label: t.nav.contact    },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "glass-strong py-3 border-b border-border/30"
                    : "bg-transparent py-5"
            }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-1.5 group">
                    <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        ESDV
                    </span>
                    <span className="text-primary text-2xl leading-none">.</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center">
                    <div className="glass rounded-full px-2 py-1.5 flex items-center gap-0.5 border border-border/40">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface/80 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop right: language toggle + CTA */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Language toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 glass rounded-full border border-border/40 overflow-hidden text-xs font-semibold tracking-widest"
                        aria-label="Toggle language"
                    >
                        <span className={`px-3 py-1.5 transition-all duration-200 ${language === "en" ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"}`}>
                            EN
                        </span>
                        <span className={`px-3 py-1.5 transition-all duration-200 ${language === "es" ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"}`}>
                            ES
                        </span>
                    </button>

                    <a href="#contact">
                        <Button size="sm">{t.nav.contactMe}</Button>
                    </a>
                </div>

                {/* Mobile: language toggle + hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center glass rounded-full border border-border/40 overflow-hidden text-xs font-semibold tracking-widest"
                        aria-label="Toggle language"
                    >
                        <span className={`px-2.5 py-1 transition-all duration-200 ${language === "en" ? "bg-primary text-white" : "text-muted-foreground"}`}>
                            EN
                        </span>
                        <span className={`px-2.5 py-1 transition-all duration-200 ${language === "es" ? "bg-primary text-white" : "text-muted-foreground"}`}>
                            ES
                        </span>
                    </button>
                    <button
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong border-t border-border/30 animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-surface/60 rounded-xl transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-2">
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full">{t.nav.contactMe}</Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
