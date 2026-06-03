import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/Button";
import whiteSchedule from "../assets/icons/white-schedule.svg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative min-h-screen bg-right">
      <img
        src="/hero.jpg"
        alt="CahulGoAir car"
        className="absolute inset-0 hidden h-full w-full object-cover object-right md:block"
      />
      <img
        src="/mobile-hero.jpg"
        alt="CahulGoAir car"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <div className="absolute right-0 bottom-20 left-0 px-6">
        <div className="z-10 container mx-auto flex flex-col gap-2">
          <h1 className="space-y-3 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            <span className="block">{t.hero.title1}</span>
            <span className="block">{t.hero.title2}</span>
          </h1>

          <p className="text-background/80 mt-2 font-semibold">
            {t.hero.description1}
            <br />
            {t.hero.description2}
          </p>
          <div className="mt-4">
            <Button
              as="a"
              href="#routes"
              size={"md"}
              text={t.hero.order}
              icon={whiteSchedule}
            >
              {t.hero.order} <img src={whiteSchedule} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
