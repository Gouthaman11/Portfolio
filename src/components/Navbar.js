import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About', icon: 'fas fa-user' },
    { href: '#skills', label: 'Skills', icon: 'fas fa-code' },
    { href: '#projects', label: 'Projects', icon: 'fas fa-briefcase' },
    { href: '#certifications', label: 'Certifications', icon: 'fas fa-certificate' },
    { href: '#contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">GA</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <a href={process.env.PUBLIC_URL + '/Gouthaman_Resume.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-outline nav-btn resume-btn">
              <i className="fas fa-file-alt"></i>
              <span>Resume</span>
            </a>
            <a href="#contact" className="btn btn-primary nav-btn hire-btn">
              <i className="fas fa-paper-plane"></i>
              <span>Hire Me</span>
            </a>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li key={link.href} style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a href={process.env.PUBLIC_URL + '/Gouthaman_Resume.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-outline mobile-resume-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-file-alt"></i> Resume
          </a>
          <a href="#contact" className="btn btn-primary mobile-hire-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-paper-plane"></i> Hire Me
          </a>
          <div className="mobile-social">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
