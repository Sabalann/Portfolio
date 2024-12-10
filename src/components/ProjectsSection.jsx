// ProjectsSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projects from './Projects.jsx';
import EmblaCarousel from './EmbelaCarousel/EmblaCarousel.jsx'; // Adjust the path if necessary

const OPTIONS = {
    // Define your EmblaCarousel options here
    loop: false,
    slidesToScroll: 1,
    // Add other options as needed
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