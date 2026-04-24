import React, { useState } from "react";
import * as S from "./skills-expandable.styles";
import { Skill } from "../../models";

interface SkillsExpandableProps {
  skills?: Skill[];
  frontImage: string;
  backImage: string;
}

export const SkillsExpandable: React.FC<SkillsExpandableProps> = ({
  skills,
  frontImage,
  backImage,
}) => {
  const [expandedCategory, setExpandedCategory] = useState<"front" | "back" | null>(null);

  const frontSkills = skills?.filter(s => s.category === "front-end") || [];
  const backSkills = skills?.filter(s => s.category === "back-end") || [];

  const toggleExpand = (category: "front" | "back") => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <S.SkillsContainer>
      <S.Title>Habilidades</S.Title>

      <S.SkillsGrid>
        <S.SkillImageWrapper
          expanded={expandedCategory === "front"}
          onClick={() => toggleExpand("front")}
        >
          <S.SkillImageInner>
            <img src={frontImage} alt="Front-end" />
            <S.Label>Front-end</S.Label>
          </S.SkillImageInner>
        </S.SkillImageWrapper>

        <S.SkillImageWrapper
          expanded={expandedCategory === "back"}
          onClick={() => toggleExpand("back")}
        >
          <S.SkillImageInner>
            <img src={backImage} alt="Back-end" />
            <S.Label>Back-end</S.Label>
          </S.SkillImageInner>
        </S.SkillImageWrapper>
      </S.SkillsGrid>

      {expandedCategory && (
        <S.SkillsOverlay>
          <S.SkillsContent>
            <S.CloseButton onClick={() => setExpandedCategory(null)}>
              ✕
            </S.CloseButton>

            <S.SkillsTitle>
              {expandedCategory === "front" ? "Front-end Skills" : "Back-end Skills"}
            </S.SkillsTitle>

            <S.SkillsCardGrid>
              {(expandedCategory === "front" ? frontSkills : backSkills).map(
                (skill) => (
                  <S.SkillCard key={skill.id}>
                    <S.SkillIcon src={skill.link} alt={skill.name} />
                    <S.SkillName>{skill.name}</S.SkillName>
                    <S.SkillLevel>{skill.level}</S.SkillLevel>
                  </S.SkillCard>
                )
              )}
            </S.SkillsCardGrid>
          </S.SkillsContent>
        </S.SkillsOverlay>
      )}
    </S.SkillsContainer>
  );
};

export default SkillsExpandable;
