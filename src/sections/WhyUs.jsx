import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/Button";
import whiteSchedule from "../assets/icons/white-schedule.svg";
import medal from "../assets/icons/medal.svg";
import charge from "../assets/icons/charge.svg";
import clocks from "../assets/icons/clocks.svg";
import headphone from "../assets/icons/headphone.svg";

const WhyUs = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-[url('/whyUsBg.jpg')] bg-cover px-6">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-4 py-20">
        <h2 className="mb-5 space-y-1.5 self-center text-2xl font-bold md:text-4xl lg:text-5xl">
          <span className="text-white">{t.whyUs.title1} </span>
          <span className="text-accent">{t.whyUs.title2}</span>
        </h2>
        <div className="flex min-h-22 w-full items-center gap-5 self-end py-3 lg:pl-[50%]">
          <div className="flex h-13 w-13 shrink-0 rotate-35 items-center justify-center rounded-md border-2 border-white">
            <img src={medal} alt="" className="h-8 -rotate-35" />
          </div>
          <div>
            <p className="text-xl font-semibold text-white">
              <span className="text-accent text-3xl font-bold md:text-4xl">
                20+{" "}
              </span>
              {t.whyUs.experienceTitle}
            </p>
            <p className="text-sm text-white">
              {t.whyUs.experienceDescription}
            </p>
          </div>
        </div>
        <div className="flex min-h-22 w-full items-center gap-5 self-start py-3">
          <div className="flex h-13 w-13 shrink-0 rotate-35 items-center justify-center rounded-md border-2 border-white">
            <img src={charge} alt="" className="h-8 -rotate-35" />
          </div>
          <div>
            <p className="text-xl font-semibold text-white">
              {t.whyUs.stopsTitle1}{" "}
              <span className="text-accent text-3xl font-bold md:text-4xl">
                {t.whyUs.stopsTitle2}
              </span>
            </p>
            <p className="text-white">{t.whyUs.stopsDescription}</p>
          </div>
        </div>
        <div className="flex min-h-22 w-full items-center gap-5 self-end py-3 lg:pl-[50%]">
          <div className="flex h-13 w-13 shrink-0 rotate-35 items-center justify-center rounded-md border-2 border-white">
            <img src={clocks} alt="" className="h-8 -rotate-35" />
          </div>
          <div>
            <p className="text-xl font-semibold text-white">
              {t.whyUs.timingTitle1}{" "}
              <span className="text-accent text-3xl font-bold md:text-4xl">
                {t.whyUs.timingTitle2}{" "}
              </span>
              {t.whyUs.timingTitle3}
            </p>
            <p className="text-white">{t.whyUs.timingDescription}</p>
          </div>
        </div>
        <div className="flex min-h-22 w-full items-center gap-5 self-start py-3">
          <div className="flex h-13 w-13 shrink-0 rotate-35 items-center justify-center rounded-md border-2 border-white">
            <img src={headphone} alt="" className="h-8 -rotate-35" />
          </div>
          <div>
            <p className="text-xl font-semibold text-white">
              {t.whyUs.supportTitle1}{" "}
              <span className="text-accent text-3xl font-bold md:text-4xl">
                24/7
              </span>
            </p>
            <p className="text-white">{t.whyUs.supportDescription}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center gap-5 self-center md:flex-row">
          <p className="font-semibold text-white">{t.whyUs.bottomText}</p>

          <Button as="a" href="#routes">
            {t.whyUs.button}
            <img src={whiteSchedule} alt="" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
