function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="logo-icon">DS</span>
            <span>
              Dev <strong>Stack</strong>
            </span>
          </a>

          <p>
            Discover the technologies you need to
            build better projects and create your
            ideal development stack.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>Product</h3>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#technologies">
            Features
          </a>

          <a href="#technologies">
            Pricing
          </a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#about">
            About Us
          </a>

          <a href="#contact">
            Contact
          </a>

          <a href="#about">
            Careers
          </a>

          <a href="#about">
            Blog
          </a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms of Service
          </a>

          <a href="#">
            Cookie Policy
          </a>

          <a href="#">
            Licenses
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;