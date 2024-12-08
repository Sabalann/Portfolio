import React, { useEffect } from 'react';
import Card from './Card.jsx';
import EmblaCarousel from './EmbelaCarousel/EmblaCarousel.jsx';
import netflixCloneSS from '../../public/projectScreenshots/netflixCloneSS.jpg'
import pacmanSS from '../../public/projectScreenshots/pacmanSS.jpg'
import programmingLearningSS from '../../public/projectScreenshots/programmingLearningSS.jpg'

const OPTIONS = {}
export function ProjectsSection() {

const SLIDES = [
    <Card 
            title="Netflix Clone" 
            image={netflixCloneSS}
            liveLink="https://netflixclone.sabalan.info/" 
            repoLink="https://github.com/Sabalann/Netflix-Clone"/>,
      <Card 
            title="Pacman"
            image={pacmanSS}
            repoLink="https://github.com/Sabalann/PacMan-Python"/>,
      <Card
            title="Learning Programming App"
            image={programmingLearningSS}
            repoLink="https://github.com/Sabalann/Programming-Learning-Windows-App"/>,
]

  return (
    <>
        <div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    </>
  )
}

export default ProjectsSection;