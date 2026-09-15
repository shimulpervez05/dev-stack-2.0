function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* Left Side - Hero Text */}
        <div className="hero-text">

          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling
            options, compare them side by side, and put together
            the stack that fits your next project.
          </p>

          <div className="hero-buttons">

            <a
              href="#technologies"
              className="primary-btn"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="secondary-btn"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* Right Side - Hero Illustration */}
        <div className="hero-image">

          <div className="stack-illustration">

            {/* Top Layer */}
            <div className="stack-layer layer-top">
              <div className="layer-screen">
                <span>&lt;/&gt;</span>
              </div>

              <div className="layer-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            {/* Middle Layer */}
            <div className="stack-layer layer-middle">
              <div className="middle-box"></div>
              <div className="middle-box small"></div>
            </div>

            {/* Bottom Layer */}
            <div className="stack-layer layer-bottom">
              <div className="bottom-line"></div>
              <div className="bottom-line"></div>
              <div className="bottom-line"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;