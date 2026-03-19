import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ExperienceCard = ({ exp, isActive, currentLabel }) => (
    <div
        className={`glass rounded-2xl p-6 border transition-all duration-300 ${
            isActive
                ? "border-primary/40 shadow-glow -translate-y-1"
                : "border-border/30"
        }`}
    >
        <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs text-muted-foreground font-mono tracking-wide">{exp.period}</span>
            {exp.current && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 font-medium">
                    {currentLabel}
                </span>
            )}
        </div>
        <h3
            className={`text-base font-semibold mb-1 transition-colors duration-300 leading-snug ${
                isActive ? "text-primary" : "text-foreground"
            }`}
        >
            {exp.role}
        </h3>
        <p className="text-primary/80 text-sm mb-4 font-medium">{exp.company}</p>
        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
                <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
                >
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

export const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section label */}
                <div className="animate-fade-in mb-12">
                    <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-medium">
                        {t.experience.label}
                    </span>
                </div>

                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-foreground">
                        {t.experience.headline1}{" "}
                        <span className="font-serif italic font-normal text-white">
                            {t.experience.headline2}
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        {t.experience.description}
                    </p>
                </div>

                {/* Mobile: left-side timeline */}
                <div className="md:hidden mt-10 border-l border-primary/25 pl-6 space-y-8">
                    {t.experience.items.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[25px] top-6 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                            <ExperienceCard exp={exp} isActive={false} currentLabel={t.experience.current} />
                        </div>
                    ))}
                </div>

                {/* Desktop: center alternating timeline */}
                <div className="hidden md:block relative mt-16">
                    {/* Vertical center line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

                    <div className="space-y-12">
                        {t.experience.items.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="relative flex items-start"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    {/* Left side */}
                                    <div className="w-1/2 pr-14">
                                        {isLeft && <ExperienceCard exp={exp} isActive={isActive} currentLabel={t.experience.current} />}
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-1/2 top-7 -translate-x-1/2 z-10">
                                        <div
                                            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ring-4 ring-background ${
                                                isActive
                                                    ? "bg-primary border-primary scale-150 shadow-glow"
                                                    : "bg-background border-primary/50"
                                            }`}
                                        />
                                    </div>

                                    {/* Right side */}
                                    <div className="w-1/2 pl-14">
                                        {!isLeft && <ExperienceCard exp={exp} isActive={isActive} currentLabel={t.experience.current} />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
