import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import logo from "../assets/icons/logo.svg";

const FAQ = () => {
  const { t } = useLanguage();
  const [isQuestionOpen, setIsQuestionOpen] = useState(null);

  const questions = [
    {
      question: t.faq.questions.question1,
      answer: t.faq.questions.answer1,
    },
    {
      question: t.faq.questions.question2,
      answer: t.faq.questions.answer2,
    },
    {
      question: t.faq.questions.question3,
      answer: t.faq.questions.answer3,
    },
    {
      question: t.faq.questions.question4,
      answer: t.faq.questions.answer4,
    },
    {
      question: t.faq.questions.question5,
      answer: t.faq.questions.answer5,
    },
  ];

  const toggleQuestion = (index) => {
    setIsQuestionOpen(isQuestionOpen === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="from-primary to-secondary relative overflow-hidden bg-linear-to-tr py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="lg:w-1/3">
            <h2 className="max-w-75 text-4xl leading-none font-bold text-white xl:text-5xl">
              {t.faq.title}
            </h2>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="flex flex-col">
              {questions.map((item, index) => {
                const isOpen = isQuestionOpen === index;

                return (
                  <div key={index} className="border-b border-[#C89B3C]/50">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="group flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-[#C89B3C] transition-transform duration-300">
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </div>

                        <span className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#C89B3C] md:text-xl">
                          {item.question}
                        </span>
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] pb-6 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="max-w-3xl pl-9 leading-relaxed text-gray-300">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative w-full pt-15 leading-none font-bold text-white/5 select-none">
        <img
          className="absolute top-27 left-1/2 w-full -translate-1/2 opacity-50 md:w-2/3"
          src={logo}
          alt=""
        />
      </div>
    </section>
  );
};

export default FAQ;
