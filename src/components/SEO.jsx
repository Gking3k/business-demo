import { useEffect } from "react";
import businessData from "../data/businessData";

function SEO() {
  const { seo, businessName } = businessData;

  useEffect(() => {
    document.title = seo.title;

    const setMeta = (name, content) => {
      if (!content) return;

      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      if (!content) return;

      let meta = document.querySelector(`meta[property="${property}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);

    setProperty("og:title", seo.title);
    setProperty("og:description", seo.description);
    setProperty("og:type", "website");
    setProperty("og:site_name", businessName);
    setProperty("og:locale", "en_NG");

    return () => {};
  }, [seo, businessName]);

  return null;
}

export default SEO;