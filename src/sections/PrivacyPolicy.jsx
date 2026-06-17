import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "../contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности | CahulGoAir</title>
        <meta
          name="description"
          content="Политика конфиденциальности сервиса CahulGoAir — как мы собираем, используем и защищаем ваши персональные данные."
        />
      </Helmet>
      <Navbar showNavLinks={false} />
      <main>
        <section className="bg-background min-h-screen">
          <div className="container mx-auto px-6 pt-36 pb-20 lg:pt-44">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-2xl font-semibold break-words md:text-4xl lg:text-5xl">
                {t.privacy.title}
              </h1>
              <p className="mt-4 mb-12 text-sm text-body/60">
                {t.privacy.lastUpdated}
              </p>

              <div className="flex flex-col gap-10">
                {t.privacy.sections.map((section, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold md:text-2xl">{section.heading}</h2>

                    {section.paragraphs?.map((para, j) => (
                      <p key={j} className="text-base leading-7 md:text-lg">
                        {para}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="flex flex-col gap-2 pl-2">
                        {section.list.map((item, k) => (
                          <li key={k} className="flex items-start gap-3 text-base leading-7 md:text-lg">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.paragraphsAfter?.map((para, j) => (
                      <p key={j} className="text-base leading-7 md:text-lg">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer showPrivacyLink={false} />
    </>
  );
};

export default PrivacyPolicy;
