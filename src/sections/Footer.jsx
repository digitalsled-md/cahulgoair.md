import { useLanguage } from "../contexts/LanguageContext";
import viber from "../assets/icons/viber.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import phone from "../assets/icons/phone.svg";
import Button from "../components/Button";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto flex flex-col gap-40 px-6 py-14 lg:flex-row lg:items-end">
        <div className="space-y-3">
          <a
            href="/privacy"
            className="text-sm text-white/80 underline transition-opacity hover:opacity-70"
          >
            {t.footer.privacy}
          </a>

          <p className="text-sm text-white/70">{t.footer.copyright}</p>
        </div>

        <div className="max-w-xl">
          <h3 className="text-3xl leading-tight font-bold">
            {t.contact.title}
          </h3>

          <p className="mt-4 max-w-md text-base leading-7 text-white/75">
            {t.contact.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 md:flex-nowrap">
            <a
              href=""
              className="bg-accent flex h-16 w-70 items-center justify-center gap-1.5 rounded-2xl"
            >
              <img src={phone} alt="" />
              {t.nav.call}
            </a>
            <div className="flex items-center gap-3">
              <a className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all hover:bg-white/20">
                <img src={viber} alt="" />
              </a>

              <a className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all hover:bg-white/20">
                <img src={whatsapp} alt="" />
              </a>

              <a className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all hover:bg-white/20">
                <img src={instagram} alt="" />
              </a>

              <a className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all hover:bg-white/20">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-white/70">{t.footer.developed}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
