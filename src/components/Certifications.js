import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'October 2024',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
      credentialUrl: 'https://www.credly.com/badges/dfc9885b-61fe-43ce-93b7-dc83c0748dea/linked_in_profile',
      bgColor: 'linear-gradient(135deg, #049fd9, #017ba3)',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'August 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
      credentialUrl: 'https://www.credly.com/badges/c2974fa0-8e4e-4749-94e8-75ed6df57bd4/linked_in_profile',
      bgColor: 'linear-gradient(135deg, #049fd9, #017ba3)',
    },
  ];

  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <p className="section-subtitle">CREDENTIALS</p>
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-logo-wrapper" style={{ background: cert.bgColor }}>
                <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">
                  <i className="fas fa-calendar-alt"></i> {cert.date}
                </span>
              </div>
              <a href={cert.credentialUrl} className="cert-link" aria-label="View credential">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
