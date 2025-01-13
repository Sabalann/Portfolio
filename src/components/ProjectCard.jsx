// ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../assets/translations';
import { useLanguage } from './LanguageContext';

const ProjectCard = ({ id, title, image, technologies }) => {
  const { language } = useLanguage();
  return (
    <div className="project-card" style={{backgroundImage: `url(${image})`}}>
      <p>{title}</p>
      <Link className='link' to={`/projects/${id}`}>{translations[language].viewDetails}</Link>
    </div>
  );
};

export default ProjectCard;