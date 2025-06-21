const Projects = () => {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {/* Add your projects here */}
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A 3D-enabled portfolio built with React and Three.js</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Three.js</span>
              <span>TypeScript</span>
            </div>
          </div>
          {/* Add more project cards */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
