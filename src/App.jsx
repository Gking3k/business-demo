import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import businessData from "./data/businessData";
import SEO from "./components/SEO";

function App() {
  const { sections, theme } = businessData;

  const themeStyles = {
    "--primary": theme.primary,
    "--primary-soft": theme.primarySoft,
    "--accent": theme.accent,
    "--accent-light": theme.accentLight,
    "--background": theme.background,
    "--surface": theme.surface,
    "--text": theme.text,
    "--muted": theme.muted,
    "--border": theme.border,
  };

  return (
    <div style={themeStyles}>

      <SEO />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />

        {sections.highlights && <TrustBar />}

        {sections.about && <About />}

        {sections.services && <Services />}

        {sections.whyChooseUs && <WhyChooseUs />}

        {sections.gallery && <Gallery />}

        {sections.testimonials && <Testimonials />}

        {sections.contact && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;