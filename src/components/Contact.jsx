import businessData from "../data/businessData";

function Contact() {
  const { contact } = businessData;

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-copy">
            <p className="eyebrow">{contact.eyebrow}</p>

            <h2>{contact.title}</h2>

            <p>{contact.description}</p>

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="button button-dark"
            >
              Chat on WhatsApp <span>↗</span>
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span>PHONE</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>

            <div className="contact-detail">
              <span>EMAIL</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>

            <div className="contact-detail">
              <span>ADDRESS</span>
              <strong>{contact.address}</strong>
            </div>

            <div className="contact-detail">
              <span>OPENING HOURS</span>
              {contact.hours.map((hour) => (
                <strong key={hour}>{hour}</strong>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;