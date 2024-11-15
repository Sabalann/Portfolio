import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import {NavBar} from "./components/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar></NavBar>
        <div className="title">
            <h1>Welcome To Sab's Portfolio</h1>
        </div>
        <div className="About">
            <h2>About Me</h2>
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
