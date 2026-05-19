import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Logo from "./logo";
import * as S from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre" },
    { id: "cases", label: "Cases" },
    { id: "profile", label: "Perfil" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  const handleScrollTo = (id: string) => {
    const headerOffset = window.innerHeight * 0.08;

    if (location.pathname !== "/home") {
      navigate("/home", { state: { target: id } });
    } else {
      scroller.scrollTo(id, {
        duration: 500,
        smooth: true,
        offset: -headerOffset,
      });
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const path = location.pathname;
    const section = path.split("/").pop() || "hero";
    if (section === "curriculum") {
      setActiveSection("curriculum");
    } else {
      setActiveSection(section);
    }

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "cases",
        "profile",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <S.Header>
      <S.LogoWrap>
        <Logo />
      </S.LogoWrap>

      <S.MobileToggle
        aria-label="Abrir menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </S.MobileToggle>

      <S.Navbar open={isMenuOpen}>
        {navItems.map((item) => (
          <S.HeaderScrool
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.label}
          </S.HeaderScrool>
        ))}
        <S.HeaderLink to={"/curriculum"}>Currículo</S.HeaderLink>
      </S.Navbar>
    </S.Header>
  );
};

export default Header;
