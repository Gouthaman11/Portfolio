import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'gouthamanarasu2005@gmail.com',
      href: 'mailto:gouthamanarasu2005@gmail.com',
      iconClass: 'email',
    },
    {
      icon: 'fab fa-linkedin-in',
      title: 'LinkedIn',
      value: 'linkedin.com/in/gouthaman11',
      href: 'www.linkedin.com/in/gouthaman11',
      iconClass: 'linkedin',
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/gouthaman11',
      href: 'https://github.com/Gouthaman11',
      iconClass: 'github',
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-intro">
          I'm actively seeking internship opportunities and open to collaborations. Feel free to reach out!
        </p>
        
        <div className="contact-cards">
          {contactMethods.map((method, index) => (
            <a href={method.href} className="contact-card" key={index}>
              <div className={`contact-icon ${method.iconClass}`}>
                <i className={method.icon}></i>
              </div>
              <h4>{method.title}</h4>
              <p>{method.value}</p>
            </a>
          ))}
        </div>

        <a href={process.env.PUBLIC_URL + '/Gouthaman_Resume.pdf'} download="Gouthaman_Resume.pdf" className="btn btn-primary download-resume">
          <i className="fas fa-download"></i> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
