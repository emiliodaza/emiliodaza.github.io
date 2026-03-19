import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useLanguage } from "../context/LanguageContext";

const projectsMeta = [
    {
        number: "01",
        image: "/projects/DotSense.jpeg",
        tags: ["Python", "Speech Recognition", "Arduino", "C++", "Microcontroller"],
        github: "https://github.com/emiliodaza/braille-learning-system",
    },
    {
        number: "02",
        image: "/projects/medical_AI.jpeg",
        tags: ["Python", "Computer Vision", "PyTorch", "Machine Learning", "Data Processing"],
        github: "https://www.researchgate.net/publication/383692584_Machine_Learning_Approaches_for_Precision_Medicine",
    },
];

export const Projects = () => {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/4 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section label */}
                <div className="animate-fade-in mb-12">
                    <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-medium">
                        {t.projects.label}
                    </span>
                </div>

                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
                        {t.projects.headline1}
                        <span className="font-serif italic font-normal text-white">{t.projects.headline2}</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
                        {t.projects.description}
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {t.projects.items.map((project, idx) => {
                        const meta = projectsMeta[idx];
                        return (
                            <div
                                key={idx}
                                className="group glass rounded-2xl overflow-hidden border border-border/30 card-hover animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={meta.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                                    {/* Project number */}
                                    <div className="absolute top-4 left-4 text-xs font-mono text-primary/70 tracking-widest">
                                        {meta.number}
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <a
                                            href={meta.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass border border-white/20 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {meta.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={meta.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="md:hidden inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors pt-1"
                                    >
                                        <Github className="w-4 h-4" />
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-14 animate-fade-in animation-delay-500">
                    <a href="https://github.com/emiliodaza" target="_blank" rel="noopener noreferrer">
                        <AnimatedBorderButton>
                            {t.projects.viewAll}
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};
