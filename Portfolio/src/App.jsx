import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import {NavBar} from "./components/NavBar.jsx";
import {TechSection} from "./components/TechSection.jsx";

function App() {

  return (
    <>
        <NavBar></NavBar>
        <div className="title">
            <h1>Welcome To Sab's Portfolio</h1>
        </div>
        <div className="about">
            <h2>About Me</h2>
            <img id="profilePic" src="/src/assets/1704141184860.jpg" alt="Picture of me"></img>
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
