import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Трансфер Кагул - аэропорт Бухарест, Яссы, Кишинёв | CahulGoAir</title>
        <meta
          name="description"
          content="CahulGoAir - пассажирский трансфер из Кагула в аэропорты Бухареста, Ясс и Кишинёва. Поездки под ваш рейс, комфортные авто, багаж, детское кресло, без предоплаты."
        />
        <meta
          name="keywords"
          content="трансфер Кагул аэропорт, Кагул Бухарест аэропорт, Кагул Яссы аэропорт, Кагул Кишинёв аэропорт, пассажирские перевозки Кагул, трансфер из Кагула, такси Кагул аэропорт"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_MD" />
        <meta property="og:site_name" content="CahulGoAir" />
        <meta
          property="og:title"
          content="Трансфер Кагул - аэропорт Бухарест, Яссы, Кишинёв | CahulGoAir"
        />
        <meta
          property="og:description"
          content="Комфортный трансфер из Кагула к аэропортам Бухареста, Ясс и Кишинёва. Подбираем время под рейс, помогаем с багажом, работаем без предоплаты."
        />
        <meta property="og:url" content="https://cahulgoair-md.vercel.app/" />
        <meta property="og:image" content="https://cahulgoair-md.vercel.app/hero.jpg" />
        <meta property="og:image:alt" content="CahulGoAir - трансфер из Кагула в аэропорт" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1540" />
        <meta property="og:image:height" content="958" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Трансфер Кагул - аэропорт Бухарест, Яссы, Кишинёв | CahulGoAir"
        />
        <meta
          name="twitter:description"
          content="Пассажирский трансфер из Кагула в аэропорты Бухареста, Ясс и Кишинёва. Комфортно, вовремя, под ваш рейс."
        />
        <meta name="twitter:image" content="https://cahulgoair-md.vercel.app/hero.jpg" />
        <meta name="twitter:image:alt" content="CahulGoAir car near airport" />
      </Helmet>
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
