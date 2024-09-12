import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import React, { useState } from "react";
import { Skill } from "../../models/skill";

type Props = {
  skills: undefined | Skill[];
};

export const Skills: React.FC<Props> = ({ skills }) => {
  const [activeSection, setActiveSection] = useState<null | "front" | "back">(
    null
  );

  const handleImageClick = (section: "front" | "back") => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const bgColor =
    activeSection === "front"
      ? "#ff4d4d"
      : activeSection === "back"
      ? "#007bff"
      : undefined;

  return (
    <S.SkillsContainer bgColor={bgColor}>
      <S.TitleContainer>
        <S.Title>Habilidades</S.Title>
      </S.TitleContainer>
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
        {activeSection && (
          <S.SkillsInfo activeSection={activeSection}>
            <h2>
              {activeSection === "front"
                ? "Front-end Skills"
                : "Back-end Skills"}
            </h2>
            <div>
              {activeSection === "front" ? (
                <>
                  {skills
                    ?.filter((skill) => skill.category === "front-end")
                    .map((skill, index) => (
                      <S.SkillInfoIconWrapper key={index}>
                        <S.SkillInfoIcon src={skill.link} alt={skill.name} />
                        <S.Tooltip>{skill.name}</S.Tooltip>
                      </S.SkillInfoIconWrapper>
                    ))}
                </>
              ) : (
                <>
                  {skills
                    ?.filter((skill) => skill.category === "back-end")
                    .map((skill, index) => (
                      <S.SkillInfoIconWrapper key={index}>
                        <S.SkillInfoIcon src={skill.link} alt={skill.name} />
                        <S.Tooltip>{skill.name}</S.Tooltip>
                      </S.SkillInfoIconWrapper>
                    ))}
                </>
              )}
            </div>
          </S.SkillsInfo>
        )}
      </S.SkillsImageContainer>
      <hr />
    </S.SkillsContainer>
  );
};
