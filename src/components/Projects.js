import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AthlNet - A Growth Platform For Athletes',
      description: 'A comprehensive platform connecting athletes, coaches, and recruiters. Features include athlete profiles, performance tracking, and recruitment tools built with React, Node.js, and Firebase.',
      image: 'https://tse3.mm.bing.net/th/id/OIP.JUGyU43ARXLMyELbwO_bYwHaEJ?w=626&h=351&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['React', 'Node.js', 'Firebase'],
      codeUrl: 'https://github.com/Gouthaman11/AthlNet',
      demoUrl: 'https://athlnet.web.app',
    },
    {
      title: 'AI Artisians Assistant',
      description: 'Built an AI-driven system that guides artisans in presenting and pricing their handmade artifacts to reach the right audience.',
      image: 'https://static.vecteezy.com/system/resources/previews/020/989/941/non_2x/robot-painting-creating-artwork-artificial-intelligence-artist-assistant-vector.jpg',
      tags: ['React', 'Vite', 'JavaScript'],
      codeUrl: 'https://github.com/Gouthaman11/Gen-ai',
      demoUrl: 'https://gen-ai-indol-eta.vercel.app/',
    },
    {
      title: 'CyberSec -Threat Detection & Analysis Platform',
      description: 'Collaborative task management platform with real-time updates, team workspaces, and productivity analytics. Features drag-and-drop interface and mobile responsiveness.',
      image: 'https://www.sangfor.com/sites/default/files/inline-images/What%20is%20Threat%20Detection.jpg',
      tags: ['React', 'Firebase', 'TypeScript'],
      codeUrl: 'https://github.com/Gouthaman11/CyberSec',
      demoUrl: '#',
    },

  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-subtitle">MY WORK</p>
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    <i className="fab fa-github"></i> View Code
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="https://github.com/Gouthaman11" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All Projects <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
