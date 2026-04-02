import About from '../resources/js/components/portfolio/about';
import Contact from '../resources/js/components/portfolio/contact';
import Experience from '../resources/js/components/portfolio/experience';
import Footer from '../resources/js/components/portfolio/footer';
import Hero from '../resources/js/components/portfolio/hero';
import Navbar from '../resources/js/components/portfolio/navbar';
import Projects from '../resources/js/components/portfolio/projects';
import Skills from '../resources/js/components/portfolio/skills';

export default function App() {
    return (
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
    );
}
