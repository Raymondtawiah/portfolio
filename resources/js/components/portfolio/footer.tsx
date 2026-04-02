import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t px-6 py-12">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div>
                        <p className="text-lg font-semibold">Raymond K. Tawiah</p>
                        <p className="text-sm text-muted-foreground">
                            Software Engineer
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* <a
                            href="https://github.com/raymondtawiah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a> */}
                        <a
                            href="https://www.linkedin.com/feed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:raymondtawiah23@gmail.com"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <span>&copy; {year} Raymond K. Tawiah. Built with</span>
                    <Heart
                        size={14}
                        className="text-red-500"
                        fill="currentColor"
                    />
                    <span>using Laravel & React.</span>
                </div>
            </div>
        </footer>
    );
}
