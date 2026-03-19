import { Users, Layers, Lightbulb, Rocket } from "lucide-react";

const highlights = [
    {
        icon: Users,
        title: "Team Player",
        description: "Collaborated with hardware and design teams across multiple institutions to bring ambitious visions to life. Interdisciplinary environments bring out my best.",
    },
    {
        icon: Layers,
        title: "Systems Thinker",
        description: "Hands-on experience spanning processor design, firmware, compilers, and ML pipelines. I think in layers and care about what happens at every level of the stack.",
    },
    {
        icon: Lightbulb,
        title: "Problem Solver",
        description: "I approach engineering challenges methodically, breaking down complexity to first principles before reaching for a solution.",
    },
    {
        icon: Rocket,
        title: "Always Learning",
        description: "Whether it is a new framework, language, or paradigm, I am driven by a deep commitment to growth and continuous improvement as an engineer.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Subtle background orb */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section label */}
                <div className="animate-fade-in mb-12">
                    <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-medium">
                        01 · About Me
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                    {/* Left Column */}
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-5 text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
                            <p>
                                CS student at Dartmouth College with a Minor in Statistics, working across software engineering,
                                embedded systems, and machine learning, spanning C++ firmware all the way to production ML pipelines.
                            </p>
                            <p>
                                Co-founder of AbleTo, where I built DotSense (haptic Braille learning) and Touchless (gesture-based OS control).
                                Also an ML Research Intern at Dartmouth's EE Just Program and a published presenter at the Joint Mathematics Meeting in Seattle.
                            </p>
                        </div>

                    </div>

                    {/* Right Column: highlight cards */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl border border-border/30 card-hover animate-fade-in"
                                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/20">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
