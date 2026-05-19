import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useGetPortfolioItem, useUserBio } from "../../hooks";
import { successCases } from "../../data";
import {
  HeroSection,
  ProjectsMagazine,
  AboutSection,
  SuccessCasesSection,
} from "../../components/sections";
import { Contact } from "./contact";
import { Skills } from "./skills";
import { Profile } from "./profile";

export const Home: React.FC = () => {
  const location = useLocation();
  const { user, skills, profile } = useUserBio();
  const { portfolioItems } = useGetPortfolioItem();

  useEffect(() => {
    if (location.state?.target) {
      const headerOffset = window.innerHeight * 0.08;
      setTimeout(() => {
        scroller.scrollTo(location.state.target, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -headerOffset,
        });
      }, 100);

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleContactScroll = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight * 0.08,
    });
  };

  const handleWorkScroll = () => {
    scroller.scrollTo("projects", {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight * 0.08,
    });
  };

  return (
    <div>
      <section id="hero">
        <HeroSection
          name={user?.name || "Marco Aurélio"}
          title={user?.bioTitle || "Desenvolvedor FullStack"}
          subtitle="Transformando ideias em soluções digitais inovadoras"
          image={user?.bio?.[0]?.image}
          onContactClick={handleContactScroll}
          onWorkClick={handleWorkScroll}
        />
      </section>

      <section id="about">
        <AboutSection user={user} />
      </section>

      <section id="cases">
        <SuccessCasesSection cases={successCases} />
      </section>

      <section id="profile">
        <Profile profileData={profile} />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      <section id="projects">
        <ProjectsMagazine projects={portfolioItems} />
      </section>

      <section id="contact">
        <Contact user={user} />
      </section>
    </div>
  );
};
