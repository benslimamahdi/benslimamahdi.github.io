import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Resume.css';

import resumeData from '../../data/resume.json';

const Resume = () => {
    return (
        <SectionWrapper id="resume" className="resume-section">

            <h2 className="section-title">Experience & <span className="text-accent">Education</span></h2>

            <div className="resume-grid">
                {/* Experience Column */}
                <div className="resume-column">
                    <h3><i className="las la-briefcase"></i> Work Experience</h3>

                    {resumeData.experience.map((item) => (
                        <div key={item.id} className="resume-item">
                            <span className="date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <span className="location">{item.company}, {item.location}</span>
                            {item.description && (
                                <p>{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Education & Leadership Column */}
                <div className="resume-column">
                    <h3><i className="las la-university"></i> Education</h3>
                    {resumeData.education.map((item) => (
                        <div key={item.id} className="resume-item">
                            <span className="date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <span className="location">{item.institution}</span>
                            {item.description && (
                                <p>{item.description}</p>
                            )}
                        </div>
                    ))}

                    <h3 style={{ marginTop: '40px' }}><i className="las la-star"></i> Leadership</h3>
                    {resumeData.leadership.map((item) => (
                        <div key={item.id} className="resume-item">
                            <span className="date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <span className="location">{item.organization}</span>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Resume;
