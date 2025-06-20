import { useState } from "react";
import "./Toolbar.css";

const Toolbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTouchStart = () => {
    setIsExpanded(true);
  };

  const handleTouchEnd = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`toolbar ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="toolbar-content">
        <button className="toolbar-item">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </button>
        <button className="toolbar-item">
          <i className="fas fa-user"></i>
          <span>About</span>
        </button>
        <button className="toolbar-item">
          <i className="fas fa-code"></i>
          <span>Projects</span>
        </button>
        <button className="toolbar-item">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </button>
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
