import React, { useState } from "react";
import { SuccessCase } from "../../models";
import * as S from "./success-cases-section.styles";

interface SuccessCasesSectionProps {
  cases: SuccessCase[];
}

export const SuccessCasesSection: React.FC<SuccessCasesSectionProps> = ({ cases }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!cases?.length) {
    return null;
  }

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % cases.length);
  };

  const previousCase = () => {
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <S.CasesContainer>
      <S.CasesTitle>Cases de Sucesso</S.CasesTitle>
      <S.CasesSubtitle>
        Projetos estrategicos com foco em disponibilidade, integracao de sistemas,
        escala operacional e resultado mensuravel para o negocio.
      </S.CasesSubtitle>

      <S.CarouselShell>
        <S.NavButton aria-label="Case anterior" onClick={previousCase}>
          <span aria-hidden>{"<"}</span>
        </S.NavButton>

        <S.CarouselViewport>
          <S.CarouselTrack activeIndex={activeIndex}>
            {cases.map((item) => (
              <S.CaseCard key={item.id}>
                <S.CaseHeader>
                  <S.RoleBadge>{item.role}</S.RoleBadge>
                  <S.CaseSegment>{item.segment}</S.CaseSegment>
                  <S.CaseTitle>{item.title}</S.CaseTitle>
                </S.CaseHeader>

                <S.CaseBody>{item.narrative}</S.CaseBody>

                <S.ImpactBlock>
                  <S.ImpactTitle>Impacto de negocio</S.ImpactTitle>
                  <S.ImpactText>{item.businessImpact}</S.ImpactText>
                </S.ImpactBlock>
              </S.CaseCard>
            ))}
          </S.CarouselTrack>
        </S.CarouselViewport>

        <S.NavButton aria-label="Proximo case" onClick={nextCase}>
          <span aria-hidden>{">"}</span>
        </S.NavButton>
      </S.CarouselShell>

      <S.DotsRow>
        {cases.map((item, index) => (
          <S.DotButton
            key={item.id}
            type="button"
            active={index === activeIndex}
            aria-label={`Ir para case ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </S.DotsRow>
    </S.CasesContainer>
  );
};

export default SuccessCasesSection;
