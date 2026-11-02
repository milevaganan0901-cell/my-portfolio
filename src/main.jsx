
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <div className="portfolio">

      <header className="navbar">
        <h2>MILE VAGANAN V<span>.</span></h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="eyebrow">HELLO, I'M MILE VAGANAN V</p>
          <h1>Building ideas into <span>real experiences.</span></h1>
          <p>
            I'm a second-year B.Tech Artificial Intelligence
            and Machine Learning student at SRM Institute
            of Science and Technology.
          </p>
          <a className="btn" href="#work">Explore My Work ↗</a>
        </div>

        <div className="hero-image">
          <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="Mile Vaganan V"
/>
        </div>
      </section>

      <section className="section" id="work">
        <p className="eyebrow">MY WORK</p>
        <h2>Featured Project<span>.</span></h2>

        <div className="project-card">
          <div className="project-image">
            <h3>SmartCycle</h3>
            <p>Give old electronics a second life.</p>
          </div>

          <div className="project-details">
            <h3>SmartCycle – E-waste Management</h3>
            <p>
              A platform that helps users sell unused
              electronic devices, estimate their value,
              schedule collection and track devices
              through refurbishment or recycling.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
              <span>Machine Learning</span>
              <span>Gemini</span>
            </div>

            <a href="https://smartcycle-ewaste-management.vercel.app/"
              target="_blank" rel="noreferrer">
              Live Demo ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <p className="eyebrow">MY TECHNOLOGIES</p>
        <h2>Skills<span>.</span></h2>
        <div className="skill-list">
          {['React', 'HTML', 'CSS', 'JavaScript',
            'Python', 'FastAPI', 'PostgreSQL',
            'Machine Learning'].map(skill => (
              <div className="skill" key={skill}>{skill}</div>
            ))}
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Curious mind. Creative builder.</h2>
        <p>
         
<p>
  I'm a second-year B.Tech student specializing in Artificial
  Intelligence and Machine Learning at SRM Institute of Science
  and Technology. I'm passionate about technology, programming,
  and creating solutions to real-world problems. I have
  experience working with Python, JavaScript, React, HTML, and
  CSS, and I'm continuously improving my skills through
  hands-on projects. I'm eager to learn, explore new
  technologies, and contribute to exciting opportunities.
</p>

        </p>
        <h3>Education</h3>
        <p>B.Tech – Artificial Intelligence and Machine Learning</p>
        <p>SRM Institute of Science and Technology · 2nd Year</p>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Let's create something great.</h2>
        <p>Open to internship opportunities!</p>

        <a href="mailto:milevaganan0901@gmail.com">Email Me ↗</a>
        <a href="https://github.com/milevaganan0901-cell"
          target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/mile-vaganan-29013437a/"
          target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </section>

      <footer>
        © 2026 Mile Vaganan V · Built with React
      </footer>

    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
