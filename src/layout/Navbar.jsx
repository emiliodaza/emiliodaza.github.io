import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "#about",      label: "About"      },
    { href: "#projects",   label: "Projects"   },
    { href: "#experience", label: "Experience" },
    { href: "#contact",    label: "Contact"    },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "glass-strong py-3 border-b border-border/30"
                    : "bg-transparent py-5"
            }`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
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

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <Button size="sm">Contact Me</Button>
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
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
                                <Button className="w-full">Contact Me</Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
