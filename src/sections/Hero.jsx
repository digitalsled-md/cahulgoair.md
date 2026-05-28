import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/Button";
import whiteSchedule from "../assets/icons/white-schedule.svg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-right px-6"
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      <div className="relative z-10 container mx-auto flex h-full flex-col justify-end gap-2 py-20">
        <h1 className="space-y-3 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          <span className="block">{t.hero.title1}</span>
          <span className="block">{t.hero.title2}</span>

          <span className="block">{t.hero.title3}</span>
        </h1>

        <p className="text-background/80 mt-2 font-semibold">
          {t.hero.description1}
          <br />
          {t.hero.description2}
        </p>
        <div>
          <Button size={"md"} text={t.hero.order} icon={whiteSchedule}>
            {t.hero.order} <img src={whiteSchedule} alt="" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
