import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Toast from '@/components/portfolio/toast';
import { useState, type FormEvent } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 5000);
    }

    return (
        <section id="contact" className="bg-muted/30 px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Have a project in mind or want to chat? Feel free to
                        reach out.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <p className="mb-8 text-lg text-muted-foreground">
                            I'm always open to discussing new projects, creative
                            ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Mail className="text-primary" size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:raymondtawiah23@gmail.com"
                                        className="font-medium transition-colors hover:text-primary"
                                    >
                                        raymondtawiah23@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <MapPin
                                        className="text-primary"
                                        size={22}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Location
                                    </p>
                                    <p className="font-medium">
                                        Adenta, Greater Accra
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Phone className="text-primary" size={22} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+233208649694"
                                        className="font-medium transition-colors hover:text-primary"
                                    >
                                        +233 20 864 9694
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-lg border bg-card p-8"
                    >
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            <Send className="mr-2" size={18} />
                            Send Message
                        </Button>
                    </form>
                </div>

                {submitted && (
                    <Toast
                        message="Message sent! We'll get back to you soon."
                        onClose={() => setSubmitted(false)}
                    />
                )}
            </div>
        </section>
    );
}
