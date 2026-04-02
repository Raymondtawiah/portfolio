import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const projects = [
    {
        title: 'E-Commerce Platform',
        description:
            'A full-featured online store with cart management, payment processing, and admin dashboard.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Task Management App',
        description:
            'A collaborative project management tool with real-time updates, drag-and-drop, and team workspaces.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'API Gateway Service',
        description:
            'A microservice gateway handling authentication, rate limiting, and request routing for distributed systems.',
        tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Analytics Dashboard',
        description:
            'Interactive data visualization dashboard with real-time metrics, custom reports, and export functionality.',
        tags: ['Vue.js', 'D3.js', 'Laravel', 'MySQL'],
        github: 'https://github.com',
        live: 'https://example.com',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-muted/30 px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        A selection of projects that showcase my skills and
                        experience.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="flex flex-col transition-shadow hover:shadow-md"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    {project.title}
                                    <div className="flex gap-2">
                                        {/* <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground transition-colors hover:text-foreground"
                                            aria-label={`${project.title} GitHub`}
                                        >
                                            <Github size={18} />
                                        </a> */}
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground transition-colors hover:text-foreground"
                                            aria-label={`${project.title} live demo`}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    {/* <Button variant="outline" asChild>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-2" size={18} />
                            View All on GitHub
                        </a>
                    </Button> */}
                </div>
            </div>
        </section>
    );
}
