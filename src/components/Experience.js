import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'TechCorp Solutions',
      date: 'Summer 2024',
      responsibilities: [
        'Developed and deployed 3 microservices using Node.js and Docker, improving system scalability by 40%',
        'Collaborated with cross-functional teams to implement CI/CD pipelines using GitHub Actions',
        'Optimized database queries resulting in 25% faster response times for critical endpoints',
      ],
    },
    {
      title: 'Cybersecurity Research Assistant',
      company: 'University IT Department',
      date: '2023 - 2024',
      responsibilities: [
        'Conducted security assessments on campus network infrastructure identifying 15+ security gaps',
        'Developed Python scripts for automated security monitoring and threat detection',
        'Presented research findings at university cybersecurity symposium',
      ],
    },
    {
      title: 'Web Development Freelancer',
      company: 'Self-Employed',
      date: '2022 - Present',
      responsibilities: [
        'Built responsive websites for 10+ small businesses using React, Next.js, and Tailwind CSS',
        'Managed full project lifecycle from requirements gathering to deployment and maintenance',
        'Achieved 98% client satisfaction rate with timely delivery and ongoing support',
      ],
    },
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <p className="section-subtitle">CAREER JOURNEY</p>
        <h2 className="section-title">Experience & Internships</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <ul className="timeline-list">
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
