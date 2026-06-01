import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/Button";
import RouteCard from "../components/RouteCard";
import arrows from "../assets/icons/arrows.svg";
import mark from "../assets/icons/mark.svg";
import MainForm from "../components/MainForm";
import { useState, useEffect } from "react";

const Routes = () => {
  const { t } = useLanguage();
  const [isMainFormOpen, setIsMainFormOpen] = useState(false);

  useEffect(() => {
    if (isMainFormOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMainFormOpen]);

  const routes = [
    {
      id: 1,
      location: t.cards.location1,
      image: "/Bucharest.jpg",
      scheduleDescription: t.cards.scheduleDescription1,
      timeDescription: t.cards.timeDescription1,

      badge: {
        text: t.cards.popular,
        icon: arrows,
      },
    },

    {
      id: 2,
      location: t.cards.location2,
      image: "/Iasi.jpg",
      scheduleDescription: t.cards.scheduleDescription2,
      timeDescription: t.cards.timeDescription2,
    },

    {
      id: 3,
      location: t.cards.location3,
      image: "/Chishinau.jpg",
      scheduleDescription: t.cards.scheduleDescription3,
      timeDescription: t.cards.timeDescription3,

      badge: {
        text: t.cards.individual,
        icon: mark,
      },
    },
  ];

  return (
    <section id="routes" className="bg-background px-6 py-25">
      <div className="container mx-auto flex flex-col gap-13">
        <h2 className="text-secondary space-y-1.5 text-3xl font-bold md:text-4xl lg:text-5xl">
          <span className="text-accent">3 </span>
          {t.cards.title}
          <span className="text-accent"> 3 </span>
          {t.cards.title2}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <RouteCard
              route={route}
              key={route.id}
              setIsMainFormOpen={setIsMainFormOpen}
            />
          ))}
        </div>
        <p>
          <span className="text-accent">*</span>
          {t.cards.footer}
          <span className="font-semibold"> {t.cards.footer2}.</span>
        </p>
      </div>
      <MainForm
        isMainFormOpen={isMainFormOpen}
        setIsMainFormOpen={setIsMainFormOpen}
      />
      <div
        className={`fixed inset-0 z-10 bg-black/20 backdrop-blur-md ${isMainFormOpen ? "block" : "hidden"}`}
        onClick={() => setIsMainFormOpen(false)}
      />
    </section>
  );
};

export default Routes;
