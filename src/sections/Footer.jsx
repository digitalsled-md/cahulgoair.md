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
            href="/privacy-policy"
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
            <Button className="h-16" as="a" href="tel:+37367395926">
              <img src={phone} alt="" />
              {t.nav.call}
            </Button>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/37367395926"
                target="_blank"
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all hover:bg-white/20"
              >
                <img src={whatsapp} alt="" />
              </a>

              <a
                href="https://www.instagram.com/drum_bun_dovezet/"
                target="_blank"
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all hover:bg-white/20"
              >
                <img src={instagram} alt="" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61553870166515"
                target="_blank"
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-all hover:bg-white/20"
              >
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="https://www.instagram.com/digitalsled.md/"
              target="_blank"
              className="text-white/70"
            >
              {t.footer.developed}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
