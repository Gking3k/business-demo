import { useEffect, useState } from "react";
import businessData from "../data/businessData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { sections } = businessData;

  const links = [
    { label: "About", id: "about", enabled: sections.about },
    { label: "Services", id: "services", enabled: sections.services },
    { label: "Work", id: "work", enabled: sections.gallery },
    {
      label: "Testimonials",
      id: "testimonials",
      enabled: sections.testimonials,
    },
    { label: "Contact", id: "contact", enabled: sections.contact },
  ].filter((link) => link.enabled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const logo = businessData.logo;

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          {logo.src ? (
            <img src={logo.src} alt={logo.alt} className="brand-logo" />
          ) : (
            <span className="brand-mark">{logo.mark}</span>
          )}

          <span className="brand-name">{businessData.businessName}</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {sections.contact && (
            <a
              href="#contact"
              className="nav-cta mobile-only"
              onClick={closeMenu}
            >
              Get a Quote
            </a>
          )}
        </nav>

        {sections.contact && (
          <a href="#contact" className="nav-cta desktop-only">
            Get a Quote
          </a>
        )}

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;