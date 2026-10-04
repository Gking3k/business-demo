import businessData from "../data/businessData";

function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">CLIENT FEEDBACK</p>
          <h2>Trusted by people who value great service.</h2>
        </div>

        <div className="testimonials-grid">
          {businessData.testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="stars">★★★★★</div>

              <blockquote>"{testimonial.quote}"</blockquote>

              <div className="testimonial-author">
                <span>{testimonial.name.charAt(0)}</span>

                <div>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;