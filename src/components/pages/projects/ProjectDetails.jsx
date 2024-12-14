// ProjectDetails.jsx
import React from 'react';
import './projects.css';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-details">
      <div className='details-screenshot'> 
        <img src={project.image} alt={`${project.title} Screenshot`}/>
      </div>
      <div className='details-details flex flex-row basis-full text-3xl p-6'>
        <div className='details-title'>
          <h1>{project.title}</h1>
          <div className="details-links ">
            {project.liveLink && (
              <a href={project.liveLink} className='block' target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.repoLink && (
              <a href={project.repoLink} className='block' target="_blank" rel="noopener noreferrer">
                Repository
              </a>
            )}
          <div>
          <h3 className='details-techs font-bold'>Technologies Used:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
        </div>
          </div>
        </div>
        <div className='details-description'>
          <p>{project.description}</p>
        </div>

      </div>

    </div>
  );
};

export default ProjectDetails;