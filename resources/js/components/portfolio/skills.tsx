import { Badge } from '@/components/ui/badge';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            'React',
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Vue.js',
            'HTML/CSS',
        ],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Python', 'Laravel', 'PHP', 'Express', 'REST APIs'],
    },
    {
        title: 'Database',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
    },
    {
        title: 'Tools & DevOps',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Vite'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Skills & Technologies
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        The tools and technologies I use to bring products to
                        life.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="rounded-lg border bg-card p-6"
                        >
                            <h3 className="mb-4 font-semibold">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="font-normal"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
