import React from 'react';
import SectionWrapper from '../Layout/SectionWrapper';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <SectionWrapper id="portfolio" className="portfolio-section">
            <span className="subtitle"><i className="las la-grip-vertical"></i> Portfolio</span>
            <h2 className="section-title">My <span className="text-accent">Projects</span></h2>

            <div className="portfolio-grid">
                {/* Project 1 */}
                <div className="portfolio-item">
                    <div className="portfolio-content">
                        <h3>Multi-Region DR Strategy (Velero)</h3>
                        <p>
                            Engineered a disaster recovery strategy for Kubernetes using Velero to backup application state
                            from AWS to Azure, achieving an RPO of less than 1 hour.
                        </p>
                        <div className="tech-tags">
                            <span>Kubernetes</span>
                            <span>Velero</span>
                            <span>AWS</span>
                            <span>Azure</span>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="portfolio-item">
                    <div className="portfolio-content">
                        <h3>Zero Trust with Istio</h3>
                        <p>
                            Implemented mutual TLS (mTLS) and granular access policies for a microservices application
                            to enforce zero-trust security and observability.
                        </p>
                        <div className="tech-tags">
                            <span>Istio</span>
                            <span>Security</span>
                            <span>Prometheus</span>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="portfolio-item">
                    <div className="portfolio-content">
                        <h3>MLOps Pipeline</h3>
                        <p>
                            Automated data versioning, model tracking, and deployment using DVC and MLflow,
                            reducing model release time by 40%.
                        </p>
                        <div className="tech-tags">
                            <span>MLOps</span>
                            <span>DVC</span>
                            <span>MLflow</span>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="portfolio-item">
                    <div className="portfolio-content">
                        <h3>Vagrant K8s Cluster & CI/CD</h3>
                        <p>
                            Automated multi-node Kubernetes cluster provisioning with Vagrant and configured
                            full Jenkins CI/CD pipelines.
                        </p>
                        <div className="tech-tags">
                            <span>Vagrant</span>
                            <span>Jenkins</span>
                            <span>Helm</span>
                        </div>
                    </div>
                </div>

                {/* Project 5 */}
                <div className="portfolio-item">
                    <div className="portfolio-content">
                        <h3>Azure Sentinel SIEM</h3>
                        <p>
                            Deployed cloud-native SIEM for threat monitoring and integrated an SSH honeypot
                            to analyze intrusion attempts.
                        </p>
                        <div className="tech-tags">
                            <span>Azure Sentinel</span>
                            <span>Security</span>
                            <span>Honeypot</span>
                        </div>
                    </div>
                </div>

                {/* Project 6 */}
                <div className="portfolio-item">
                    <div className="portfolio-content">
                        <h3>Wazuh Security Monitoring</h3>
                        <p>
                            Deployed Wazuh for intrusion detection across virtual machines, cutting incident
                            response time by 35% with dynamic dashboards.
                        </p>
                        <div className="tech-tags">
                            <span>Wazuh</span>
                            <span>SIEM</span>
                            <span>Incident Response</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Portfolio;
