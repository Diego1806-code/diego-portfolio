import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Toolbar from "./Toolbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="background">
          <div className="gradient"></div>
        </div>
        <Toolbar />
        <Routes>
          <Route path="/diego-portfolio/" element={<Home />} />
          <Route path="/diego-portfolio/about" element={<About />} />
          <Route path="/diego-portfolio/projects" element={<Projects />} />
          <Route path="/diego-portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
