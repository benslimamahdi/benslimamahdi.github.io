import React, { useState } from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Portfolio.css';

// Import images
import projectDevOps from '../../assets/project-devops.png';
import projectSecurity from '../../assets/project-security.png';
import projectMLOps from '../../assets/project-mlops.png';

const projectsData = [
    {
        id: 1,
        title: "MLOps Automation Pipeline",
        category: "AI",
        image: projectMLOps,
        description: "Developed end-to-end MLOps pipeline automating model retraining, versioning, and deployment using industry-standard tools.",
        details: "Automated ML versioning, experiment tracking, and reproducible pipelines with DVC and S3/MinIO. Containerized models with Podman/Docker and deployed using GitLab CI/CD. Orchestrated workloads on Kubernetes for scalable inference services.",
        keyAchievements: [
            "Automated ML versioning with DVC",
            "Containerized models with Docker",
            "Kubernetes orchestration"
        ],
        techStack: ["MLOps", "DVC", "MLflow", "Kubernetes"],
        githubLink: "https://github.com/benslimamahdi",
        isRecent: true
    },
    {
        id: 2,
        title: "Multi-Region DR Strategy (Velero)",
        category: "DevOps",
        image: projectDevOps,
        description: "Engineered a disaster recovery strategy for Kubernetes using Velero to backup application state from AWS to Azure, achieving an RPO of less than 1 hour.",
        keyAchievements: [
            "Cross-cloud backup (AWS to Azure)",
            "RPO < 1 hour",
            "Automated restoration drills"
        ],
        techStack: ["Kubernetes", "Velero", "AWS", "Azure"],
        githubLink: "https://github.com/benslimamahdi"
    },
    {
        id: 3,
        title: "Zero Trust with Istio",
        category: "DevOps",
        image: projectSecurity,
        description: "Implemented mutual TLS (mTLS) and granular access policies for a microservices application to enforce zero-trust security and observability.",
        keyAchievements: [
            "mTLS implementation",
            "Granular access policies",
            "Enhanced observability"
        ],
        techStack: ["Istio", "Security", "Prometheus"],
        githubLink: "https://github.com/benslimamahdi"
    },
    {
        id: 4,
        title: "Vagrant K8s Cluster & CI/CD",
        category: "DevOps",
        image: projectDevOps,
        description: "Automated multi-node Kubernetes cluster provisioning with Vagrant and configured full Jenkins CI/CD pipelines.",
        keyAchievements: [
            "Automated provisioning",
            "Full CI/CD pipeline",
            "Infrastructure as Code"
        ],
        techStack: ["Vagrant", "Jenkins", "Helm"],
        githubLink: "https://github.com/benslimamahdi"
    },
    {
        id: 5,
        title: "Azure Sentinel SIEM",
        category: "DevOps",
        image: projectSecurity,
        description: "Deployed cloud-native SIEM for threat monitoring and integrated an SSH honeypot to analyze intrusion attempts.",
        keyAchievements: [
            "Cloud-native SIEM",
            "Threat monitoring",
            "Honeypot integration"
        ],
        techStack: ["Azure Sentinel", "Security", "Honeypot"],
        githubLink: "https://github.com/benslimamahdi"
    },
    {
        id: 6,
        title: "Wazuh Security Monitoring",
        category: "DevOps",
        image: projectSecurity,
        description: "Deployed Wazuh for intrusion detection across virtual machines, cutting incident response time by 35% with dynamic dashboards.",
        keyAchievements: [
            "Intrusion detection",
            "Dynamic dashboards",
            "Reduced incident response time"
        ],
        techStack: ["Wazuh", "SIEM", "Incident Response"],
        githubLink: "https://github.com/benslimamahdi"
    },
    {
        id: 7,
        title: "DevSecOps Pipeline Integration",
        category: "DevOps",
        image: projectDevOps,
        description: "Integrated security scanning (SAST/DAST) into existing CI/CD pipelines to ensure code security before deployment.",
        keyAchievements: [
            "SAST/DAST integration",
            "Automated vulnerability scanning",
            "Compliance enforcement"
        ],
        techStack: ["Jenkins", "SonarQube", "OWASP ZAP"],
        githubLink: "https://github.com/benslimamahdi"
    },
    {
        id: 8,
        title: "AI Chatbot for Customer Support",
        category: "AI",
        image: projectMLOps,
        description: "Built an NLP-based chatbot using Python and TensorFlow to automate customer support queries.",
        keyAchievements: [
            "NLP model training",
            "Real-time query resolution",
            "Integration with web portal"
        ],
        techStack: ["Python", "TensorFlow", "NLP"],
        githubLink: "https://github.com/benslimamahdi"
    }

];

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
