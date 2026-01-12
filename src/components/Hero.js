import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full-Stack Developer', 'Cybersecurity Enthusiast', 'Cloud Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const stats = [
    { number: '2+', label: 'Years Experience', icon: 'fas fa-briefcase' },
    { number: '3+', label: 'Projects Completed', icon: 'fas fa-code' },
    { number: '2', label: 'Certifications', icon: 'fas fa-certificate' },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-layout">
          <div className="hero-main">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              <span className="badge-text">Available for Work</span>
            </div>
            
            <div className="hero-intro">
              <span className="intro-line"></span>
              <span className="intro-text">Hello, I'm</span>
            </div>

            <h1 className="hero-name">
              <span className="name-alex">Gouthaman A</span>

            </h1>

            <div className="hero-title-wrapper">
              <div className="title-icon">
                <i className="fas fa-terminal"></i>
              </div>
              <div className="hero-role">
                <span className="role-static">I'm a&nbsp;</span>
                <span className="role-dynamic">{displayText}</span>
                <span className="cursor"></span>
              </div>
            </div>

            <p className="hero-description">
              Crafting digital experiences with clean code and creative solutions. 
              Specializing in modern web technologies, cloud architecture, and cybersecurity.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn-hero-primary">
                <span className="btn-content">
                  <i className="fas fa-rocket"></i>
                  <span>Explore My Work</span>
                </span>
                <span className="btn-bg"></span>
              </a>
              <a href="#contact" className="btn-hero-secondary">
                <span>Let's Talk</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/Gouthaman11" className="social-item" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="www.linkedin.com/in/gouthaman11" className="social-item" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-item" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:gouthamanarasu2005@gmail.com" className="social-item" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="code-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="window-title">developer.js</span>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="line-number">1</span>
                      <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}
                    </div>
                    <div className="code-line">
                      <span className="line-number">2</span>
                      <span className="code-prop">  name</span>: <span className="code-string">"Gouthaman A"</span>,
                    </div>
                    <div className="code-line">
                      <span className="line-number">3</span>
                      <span className="code-prop">  skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Node"</span>, <span className="code-string">"Python"</span>],
                    </div>
                    <div className="code-line">
                      <span className="line-number">4</span>
                      <span className="code-prop">  passion</span>: <span className="code-string">"Building things"</span>,
                    </div>
                    <div className="code-line">
                      <span className="line-number">5</span>
                      <span className="code-prop">  available</span>: <span className="code-bool">true</span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">6</span>{'};'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-info">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-hint">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
