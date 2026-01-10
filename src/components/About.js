import React from 'react';

const About = () => {
  const details = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'gouthamanarasu2005@gmail.com' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Dharmapuri, Tamil Nadu, India' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/gouthaman11' },
    { icon: 'fas fa-calendar-check', label: 'Availability', value: 'Available for hire', isAvailable: true },
  ];

  const interests = [
    { icon: 'fas fa-gamepad', label: 'Open Source' },
    { icon: 'fas fa-shield-alt', label: 'Cybersecurity' },
    { icon: 'fas fa-dumbbell', label: 'UI/UX' },
    { icon: 'fas fa-blog', label: 'Tech Blogging' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <div className="floating-icons">
                <span className="float-icon icon-1"><i className="fab fa-react"></i></span>
                <span className="float-icon icon-2"><i className="fab fa-node-js"></i></span>
                <span className="float-icon icon-3"><i className="fab fa-python"></i></span>
                <span className="float-icon icon-4"><i className="fas fa-shield-alt"></i></span>
              </div>
              <div className="dev-illustration">
                <div className="dev-scene">
                  {/* Monitor */}
                  <div className="monitor">
                    <div className="monitor-screen">
                      <div className="code-lines">
                        <span className="code-ln"></span>
                        <span className="code-ln short"></span>
                        <span className="code-ln"></span>
                        <span className="code-ln medium"></span>
                        <span className="code-ln short"></span>
                      </div>
                    </div>
                    <div className="monitor-stand"></div>
                  </div>
                  {/* Developer */}
                  <div className="dev-person">
                    <div className="dev-head">
                      <div className="dev-hair"></div>
                      <div className="dev-face">
                        <div className="dev-glasses"></div>
                        <div className="dev-smile"></div>
                      </div>
                      <div className="dev-beard"></div>
                    </div>
                    <div className="dev-body">
                      <div className="dev-hoodie"></div>
                      <div className="dev-hands">
                        <span className="hand left-hand"></span>
                        <span className="hand right-hand"></span>
                      </div>
                    </div>
                  </div>
                  {/* Desk */}
                  <div className="desk"></div>
                  {/* Coffee */}
                  <div className="coffee">
                    <div className="steam">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="tech-bubbles">
                  <span className="bubble b1">&lt;/&gt;</span>
                  <span className="bubble b2">{ }</span>
                  <span className="bubble b3">01</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Dedicated IT Student & Developer</h3>
            <p>
              I'm a third-year Information Technology student with a passion for
              creating innovative solutions that bridge the gap between technology
              and real-world problems. My journey in tech started with curiosity
              about how things work, and has evolved into a commitment to building
              secure, efficient, and user-friendly applications.
            </p>
            <p>
              Currently focusing on full-stack development and cybersecurity, I'm
              constantly learning new technologies and applying them to
              meaningful projects while contributing to grow my technical expertise. I
              believe in writing clean code, following best practices, and staying
              updated with the latest industry trends.
            </p>
            
            <div className="about-details">
              {details.map((detail, index) => (
                <div className="detail-item" key={index}>
                  <i className={detail.icon}></i>
                  <div>
                    <span className="detail-label">{detail.label}</span>
                    <span className={`detail-value ${detail.isAvailable ? 'availability' : ''}`}>
                      {detail.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="interests">
              <h4>Interests & Hobbies</h4>
              <div className="interest-tags">
                {interests.map((interest, index) => (
                  <span className="tag" key={index}>
                    <i className={interest.icon}></i> {interest.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
