import TechSection from "../TechSection.jsx";
import picture from "../../assets/mypic.jpg";
import ProjectsSection from "../ProjectsSection.jsx";
import ContactSection from "../ContactSection.jsx";
import fadeInEffect from "../FadeInEffect.jsx";
import AnimatedBackground from "../AnimatedBackground.jsx";
import Intro from '../Intro.jsx';
import NavBar from "../NavBar.jsx";
import { useLanguage } from "../LanguageContext.jsx";
import { translations } from "../../assets/translations.js";

function Home() {

    const { language, toggleLanguage } = useLanguage();
    
    fadeInEffect();

    return (
        <>
            <NavBar/>
            <AnimatedBackground></AnimatedBackground>
            <section id="hero" className="section">
                <Intro> </Intro>
            </section>

            <section id="projects" className="section">
                <ProjectsSection></ProjectsSection>
            </section>

            <section id="about" className="section">
                    { /* <div className="about"> */ }
                        <div className="profile">
                            <img id="profilePic" src={picture} alt="Picture of me"></img>
                            <p>{translations[language].whoAmIDetailed}</p>
                        </div>
                        { /* <TechSection></TechSection> */ }
                    { /* </div> */ }
            </section>

            <section id="contact" className="section">
                <ContactSection></ContactSection>
            </section>
        </>
    )
};

export default Home