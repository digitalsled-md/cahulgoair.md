import { useLanguage } from "../contexts/LanguageContext";
import wifi from "../assets/icons/wifi.svg";
import whiteSchedule from "../assets/icons/white-schedule.svg";
import schedule from "../assets/icons/schedule.svg";
import temperature from "../assets/icons/temperature.svg";
import bottle from "../assets/icons/bottle.svg";
import battery from "../assets/icons/battery.svg";
import people from "../assets/icons/people.svg";
import stroller from "../assets/icons/stroller.svg";
import clocksLighting from "../assets/icons/clocks-lighting.svg";
import plane from "../assets/icons/plane.svg";
import arrows from "../assets/icons/arrows.svg";
import mark from "../assets/icons/mark.svg";
import Button from "./Button";

const benefitsIcons = [
  { icon: wifi, alt: "Wi-Fi" },
  { icon: temperature, alt: "Climate control" },
  { icon: bottle, alt: "Water" },
  { icon: battery, alt: "Charging" },
  { icon: people, alt: "Comfort seats" },
  { icon: stroller, alt: "Luggage support" },
];

const RouteCard = ({ route }) => {
  const { t } = useLanguage();

  return (
    <article className="border-secondary overflow-hidden rounded-3xl border-r-5 border-b-5 bg-white">
      <div
        className="relative z-10 aspect-16/10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${route.image})`,
        }}
      >
        <p className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
          {route.location}
        </p>

        {route.badge && (
          <div className="text-body absolute top-6 left-6 flex items-center gap-1.5 rounded-lg bg-white px-3 py-0.5 font-bold">
            {route.badge.text}

            <img src={route.badge.icon} alt="" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5 p-4">
        <div>
          <p className="text-primary flex items-center gap-2 text-lg font-bold">
            <img src={schedule} alt="" aria-hidden="true" />

            {t.cards.schedule}
          </p>

          <p>{route.scheduleDescription}</p>
        </div>
        <div className="space-y-2">
          <p className="text-primary flex items-center gap-2 text-lg font-bold">
            <img src={schedule} alt="" aria-hidden="true" />

            {t.cards.benefits}
          </p>

          <div className="flex flex-wrap gap-4">
            {benefitsIcons.map((item) => (
              <img
                key={item.alt}
                src={item.icon}
                alt={item.alt}
                loading="lazy"
                className="h-6 w-6"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-primary flex items-center gap-2 text-lg font-bold">
            <img src={clocksLighting} alt="" aria-hidden="true" />

            {t.cards.time}
          </p>
          <p>{route.timeDescription}</p>
        </div>
        <div>
          <p className="text-primary flex items-center gap-2 text-lg font-bold">
            <img src={plane} alt="" aria-hidden="true" />
            {t.cards.pickup}
          </p>
          <p>{t.cards.pickupDescription}</p>
        </div>
        <Button size="max" className="mt-auto">
          <img src={whiteSchedule} alt="" />
          {t.cards.button}
        </Button>
      </div>
    </article>
  );
};

export default RouteCard;
