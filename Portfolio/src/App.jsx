import './App.css'
import Card from './components/Card'
import {NavBar} from "./components/NavBar.jsx";
import {TechSection} from "./components/TechSection.jsx";

function App() {

  return (
    <>
        <NavBar></NavBar>
        <div className="title container">
            <h1>Hi, I'm Sabalan, <br></br> I'm a front-end developer</h1>
        </div>
        <div className="about container">
            <div className="profile">
                <img id="profilePic" src="/src/assets/mypic.jpg" alt="Picture of me"></img>
                <p>Hi, I’m Sabalan, a front-end developer with an insatiable curiosity and a talent for mastering new skills. I thrive on learning—whether it’s learning new technologies, new languages or new design patterns.
                    What sets me apart isn’t just my technical skills but my relentless drive to understand, improve, and grow. Every challenge is an opportunity to learn, and I dive headfirst into problem-solving with the excitement of discovering something new.</p>
            </div>
            <TechSection></TechSection>
        </div>
        <div className="cardsContainer">
            <Card title="Netflix Clone" description="For my first project with React, I decided to pick a website to clone. At this point I had read a lot of the React documentation and watched tutorials, I wanted to see how far I could get without having to design anything myself."></Card>
            <Card title="project" description="coming soon..."></Card>
            <Card title="project" description="coming soon..."></Card>
            <Card title="project" description="coming soon..."></Card>
        </div>
    </>
  )
}

export default App
