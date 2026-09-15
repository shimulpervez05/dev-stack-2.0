import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-icon">DS</span>

          <span>
            Dev <strong>Stack</strong>
          </span>
        </a>

        {/* Navigation Links */}
        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a
            href="#technologies"
            onClick={closeMenu}
          >
            Technologies
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Sign In / Sign Up */}
        <div className="auth-buttons">
          <button className="sign-in">
            Sign In
          </button>

          <button className="sign-up">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;