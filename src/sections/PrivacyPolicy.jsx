import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "../contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-background min-h-screen">
          <div className="container mx-auto px-6 pt-36 pb-20 lg:pt-44">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                {t.privacy.title}
              </h1>
              <p className="mt-4 mb-12 text-sm text-body/60">
                {t.privacy.lastUpdated}
              </p>

              <div className="flex flex-col gap-10">
                {t.privacy.sections.map((section, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold">{section.heading}</h2>

                    {section.paragraphs?.map((para, j) => (
                      <p key={j} className="text-lg leading-7">
                        {para}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="flex flex-col gap-2 pl-2">
                        {section.list.map((item, k) => (
                          <li key={k} className="flex items-start gap-3 text-lg leading-7">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.paragraphsAfter?.map((para, j) => (
                      <p key={j} className="text-lg leading-7">
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
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
