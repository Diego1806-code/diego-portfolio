const About = () => {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-image">
            <img src="/diego-portfolio/pic1.jpg" alt="Profile" />
          </div>
          <div className="about-text">
            <p>
              Hi! I'm Diego, a passionate developer with a love for creating and
              automating solutions. When I'm not coding, you can find me:
            </p>
            <ul className="hobbies-list">
              <li>
                <i className="fas fa-code"></i>
                <span>Programming innovative solutions</span>
              </li>
              <li>
                <i className="fas fa-drone"></i>
                <span>Flying FPV drones</span>
              </li>
              <li>
                <i className="fas fa-dumbbell"></i>
                <span>Staying fit and healthy</span>
              </li>
              <li>
                <i className="fas fa-car"></i>
                <span>Admiring GT3RS perfection</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
