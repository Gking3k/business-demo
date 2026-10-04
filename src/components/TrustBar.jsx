import businessData from "../data/businessData";

function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        {businessData.highlights.map((item) => (
          <div className="trust-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;