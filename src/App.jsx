import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Resume from './components/Sections/Resume';
import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <section id="hero" className="section-container">
          {/* Hero Component */}
          <Hero />
        </section>

        <section id="about" className="section-container">
          {/* About Component */}
          <About />
        </section>

        <section id="resume" className="section-container">
          {/* Resume Component */}
          <Resume />
        </section>

        <section id="portfolio" className="section-container">
          {/* Portfolio Component */}
          <Portfolio />
        </section>

        <section id="contact" className="section-container">
          {/* Contact Component */}
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
