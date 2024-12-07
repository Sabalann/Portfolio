import React, { useEffect } from 'react';
import Card from './Card.jsx';
import EmblaCarousel from './EmbelaCarousel/EmblaCarousel.jsx';
import netflixCloneSS from '../../public/netflixCloneSS.png'

const OPTIONS = {}
export function ProjectsSection() {

const SLIDES = [
    <Card 
            title="Netflix Clone" 
            image={netflixCloneSS}
            liveLink="https://netflixclone.sabalan.info/" 
            repoLink="https://github.com/Sabalann/Netflix-Clone"/>,
      <Card title="Pacman"></Card>

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