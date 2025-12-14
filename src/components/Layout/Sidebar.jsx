import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <span className="logo-text">BSM<span className="logo-dot">.</span></span>
                </div>
            </div>

            <nav className="nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link"><i className="las la-home"></i>Home</a></li>
                    <li><a href="#about" className="nav-link"><i className="las la-user"></i>About</a></li>
                    <li><a href="#resume" className="nav-link"><i className="las la-briefcase"></i>Resume</a></li>
                    <li><a href="#portfolio" className="nav-link"><i className="las la-grip-vertical"></i>Portfolio</a></li>
                    <li><a href="#contact" className="nav-link"><i className="las la-envelope"></i>Contact</a></li>
                </ul>
            </nav>

            <div className="sidebar-footer">
                <p>© 2025 Mahdi</p>
            </div>
        </aside>
    );
};

export default Sidebar;
