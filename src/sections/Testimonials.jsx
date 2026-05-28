import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const [openedCard, setOpenedCard] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const reviews = [t.reviews.review1, t.reviews.review2, t.reviews.review3];

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleCard = (index) => {
    if (isDesktop) return;

    setOpenedCard(openedCard === index ? null : index);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => {
            const isOpen = isDesktop || openedCard === index;

            return (
              <div
                key={index}
                className="group border-accent/30 flex flex-col rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="bg-accent/10 text-accent flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-primary text-lg font-semibold">
                      {review.name}
                    </p>

                    <div className="text-accent flex gap-1 text-sm">★★★★★</div>
                  </div>
                </div>

                <div className="relative flex-1">
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[1000px]" : "max-h-[150px]"
                    }`}
                  >
                    <p className="leading-7 text-gray-700">{review.text}</p>
                  </div>

                  {!isOpen && !isDesktop && (
                    <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-white via-white/95 to-transparent" />
                  )}
                </div>

                {!isDesktop && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-accent mt-6 flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
                  >
                    {isOpen
                      ? t.reviews.hideButton || "Скрыть"
                      : t.reviews.button}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
