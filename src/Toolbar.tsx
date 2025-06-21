import { NavLink } from "react-router-dom";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar expanded">
      <div className="toolbar-content">
        <NavLink to="/diego-portfolio/" className="toolbar-item">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </NavLink>
        <NavLink to="/diego-portfolio/about" className="toolbar-item">
          <i className="fas fa-user"></i>
          <span>About</span>
        </NavLink>
        <NavLink to="/diego-portfolio/projects" className="toolbar-item">
          <i className="fas fa-code"></i>
          <span>Projects</span>
        </NavLink>
        <NavLink to="/diego-portfolio/contact" className="toolbar-item">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </NavLink>
        <a
          href="https://github.com/Diego1806-code"
          target="_blank"
          rel="noopener noreferrer"
          className="toolbar-item"
        >
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Toolbar;
