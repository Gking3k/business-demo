import businessData from "../data/businessData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">M</span>
            <span className="brand-name">{businessData.businessName}</span>
          </a>

          <p>{businessData.tagline}</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href={businessData.socialLinks.instagram}>Instagram</a>
          <a href={businessData.socialLinks.facebook}>Facebook</a>
          <a href={businessData.socialLinks.linkedin}>LinkedIn</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 {businessData.businessName}. All rights reserved.</span>
        <span>Professional business website demo</span>
      </div>
    </footer>
  );
}

export default Footer;