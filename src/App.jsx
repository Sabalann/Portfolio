import './App.css'
import Card from './components/Card'
import {NavBar} from "./components/NavBar.jsx";
import {TechSection} from "./components/TechSection.jsx";
import picture from "/src/assets/mypic.jpg";
import {ProjectsSection} from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

function App() {

  return (
    <>
        <NavBar></NavBar>
        <section id="hero">
            <div className="title section">
                <h1>Hi, I'm Sabalan <br></br> I'm a front-end developer</h1>
                <a href="#projects"> <button>See More...</button></a>
            </div>
        </section>


        <section id="projects">
            <ProjectsSection></ProjectsSection>
        </section>

        <section id="about">
                <div className="about">
                    <div className="profile">
                        <img id="profilePic" src={picture} alt="Picture of me"></img>
                        <p>Hi, I’m Sabalan, a front-end developer with an insatiable curiosity and a talent for mastering new skills. I thrive on learning—whether it’s learning new technologies, new languages or new design patterns.
                            What sets me apart isn’t just my technical skills but my relentless drive to understand, improve, and grow.</p>
                    </div>
                    <TechSection></TechSection>
                </div>
        </section>

        <section id="contact">
            <ContactSection></ContactSection>
        </section>
    </>
  )
}

export default App
