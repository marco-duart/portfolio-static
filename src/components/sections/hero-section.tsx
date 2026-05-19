import React from "react";
import * as S from "./hero-section.styles";

interface HeroSectionProps {
  name: string;
  title: string;
  subtitle?: string;
  image?: string;
  onContactClick?: () => void;
  onWorkClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  subtitle,
  image,
  onContactClick,
  onWorkClick,
}) => {
  return (
    <S.HeroContainer>
      <S.HeroContent>
        <S.HeroText>
          <S.HeroName>{name}</S.HeroName>
          <S.HeroTitle>{title}</S.HeroTitle>
          {subtitle && <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>}
        </S.HeroText>

        <S.HeroActions>
          <S.CTAButton primary onClick={onWorkClick}>
            Ver Trabalhos
          </S.CTAButton>
          <S.CTAButton onClick={onContactClick}>
            Entrar em Contato
          </S.CTAButton>
        </S.HeroActions>
      </S.HeroContent>

      {image && (
        <S.HeroImage>
          <img src={image} alt={name} />
        </S.HeroImage>
      )}

      <S.ScrollHint>
        <span>Scroll para explorar</span>
        <S.ArrowDown />
      </S.ScrollHint>
    </S.HeroContainer>
  );
};

export default HeroSection;
