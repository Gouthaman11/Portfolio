import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      iconClass: 'programming',
      skills: [
        {name: 'C', percent: 75},
        { name: 'C++', percent: 70 },
        { name: 'Java', percent: 80 },
        { name: 'Python', percent: 60 },
        { name: 'JavaScript / TypeScript', percent: 65 },
      ]
    },
    {
      title: 'Web Development',
      icon: 'fas fa-globe',
      iconClass: 'web',
      skills: [
        { name: 'React.js', percent: 80 },
        { name: 'Node.js / Express', percent: 85 },
        { name: 'HTML / CSS / Tailwind', percent: 61 },
        { name: 'REST APIs / GraphQL', percent: 68 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      iconClass: 'cloud',
      skills: [
        { name: 'AWS', percent: 75 },
        { name: 'Docker / Kubernetes', percent: 70 },
        { name: 'CI / CD / GitHub Actions', percent: 78 },
        { name: 'Linux / Bash', percent: 82 },
      ]
    },
    {
      title: 'Cybersecurity',
      icon: 'fas fa-shield-alt',
      iconClass: 'security',
      skills: [
        { name: 'Network Security', percent: 68 },
        { name: 'Bug Bounty', percent: 65 },

      ]
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      iconClass: 'database',
      skills: [
        { name: 'PostgreSQL / MySQL', percent: 85 },
        { name: 'MongoDB', percent: 80 },
        { name: 'Firebase', percent: 75 },
      ]
    },
  ];

  const tools = ['VS Code', 'Postman', 'Figma', 'Git', 'Notion'];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-subtitle">MY EXPERTISE</p>
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className={`skill-icon ${category.iconClass}`}>
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="skill-card">
            <div className="skill-icon tools">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Tools & Platforms</h3>
            <div className="tool-tags">
              {tools.map((tool, index) => (
                <span className="tool-tag" key={index}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
