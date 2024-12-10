// ProjectDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-details">
      <img src={project.image} alt={`${project.title} Screenshot`} />
      <div className='flex flex-row basis-full'>
        <div>
          <h1>{project.title}</h1>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
        <div>
          <h3>Technologies Used:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
        </div>
      </div>
      <div className="project-links">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;