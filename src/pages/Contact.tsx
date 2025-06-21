const Contact = () => {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          <a href="https://github.com/Diego1806-code" className="contact-card">
            <i className="fab fa-github"></i>
            <h3>GitHub</h3>
            <p>Check out my code</p>
          </a>
          <a
            href="mailto:fernandesbrancodiego@gmail.com"
            className="contact-card"
          >
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>Let's talk about opportunities</p>
          </a>
          {/* Add more contact methods */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
