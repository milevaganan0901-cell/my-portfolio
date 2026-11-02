import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Github, Linkedin, Mail, Menu, Code2, Sparkles, Recycle, Layers3, Download, ExternalLink, Braces, Terminal, Globe2 } from 'lucide-react';
import './style.css';

const skills = ['React', 'HTML5', 'CSS3', 'JavaScript', 'Python'];
const projects = [
  { number: '01', name: 'SmartCycle', type: 'E-waste Management', description: 'A sustainability-focused project concept designed to make responsible electronic-waste collection and recycling easier to understand and access.', tags: ['Sustainability', 'Web development', 'E-waste'], icon: Recycle, color: 'mint' },
];
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const email = 'your.email@example.com';
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${email}`; }
  };
  return <div className="site-shell">
    <div className="grain" />
    <header className="nav wrap">
      <a className="brand" href="#home"><span className="brand-mark">M.</span><span>MILE VAGANAN V</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['About','Skills','Projects','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()} onClick={() => setMenuOpen(false)}>{x}</a>)}
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> OPEN TO OPPORTUNITIES</div>
          <p className="eyebrow">HELLO, WORLD! I'M</p>
          <h1>Mile Vaganan<br/><span className="gradient-text">V.</span></h1>
          <p className="hero-lead">A curious <span className="highlight">student & aspiring developer</span> turning ideas into thoughtful digital experiences.</p>
          <p className="hero-sub">I enjoy building for the web, learning new technologies, and exploring how code can make a positive impact.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Get in touch <Mail size={16}/></a></div>
          <div className="socials"><span>FIND ME ON</span><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a></div>
        </div>
        <div className="hero-art" aria-label="Decorative developer illustration">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="art-glow"></div>
          <div className="code-card"><div className="card-top"><i></i><i></i><i></i><span>developer.js</span></div><div className="code-lines"><p><b>const</b> developer = {'{'}</p><p className="indent">name: <em>'Mile Vaganan'</em>,</p><p className="indent">role: <em>'Student'</em>,</p><p className="indent">loves: [</p><p className="indent2"><em>'building'</em>, <em>'learning'</em>,</p><p className="indent2"><em>'creating'</em></p><p className="indent">]</p><p>{'}'};</p><p className="code-comment">// always learning ✦</p></div></div>
          <div className="float-icon icon-code"><Code2/></div><div className="float-icon icon-spark"><Sparkles/></div><div className="float-pill">CREATIVE MINDSET ✳</div>
        </div>
        <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
      </section>
      <section className="about section wrap" id="about">
        <div className="section-kicker"><span>01 / ABOUT ME</span><span className="line"/></div>
        <div className="about-grid"><h2>Curiosity is where<br/>great things <span className="gradient-text">begin.</span></h2><div className="about-text"><p>I'm <strong>Mile Vaganan V</strong>, a student and aspiring developer with a growing interest in creating useful, engaging web experiences.</p><p>I'm building my foundation in frontend technologies and Python, learning by experimenting, solving problems, and turning concepts into projects. I'm currently looking for an opportunity to learn, contribute, and grow with a team.</p><div className="stat-row"><div><strong>05</strong><span>CORE TECHNOLOGIES</span></div><div><strong>01</strong><span>FEATURED PROJECT</span></div><div><strong>∞</strong><span>THINGS TO LEARN</span></div></div></div></div>
      </section>
      <section className="skills section wrap" id="skills">
        <div className="section-kicker"><span>02 / MY TOOLKIT</span><span className="line"/></div>
        <div className="section-heading"><h2>Tools I use to<br/><span className="gradient-text">bring ideas to life.</span></h2><p>I'm continuously strengthening these skills through practice and hands-on projects.</p></div>
        <div className="skill-grid">{skills.map((s,i)=><div className="skill-card" key={s}><span className="skill-index">0{i+1}</span><div className="skill-icon">{[<Braces/>,<Code2/>,<Layers3/>,<Terminal/>,<Globe2/>][i]}</div><h3>{s}</h3><span className="skill-caption">IN MY TOOLKIT</span></div>)}</div>
      </section>
      <section className="projects section wrap" id="projects">
        <div className="section-kicker"><span>03 / SELECTED WORK</span><span className="line"/></div>
        <div className="section-heading"><h2>Ideas made<br/><span className="gradient-text">a little more real.</span></h2><p>A project that reflects my interest in technology and meaningful problem-solving.</p></div>
        {projects.map(p=><article className="project-card" key={p.name}><div className="project-visual"><div className="project-orb"><p.icon size={74} strokeWidth={1.1}/></div><span className="visual-label">DESIGNING FOR A BETTER TOMORROW</span><span className="visual-number">{p.number}</span></div><div className="project-info"><div className="project-type">FEATURED PROJECT · {p.type.toUpperCase()}</div><h3>{p.name}<span className="project-star">✳</span></h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><span className="project-note">PROJECT OVERVIEW <ArrowUpRight size={15}/></span></div></article>)}
        <p className="project-hint">More projects coming soon — I'm just getting started.</p>
      </section>
      <section className="contact section wrap" id="contact">
        <div className="section-kicker"><span>04 / WHAT'S NEXT?</span><span className="line"/></div>
        <div className="contact-panel"><div className="contact-spark">✳</div><p className="eyebrow">HAVE AN OPPORTUNITY?</p><h2>Let's build<br/><span className="gradient-text">something good.</span></h2><p className="contact-copy">I'm open to internships, entry-level opportunities, collaborations, and conversations about technology.</p><a className="button primary" href={`mailto:${email}`}>Say hello <ArrowUpRight size={17}/></a><button className="copy-email" onClick={copyEmail}>{copied ? 'Email copied!' : email} <span>{copied ? '✓' : '↗'}</span></button><p className="email-note">Replace the placeholder email with your real email address.</p></div>
      </section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">M.</span><span>MILE VAGANAN V</span></a><span>DESIGNED WITH CURIOSITY · © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
