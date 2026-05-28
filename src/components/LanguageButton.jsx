import { useLanguage } from "../contexts/LanguageContext";
import global from "../assets/icons/global.svg";

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      className="border-body flex gap-1.5 rounded-xl border px-4 py-1.5"
      onClick={toggleLanguage}
    >
      <img src={global} alt="" />
      {language === "ru" ? "Ru" : "Ro"}
    </button>
  );
};

export default LanguageButton;
