import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Logo from "./logo";
import * as S from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("about");

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
  };

  useEffect(() => {
    const path = location.pathname;
    const section = path.split("/").pop() || "about";
    if (section === "curriculum") {
      setActiveSection("curriculum");
    } else {
      setActiveSection(section);
    }

    // Correção para a dinâmica de estilização de current page
    const handleScroll = () => {
      const sections = ["about", "skills", "portfolio", "contact"];
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

  return (
    <S.Header>
      <div>
        <Logo />
      </div>
      <S.Navbar>
        <S.HeaderScrool
          mobile={true}
          onClick={() => handleScrollTo("about")}
          className={activeSection === "about" ? "active" : ""}
        >
          Home
        </S.HeaderScrool>
        <S.HeaderScrool
          mobile={false}
          onClick={() => handleScrollTo("skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          Habilidades
        </S.HeaderScrool>
        <S.HeaderScrool
          mobile={true}
          onClick={() => handleScrollTo("portfolio")}
          className={activeSection === "portfolio" ? "active" : ""}
        >
          Projetos
        </S.HeaderScrool>
        <S.HeaderScrool
          mobile={true}
          onClick={() => handleScrollTo("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contato
        </S.HeaderScrool>
        <S.HeaderLink to={"/curriculum"}>Currículo</S.HeaderLink>
      </S.Navbar>
    </S.Header>
  );
};

export default Header;
