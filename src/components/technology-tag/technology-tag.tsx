import React from "react";
import * as S from "./styles";
import {
  parseTechnologies,
  getRandomColor,
} from "../../utils/helpers/technologies-builder";

export const TechnologyTags: React.FC<{ techString: string }> = ({
  techString,
}) => {
  const technologies = parseTechnologies(techString);

  return (
    <div>
      {technologies.map((tech) => (
        <S.TechTag key={tech} color={getRandomColor()}>
          {tech}
        </S.TechTag>
      ))}
    </div>
  );
};
