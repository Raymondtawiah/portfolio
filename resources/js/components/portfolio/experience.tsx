import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'Senior Software Engineer',
        company: 'Tech Company',
        period: '2023 - Present',
        description:
            'Led development of microservices architecture serving millions of users. Mentored junior developers and established coding standards.',
        tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    },
    {
        role: 'Software Engineer',
        company: 'Startup Inc.',
        period: '2021 - 2023',
        description:
            'Built and shipped features for a SaaS platform. Improved application performance by 40% through optimization.',
        tags: ['Vue.js', 'Python', 'Docker', 'Redis'],
    },
    {
        role: 'Junior Developer',
        company: 'Digital Agency',
        period: '2019 - 2021',
        description:
            'Developed responsive web applications for clients across various industries. Collaborated with designers to implement pixel-perfect UIs.',
        tags: ['JavaScript', 'PHP', 'MySQL', 'CSS'],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Experience
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        My professional journey and the companies I've worked
                        with.
                    </p>
                </div>

                <div className="relative border-l pl-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative mb-12 last:mb-0">
                            <div className="absolute -left-[2.55rem] flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                                <Briefcase size={18} className="text-primary" />
                            </div>
                            <div className="rounded-lg border bg-card p-6">
                                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="font-semibold">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="mb-3 text-sm font-medium text-primary">
                                    {exp.company}
                                </p>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
