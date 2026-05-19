import styled from "styled-components";

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.background} 0%,
    ${props => props.theme.colors.backgroundSecondary} 100%
  );
  position: relative;
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 4rem 3rem;
    gap: 4rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      ${props => props.theme.colors.primary}20 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 600px;
      height: 600px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      ${props => props.theme.colors.accent}15 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 500px;
      height: 500px;
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
  align-items: center;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeroName = styled.h1`
  font-size: ${props => props.theme.fontSizes["4xl"]};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin: 0;
  letter-spacing: -1px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes["5xl"]};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes["6xl"]};
  }
`;

export const HeroTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes["2xl"]};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: 1.6;
  max-width: 500px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    max-width: 200px;
  }
`;

export const CTAButton = styled.button<{ primary?: boolean }>`
  padding: 1rem 2rem;
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => (props.primary ? props.theme.colors.primary : "transparent")};
  color: ${props => (props.primary ? props.theme.colors.background : props.theme.colors.primary)};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${props => (props.primary ? props.theme.colors.primaryLight : props.theme.colors.primary)};
    border-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.boxShadow.neon};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  max-width: 400px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: ${props => props.theme.borderRadius.lg};
    box-shadow: ${props => props.theme.boxShadow.xl};
    object-fit: cover;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

export const ScrollHint = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  z-index: 1;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

export const ArrowDown = styled.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
`;
