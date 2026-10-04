import businessData from "../data/businessData";
import Reveal from "./Reveal";

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal>
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Solutions designed around your needs.</h2>
            </div>

            <p>
              We combine practical expertise, clear communication and
              professional execution to deliver dependable results.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {businessData.services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={(index % 3) * 80}
            >
              <article className="service-card">
                <span className="service-number">{service.number}</span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <a
                  href="#contact"
                  className="service-arrow"
                  aria-label={`Learn more about ${service.title}`}
                >
                  ↗
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;