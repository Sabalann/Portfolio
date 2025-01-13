// ProjectsSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from './Projects.jsx';
import EmblaCarousel from './EmbelaCarousel/EmblaCarousel.jsx';

const OPTIONS = {
    loop: false,
    slidesToScroll: 1,
};

const ProjectsSection = () => {
    const SLIDES = projects.map((project) => (
        <ProjectCard 
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            technologies={project.technologies}
        />
    ));

    return (
        <div className="projects-section">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
};

export default ProjectsSection;