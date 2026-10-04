import { useEffect, useState } from "react";
import businessData from "../data/businessData";
import Reveal from "./Reveal";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section className="section gallery-section" id="work">
        <div className="container">
          <Reveal>
            <div className="section-heading section-heading-split">
              <div>
                <p className="eyebrow">SELECTED WORK</p>
                <h2>A closer look at what we do.</h2>
              </div>

              <p>
                Replace these images with your client's actual projects,
                products, spaces or completed work.
              </p>
            </div>
          </Reveal>

          <div className="gallery-grid">
            {businessData.gallery.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 80}
                className={`gallery-item-wrapper gallery-item-wrapper-${index + 1}`}
              >
                <button
                  type="button"
                  className="gallery-item"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Open ${item.title}`}
                >
                  <img src={item.image} alt={item.title} />

                  <div className="gallery-overlay">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{item.title}</strong>

                    <em>View project ↗</em>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.title} />

            <div className="lightbox-caption">
              <span>SELECTED WORK</span>
              <strong>{selectedImage.title}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;