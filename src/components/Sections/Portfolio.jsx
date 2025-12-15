import React, { useState } from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Portfolio.css';

// Import projects data from JSON
import projectsData from '../../data/projects.json';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredProjects = projectsData.filter(project =>
        filter === 'All' || project.category === filter
    );

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <SectionWrapper id="portfolio" className="portfolio-section">

            <h2 className="section-title">My <span className="text-accent">Projects</span></h2>

            <div className="portfolio-filter">
                {['All', 'DevOps', 'AI', 'Dev'].map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${filter === category ? 'active' : ''}`}
                        onClick={() => { setFilter(category); setVisibleCount(6); }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="portfolio-grid">
                {visibleProjects.map(project => (
                    <div key={project.id} className="portfolio-item">
                        <div className="card-image">
                            <img src={project.image} alt={project.title} />
                            {project.isRecent && <span className="badge-recent">Recent</span>}
                            <div className="card-overlay">
                                <a href={project.githubLink} target="_blank" rel="noreferrer" className="github-link" title="View Code">
                                    <i className="lab la-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-category">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            {project.details && (
                                <p className="card-details">{project.details}</p>
                            )}

                            {project.keyAchievements && (
                                <ul className="key-achievements">
                                    {project.keyAchievements.map((item, index) => (
                                        <li key={index}><i className="las la-check-circle"></i> {item}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="tech-tags">
                                {project.techStack.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < filteredProjects.length && (
                <div className="show-more-container">
                    <button className="btn btn-outline" onClick={handleShowMore}>
                        See More <i className="las la-angle-down"></i>
                    </button>
                </div>
            )}
        </SectionWrapper>
    );
};

export default Portfolio;
