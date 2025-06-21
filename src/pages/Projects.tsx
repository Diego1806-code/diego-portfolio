const Projects = () => {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2>some of My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A 3D-enabled portfolio built with React and Three.js</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Three.js</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Automation using Pyautogui</h3>
            <p>
              An automation using Pyautogui apllied in healthcare for advanced
              privacy
            </p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/40200470/">
              view publication here
            </a>
            <br></br>
            <a href="https://ebooks.iospress.nl/doi/10.3233/SHTI250073">
              view paper here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
