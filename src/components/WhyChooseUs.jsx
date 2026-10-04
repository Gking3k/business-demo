import businessData from "../data/businessData";

function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">WHY CHOOSE US</p>
          <h2>Professional service that puts people first.</h2>
        </div>

        <div className="why-grid">
          {businessData.whyChooseUs.map((item) => (
            <article className="why-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;