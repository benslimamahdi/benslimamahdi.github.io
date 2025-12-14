import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Resume.css';

const Resume = () => {
    return (
        <SectionWrapper id="resume" className="resume-section">

            <h2 className="section-title">Experience & <span className="text-accent">Education</span></h2>

            <div className="resume-grid">
                {/* Experience Column */}
                <div className="resume-column">
                    <h3><i className="las la-briefcase"></i> Work Experience</h3>

                    <div className="resume-item">
                        <span className="date">Feb 2025 - Sep 2025</span>
                        <h4>DevOps Intern</h4>
                        <span className="location">Oneex, Clermont Ferrand, France</span>
                        <p>
                            Architected and automated multi-zone cloud infrastructure using Terraform, Ansible, and ArgoCD.
                            Implemented proactive monitoring and alerting systems (Grafana, Prometheus).
                        </p>
                    </div>

                    <div className="resume-item">
                        <span className="date">Jun 2024 - Jul 2024</span>
                        <h4>DevOps Intern</h4>
                        <span className="location">PerfectSoft, Sfax, Tunisia</span>
                        <p>
                            Deployed Azure-based monitoring stack (Prometheus, Grafana, Loki).
                            Implemented Infrastructure-as-Code (IaC) using Terraform.
                        </p>
                    </div>

                    <div className="resume-item">
                        <span className="date">Jun 2023 - Aug 2023</span>
                        <h4>DevOps Intern</h4>
                        <span className="location">DataSphera, Sfax, Tunisia</span>
                        <p>
                            Developed and deployed highly efficient CI/CD pipelines in GitLab CI for EKS clusters.
                            Integrated security scanning and compliance tools (Trivy, SonarQube).
                        </p>
                    </div>
                </div>

                {/* Education & Leadership Column */}
                <div className="resume-column">
                    <h3><i className="las la-university"></i> Education</h3>
                    <div className="resume-item">
                        <span className="date">2020 - 2025</span>
                        <h4>National Engineering Diploma in Data Engineering</h4>
                        <span className="location">Faculty of Sciences, University of Sfax</span>
                        <p> Specialized in Data Engineering and DevOps practices.</p>
                    </div>

                    <h3 style={{ marginTop: '40px' }}><i className="las la-star"></i> Leadership</h3>
                    <div className="resume-item">
                        <span className="date">2025 - 2026</span>
                        <h4>Young Professionals Coordinator</h4>
                        <span className="location">IEEE Future Networks Forum</span>
                    </div>

                    <div className="resume-item">
                        <span className="date">2025 - 2026</span>
                        <h4>Co-Founder & Operations Lead</h4>
                        <span className="location">DevAura (Freelance)</span>
                    </div>

                    <div className="resume-item">
                        <span className="date">2024 - 2025</span>
                        <h4>Student Branch Chair</h4>
                        <span className="location">IEEE Faculty of Sciences of Sfax</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Resume;
