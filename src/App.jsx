import './index.css';
import {NavBar} from "./components/NavBar.jsx";
import {TechSection} from "./components/TechSection.jsx";
import picture from "/src/assets/mypic.jpg";
import {ProjectsSection} from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import fadeInEffect from "./components/FadeInEffect.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Intro from './components/Intro.jsx';

function App() {
    fadeInEffect();
  return (
    <>
        <NavBar></NavBar>

        <AnimatedBackground></AnimatedBackground>
        <section id="hero" className="section">
            <Intro> </Intro>
        </section>

        <section id="projects" className="section">
            <ProjectsSection></ProjectsSection>
        </section>

        <section id="about" className="section">
                <div className="about">
                    <div className="profile">
                        <img id="profilePic" src={picture} alt="Picture of me"></img>
                        <p>Hi, I’m Sabalan, a front-end developer with an insatiable curiosity and a talent for mastering new skills. I thrive on learning—whether it’s learning new technologies, new languages or new design patterns.
                            What sets me apart isn’t just my technical skills but my relentless drive to understand, improve, and grow.</p>
                    </div>
                    <TechSection></TechSection>
                </div>
        </section>

        <section id="contact" className="section">
            <ContactSection></ContactSection>
        </section>
    </>
  )
}

export default App
