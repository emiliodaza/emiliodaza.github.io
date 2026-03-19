import { Button } from '@/components/Button';
import { ArrowRight, Download, Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const skills = [
    "Python", "PyTorch", "Scikit-Learn", "SQL",
    "Cloud Firestore", "Firebase Authentication",
    "C & C++", "Java", "JavaScript", "HTML", "CSS",
    "REST APIs", "R-Studio", "Yacc", "Lex",
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* ── Background layers ── */}
            <div className="absolute inset-0">
                <img src="/bg.jpg" alt="background" className="w-full h-full object-cover opacity-40" />
            </div>

            {/* Animated drifting orbs */}
            <div className="absolute top-1/4 left-1/6 w-[520px] h-[520px] rounded-full bg-primary/10 blur-3xl animate-drift-1 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/6 w-[420px] h-[420px] rounded-full bg-primary/8  blur-3xl animate-drift-2 pointer-events-none" />
            <div className="absolute top-2/3  left-1/2  w-[300px] h-[300px] rounded-full bg-highlight/5 blur-3xl animate-drift-3 pointer-events-none" />

            {/* Grid + gradient overlay */}
            <div className="absolute inset-0 bg-grid pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background pointer-events-none" />
            {/* Radial vignette so grid fades at edges */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, var(--color-background) 100%)" }}
            />

            {/* ── Content ── */}
            <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Column */}
                    <div className="space-y-8">

                        {/* Badge */}
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/40 text-sm text-primary font-medium tracking-widest uppercase">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Engineer
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Turning{" "}
                                <span className="text-primary glow-text">ideas</span>
                                <br />
                                into working
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    systems.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
                                Hi, I'm <span className="text-foreground font-medium">Emilio Sebastian Daza Vigo</span>, CS Major and Statistics Minor at Dartmouth College.
                                I specialize in AI and Robotics, building systems that sit at the intersection of intelligent software and physical hardware.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact">
                                <Button size="lg" className="py-4 text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <AnimatedBorderButton className="h-11 px-8 text-sm font-medium">
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground tracking-wide">Follow:</span>
                            {[
                                { icon: Github,    href: "https://github.com/emiliodaza" },
                                { icon: Linkedin,  href: "https://www.linkedin.com/in/emilio-sebastian-daza-vigo-48197b31b/" },
                                { icon: Instagram, href: "https://www.instagram.com/emiliosdv/" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full glass border border-border/40 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Profile Image */}
                    <div className="relative animate-fade-in animation-delay-600">
                        <div className="relative max-w-sm mx-auto animate-float">

                            {/* Ambient glow behind card */}
                            <div className="absolute inset-[-10%] rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-3xl" />

                            {/* Pulse rings */}
                            <div className="absolute inset-[-6%] rounded-3xl border border-primary/15 animate-ring-pulse" />
                            <div className="absolute inset-[-12%] rounded-3xl border border-primary/8 animate-ring-pulse" style={{ animationDelay: "1s" }} />

                            {/* HUD corner brackets */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-primary" />
                            <div className="absolute -top-4 -right-4 w-10 h-10 border-t-2 border-r-2 border-primary" />
                            <div className="absolute -bottom-4 -left-4 w-10 h-10 border-b-2 border-l-2 border-primary" />
                            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-primary" />

                            {/* Corner dot accents */}
                            <div className="absolute -top-4 -left-4 w-2 h-2 bg-primary rounded-full" />
                            <div className="absolute -top-4 -right-4 w-2 h-2 bg-primary rounded-full" />
                            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-primary rounded-full" />
                            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-primary rounded-full" />

                            {/* Main card */}
                            <div className="relative glass rounded-3xl p-2 border border-primary/30 shadow-xl shadow-primary/10">
                                <img
                                    src="/profile.jpeg"
                                    alt="Emilio Sebastian Daza Vigo"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                                />
                                {/* Scan line */}
                                <div className="absolute inset-2 rounded-2xl overflow-hidden pointer-events-none">
                                    <div className="scan-line" />
                                </div>
                                {/* Bottom vignette */}
                                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating info chips */}
                            <div className="absolute right-2 sm:-right-10 top-6 sm:top-12 glass-strong px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-primary/30 text-xs font-medium animate-fade-in animation-delay-800 shadow-xl whitespace-nowrap z-10">
                                <span className="text-primary">CS & Statistics</span>
                                <span className="text-foreground/80"> @ Dartmouth</span>
                            </div>
                            <div className="absolute left-2 sm:-left-10 bottom-16 sm:bottom-24 glass-strong px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-primary/30 text-xs font-medium animate-fade-in animation-delay-800 shadow-xl z-10 max-w-[180px] sm:max-w-none sm:whitespace-nowrap leading-snug">
                                Co-founder + Lead Software Engineer ·{" "}
                                <span className="text-primary">AbleTo</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ── Skills marquee ── */}
                <div className="mt-16 md:mt-28 animate-fade-in animation-delay-600">
                    <p className="text-xs text-muted-foreground mb-6 text-center uppercase tracking-widest">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4 flex items-center gap-3">
                                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                                    <span className="text-base font-medium text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Scroll cue ── */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                </a>
            </div>
        </section>
    );
}
