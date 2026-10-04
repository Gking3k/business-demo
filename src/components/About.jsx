import businessData from "../data/businessData";
import Reveal from "./Reveal";

function About() {
  const { about } = businessData;

  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <Reveal>
          <div className="about-image">
            <img
              src={about.image}
              alt={`${businessData.businessName} workspace`}
            />

            <div className="about-image-label">
              <span>EST.</span>
              <strong>{about.established}</strong>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="about-copy">
            <p className="eyebrow">{about.eyebrow}</p>

            <h2>{about.title}</h2>

            <p>{about.description}</p>

            <p>{about.secondaryDescription}</p>

            <a href="#contact" className="text-link">
              Work with us <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;