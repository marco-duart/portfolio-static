import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import React, { useEffect, useState } from "react";
import { Skill } from "../../models/skill";

type Props = {
  skills: undefined | Skill[];
};

export const Skills: React.FC<Props> = ({ skills }) => {
  const [activeSection, setActiveSection] = useState<null | "front" | "back">(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < CONSTANTS.SIZES.tablet);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleImageClick = (section: "front" | "back") => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const activeSkills = skills?.filter((skill) => {
    if (!activeSection) {
      return false;
    }

    return activeSection === "front"
      ? skill.category === "front-end"
      : skill.category === "back-end";
  });

  return (
    <S.SkillsContainer activeSection={activeSection}>
      <S.SkillsTitleContainer>
        <S.Title>Habilidades</S.Title>
      </S.SkillsTitleContainer>
      <S.SkillsImageContainer>
        <S.SkillsImageWrapper
          side="left"
          onClick={() => handleImageClick("front")}
          active={activeSection === "front"}
          initialState={activeSection === null}
        >
          <S.SkillsImage src={CONSTANTS.IMAGES.frontEnd} alt="Front-end" />
        </S.SkillsImageWrapper>
        <S.SkillsImageWrapper
          side="right"
          onClick={() => handleImageClick("back")}
          active={activeSection === "back"}
          initialState={activeSection === null}
        >
          <S.SkillsImage src={CONSTANTS.IMAGES.backEnd} alt="Back-end" />
        </S.SkillsImageWrapper>
        {activeSection && !isMobile && (
          <S.SkillsInfo activeSection={activeSection}>
            <h2>
              {activeSection === "front"
                ? "Front-end Skills"
                : "Back-end Skills"}
            </h2>
            <div>
              {activeSkills?.map((skill) => (
                <S.SkillInfoIconWrapper key={skill.id}>
                  <S.SkillInfoIcon src={skill.link} alt={skill.name} />
                  <S.Tooltip>{skill.name}</S.Tooltip>
                </S.SkillInfoIconWrapper>
              ))}
            </div>
          </S.SkillsInfo>
        )}
      </S.SkillsImageContainer>

      {activeSection && isMobile && (
        <S.SkillsInfoMobile>
          <h3>
            {activeSection === "front" ? "Front-end Skills" : "Back-end Skills"}
          </h3>
          <S.SkillsMobileGrid>
            {activeSkills?.map((skill) => (
              <S.SkillsMobileCard key={skill.id}>
                <img src={skill.link} alt={skill.name} />
                <span>{skill.name}</span>
              </S.SkillsMobileCard>
            ))}
          </S.SkillsMobileGrid>
        </S.SkillsInfoMobile>
      )}

      {activeSection === null && (
        <S.HintText>Clique nas imagens para explorar!</S.HintText>
      )}
    </S.SkillsContainer>
  );
};
