import businessData from "../data/businessData";

function Hero() {
  const { hero, businessName } = businessData;

  return (
    <section className="hero" id="home">
      <div className="hero-grid-pattern" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1>{hero.title}</h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <a
              href={hero.primaryCta.target}
              className="button button-primary"
            >
              {hero.primaryCta.text}
              <span>↗</span>
            </a>

            <a
              href={hero.secondaryCta.target}
              className="button button-secondary"
            >
              {hero.secondaryCta.text}
            </a>
          </div>

          <div className="hero-note">
            <span className="hero-note-dot" />
            Professional service. Reliable execution.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={hero.image}
              alt={hero.imageAlt || `${businessName} business`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="hero-floating-card">
            <span>01</span>
            <strong>Built around your goals.</strong>
          </div>

          <div className="hero-circle" />
        </div>
      </div>
    </section>
  );
}

export default Hero;