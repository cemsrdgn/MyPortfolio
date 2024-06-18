import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            <ScrollToTopButton/>
        </>
    );
}
