// ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, image, technologies }) => {
  return (
    <div className="project-card" style={{backgroundImage: `url(${image})`}}>
      <p>{title}</p>
      <Link className='link' to={`/projects/${id}`}>View Details</Link>
    </div>
  );
};

export default ProjectCard;