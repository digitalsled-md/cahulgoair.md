import { useLanguage } from "../contexts/LanguageContext";
import whiteSchedule from "../assets/icons/white-schedule.svg";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-background p-10">
      <div className="container mx-auto flex h-full flex-col items-center gap-15 px-6 py-20 lg:flex-row">
        <div className="h-110 w-90 rounded-3xl bg-gray-200">
          <img
            src="/About_us.jpg"
            alt="Passengers near CahulGoAir transport"
            loading="lazy"
            className="h-full w-full rounded-3xl object-cover object-center"
          />
        </div>
        <div className="flex max-w-xl flex-col gap-5 text-lg xl:max-w-2xl">
          <h3 className="mb-5 text-3xl font-semibold md:text-4xl lg:text-5xl">
            {t.about.title}
          </h3>
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
          <p>{t.about.paragraph3}</p>
          <p>{t.about.paragraph4}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
