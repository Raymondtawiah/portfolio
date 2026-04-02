import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
    const highlights = [
        {
            icon: Code2,
            title: 'Clean Code',
            description:
                'I write maintainable, well-tested code following best practices and design patterns.',
        },
        {
            icon: Rocket,
            title: 'Performance',
            description:
                'I build fast, optimized applications that deliver great user experiences.',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description:
                'I thrive in team environments and communicate effectively with stakeholders.',
        },
    ];

    return (
        <section id="about" className="bg-muted/30 px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        About Me
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        A brief introduction to who I am and what drives me as a
                        developer.
                    </p>
                </div>

                <div className="mb-16 grid gap-12 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                            I'm a software engineer with a passion for creating
                            impactful software solutions. With experience across
                            the full stack, I enjoy tackling complex problems
                            and turning ideas into reality.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                            When I'm not coding, you can find me exploring new
                            technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            I believe in continuous learning and staying current
                            with industry trends to deliver modern, efficient
                            solutions.
                        </p>
                    </div>
                    <div className="grid gap-6">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="flex gap-4 rounded-lg border bg-card p-6"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <item.icon
                                        className="text-primary"
                                        size={24}
                                    />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
