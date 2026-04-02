import { Head } from '@inertiajs/react';
import About from '@/components/portfolio/about';
import Contact from '@/components/portfolio/contact';
import Experience from '@/components/portfolio/experience';
import Footer from '@/components/portfolio/footer';
import Hero from '@/components/portfolio/hero';
import Navbar from '@/components/portfolio/navbar';
import Projects from '@/components/portfolio/projects';
import Skills from '@/components/portfolio/skills';

export default function Welcome() {
    return (
        <>
            <Head title="Portfolio">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
                <meta
                    name="description"
                    content="Software Engineer portfolio showcasing projects, skills, and experience."
                />
                <style>{`
                    html {
                        scroll-behavior: smooth;
                    }
                `}</style>
            </Head>
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
