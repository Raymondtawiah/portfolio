import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="flex min-h-screen items-center justify-center px-6 pt-24 pb-12">
            <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-16">
                {/* Text Content */}
                <div className="text-center lg:max-w-xl lg:text-left">
                    {/* <div className="mb-6 inline-flex items-center rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
                        <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                        Available for work
                    </div> */}

                    <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Hi, I'm{' '}
                        <span className="text-primary">Raymond K. Tawiah</span>
                    </h1>

                    <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:mx-0">
                        Software Engineer passionate about building exceptional
                        digital experiences. I specialize in full-stack
                        development, creating robust and scalable applications.
                    </p>

                    <div className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                        <Button asChild size="lg">
                            <a href="#projects">View My Work</a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="#contact">Get In Touch</a>
                        </Button>
                    </div>

                    <div className="mb-6 flex items-center justify-center gap-6 lg:justify-start">
                        {/* <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a> */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href="mailto:raymondtawiah23@gmail.com"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="Email"
                        >
                            <Mail size={22} />
                        </a>
                    </div>

                    <a
                        href="#about"
                        className="inline-flex animate-bounce items-center text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="Scroll down"
                    >
                        <ArrowDown size={24} />
                    </a>
                </div>

                {/* Image */}
                <div className="flex-shrink-0 lg:w-1/2">
                    <img
                        src="/images/programming.jpg"
                        alt="Programming"
                        className="mx-auto w-full max-w-md rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
