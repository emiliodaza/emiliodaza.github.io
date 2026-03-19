import { useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin, Instagram, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const FORMSPREE_ID = "xojkrqlw";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");
    const { t } = useLanguage();

    const socials = [
        { icon: Github,    href: "https://github.com/emiliodaza",                                                     label: "GitHub"   },
        { icon: Linkedin,  href: "https://www.linkedin.com/in/emilio-sebastian-daza-vigo-48197b31b/",                 label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/emiliosdv/",                                             label: "Instagram"},
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
            if (res.ok) {
                setStatus("sent");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const inputClass = "w-full bg-surface/50 border border-border/40 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200";

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, transparent 30%, var(--color-background) 100%)" }}
            />
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section label */}
                <div className="text-center animate-fade-in mb-12">
                    <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-medium">
                        {t.contact.label}
                    </span>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
                        {t.contact.headline1}{" "}
                        <span className="font-serif italic font-normal text-white">{t.contact.headline2}</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-lg mx-auto leading-relaxed">
                        {t.contact.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Left: Info */}
                    <div className="space-y-5 animate-fade-in animation-delay-200">

                        {/* Contact details */}
                        <div className="glass rounded-2xl p-5 sm:p-8 border border-border/30 space-y-6">
                            <h3 className="text-xs tracking-[0.25em] uppercase text-primary/70 font-medium">
                                {t.contact.detailsTitle}
                            </h3>
                            <div className="space-y-5">
                                {[
                                    { icon: Mail,   label: t.contact.emailLabel,    value: "emilio.sebastian.daza.vigo.27@dartmouth.edu" },
                                    { icon: MapPin, label: t.contact.locationLabel, value: "Hanover, NH" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-primary/8 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                                            <item.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">{item.label}</p>
                                            <p className="text-sm text-foreground break-all">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-5 border-t border-border/25">
                                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{t.contact.socialsLabel}</p>
                                <div className="flex gap-3">
                                    {socials.map((s, i) => (
                                        <a
                                            key={i}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={s.label}
                                            className="p-3 rounded-xl border border-border/40 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 text-muted-foreground"
                                        >
                                            <s.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Availability card */}
                        <div className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/40" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/40" />
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/4 rounded-full blur-2xl pointer-events-none" />
                            <div className="flex items-center gap-3 mb-3 relative">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs text-primary uppercase tracking-widest font-semibold">
                                    {t.contact.availabilityTitle}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed relative">
                                {t.contact.availabilityText}
                            </p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="glass rounded-2xl p-5 sm:p-8 border border-border/30 space-y-5 animate-fade-in animation-delay-300 relative overflow-hidden"
                    >
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/25" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/25" />

                        <h3 className="text-xs tracking-[0.25em] uppercase text-primary/70 font-medium mb-6">
                            {t.contact.formTitle}
                        </h3>

                        <div className="space-y-1.5">
                            <label className="text-xs text-muted-foreground uppercase tracking-widest">{t.contact.nameLabel}</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                placeholder={t.contact.namePlaceholder}
                                className={inputClass}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs text-muted-foreground uppercase tracking-widest">{t.contact.emailInputLabel}</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                placeholder={t.contact.emailPlaceholder}
                                className={inputClass}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs text-muted-foreground uppercase tracking-widest">{t.contact.messageLabel}</label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                placeholder={t.contact.messagePlaceholder}
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5"
                        >
                            {status === "sent"    && <><CheckCircle className="w-4 h-4" /> {t.contact.sent}</>}
                            {status === "error"   && <><Send className="w-4 h-4" /> {t.contact.error}</>}
                            {status === "sending" && <>{t.contact.sending}</>}
                            {status === "idle"    && <><Send className="w-4 h-4" /> {t.contact.send}</>}
                        </button>
                    </form>
                </div>

                {/* Footer note */}
                <p className="text-center text-xs text-muted-foreground/50 mt-16 tracking-wide">
                    {t.contact.footer}
                </p>
            </div>
        </section>
    );
};
