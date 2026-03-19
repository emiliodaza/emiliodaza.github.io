import { Users, Layers, Lightbulb, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = [Users, Layers, Lightbulb, Rocket];

export const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Subtle background orb */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section label */}
                <div className="animate-fade-in mb-12">
                    <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-medium">
                        {t.about.label}
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                    {/* Left Column */}
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
                            {t.about.headline1}
                            <span className="font-serif italic font-normal text-white">
                                {t.about.headline2}
                            </span>
                        </h2>

                        <div className="space-y-5 text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                        </div>
                    </div>

                    {/* Right Column: highlight cards */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {t.about.highlights.map((item, idx) => {
                            const Icon = icons[idx];
                            return (
                                <div
                                    key={idx}
                                    className="glass p-6 rounded-2xl border border-border/30 card-hover animate-fade-in"
                                    style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                                >
                                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/20">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
