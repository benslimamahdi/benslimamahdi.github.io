import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Hero.css';

const Hero = () => {
    return (
        <SectionWrapper id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="title">
                    Hi, I'm <span className="text-accent">Mahdi Ben Slima</span>,<br />
                    DevOps & SRE
                </h1>
                <p className="description">
                    Designing, scaling, and optimizing highly available, multi-cloud infrastructure.
                    Expertise in AWS, GCP, Azure, and Kubernetes.
                </p>
                <div className="hero-actions">
                    <a href="#portfolio" className="btn btn-primary">My Projects</a>
                    <a href="/Mahdi Ben Slima Resume English Version.pdf" download className="btn btn-outline">Download Resume <i className="las la-download"></i></a>
                </div>
            </div>

            <div className="hero-image">
                {/*  Using the image moved to public folder */}
                <div className="image-container">
                    <img src="/Personal photo.png" alt="Mahdi Ben Slima" />
                    <div className="circle-text">
                        <svg viewBox="0 0 200 200">
                            <defs>
                                <path id="textPath" d="M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                            </defs>
                            <text>
                                <textPath xlinkHref="#textPath">DevOps • SRE • Cloud • Security •</textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="scroll-down">
                <p>Scroll Down</p>
                <i className="las la-arrow-down"></i>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
