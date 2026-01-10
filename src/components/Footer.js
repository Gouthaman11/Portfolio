import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/gouthaman11', label: 'LinkedIn' },
    { icon: 'fab fa-github', href: 'https://github.com/Gouthaman11', label: 'GitHub' },

  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <a href="#" className="logo">Gouthaman A</a>
            <p>Building the future, one line of code at a time.</p>
          </div>
          <div className="footer-right">
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a href={link.href} aria-label={link.label} key={index}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Gouthaman A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
