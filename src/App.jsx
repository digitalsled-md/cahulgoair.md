import About from "./sections/About";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Routes from "./sections/Routes";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";
import MainForm from "./components/MainForm";
import PrivacyPolicy from "./sections/PrivacyPolicy";

const App = () => {
  if (window.location.pathname === "/privacy-policy") return <PrivacyPolicy />;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Routes />
        <WhyUs />
        <About />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;
