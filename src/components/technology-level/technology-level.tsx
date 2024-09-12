import * as S from "./styles";

const getFilledBlocks = (level: "Iniciante" | "Intermediário" | "Avançado") => {
  switch (level) {
    case "Avançado":
      return 3;
    case "Intermediário":
      return 2;
    case "Iniciante":
      return 1;
    default:
      return 0;
  }
};

export const TechnologyLevel: React.FC<{
  level: "Iniciante" | "Intermediário" | "Avançado";
}> = ({ level }) => {
  const numBlocks = getFilledBlocks(level);

  return (
    <S.TechLevel>
      <S.Block filled={numBlocks > 0} />
      <S.Block filled={numBlocks > 1} />
      <S.Block filled={numBlocks > 2} />
    </S.TechLevel>
  );
};
