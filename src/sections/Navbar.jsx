import Logo from "../assets/icons/logo.svg";
import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/Button";
import LanguageButton from "../components/LanguageButton";
import { Children, useState } from "react";
import { Menu, X } from "lucide-react";
import phone from "../assets/icons/phone.svg";
import { useEffect } from "react";

const Navbar = () => {
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledEnough(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <header
      id="header"
      className="fixed top-0 right-0 left-0 z-50 space-y-6 p-6"
    >
      <nav
        className={`container mx-auto flex justify-between p-4 ${isScrolledEnough ? `shadow-body/40 shadow-lg duration-300` : ``} bg-background rounded-3xl`}
      >
        <button onClick={scrollToTop} className="flex cursor-pointer">
          <img src={Logo} alt="CahulGoAir logo" />
        </button>
        <div className="hidden items-center gap-10 lg:flex">
          <a href="#routes">{t.nav.routes}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#FAQ">FAQ</a>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageButton />

          <Button size="sm" as="a" href="tel:+373">
            <img src={phone} alt="" />
            {t.nav.call}
          </Button>
        </div>
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="animate-fade-in bg-background absolute right-0 left-0 z-50 p-6 lg:hidden">
          <nav className="container mx-auto flex flex-col">
            <a
              href="#routes"
              className="w-full px-4 py-3.5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.routes}
            </a>
            <a
              href="#about"
              className="w-full px-4 py-3.5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="#FAQ"
              className="w-full px-4 py-3.5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div
              className="flex items-center gap-3 px-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LanguageButton onClick={() => setIsMobileMenuOpen(false)} />

              <Button size="sm" as="a" href="tel:+373">
                {" "}
                <img src={phone} alt="" />
                {t.nav.call}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
