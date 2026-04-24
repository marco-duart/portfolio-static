import styled from "styled-components";

export const SkillsContainer = styled.section`
  padding: 3rem 1.5rem;
  background: ${props => props.theme.colors.background};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 3rem;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes["3xl"]};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin: 0 0 3rem 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes["4xl"]};
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    gap: 2rem;
  }
`;

export const SkillImageWrapper = styled.div<{ expanded?: boolean }>`
  cursor: pointer;
  transition: all 0.4s ease;
  opacity: ${props => (props.expanded ? 0.5 : 1)};
  transform: ${props => (props.expanded ? "scale(0.8)" : "scale(1)")};
  pointer-events: ${props => (props.expanded ? "none" : "auto")};
`;

export const SkillImageInner = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow.lg};
  aspect-ratio: 1;

  &:hover {
    box-shadow: ${props => props.theme.boxShadow.neon};
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
`;

export const Label = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
`;

export const SkillsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SkillsContent = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 2rem 1.5rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid ${props => props.theme.colors.primary}30;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 3rem 2rem;
    max-width: 800px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.full};

    &:hover {
      background: ${props => props.theme.colors.primaryLight};
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: rotate(90deg);
  }
`;

export const SkillsTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes["2xl"]};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin: 0 0 2rem 0;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes["3xl"]};
    margin: 0 0 3rem 0;
  }
`;

export const SkillsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.primary}20;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.backgroundTertiary};
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.boxShadow.neon};
    transform: translateY(-5px);
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`;

export const SkillIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  transition: all 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 56px;
    height: 56px;
  }
`;

export const SkillName = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 0;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`;

export const SkillLevel = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.highlight};
  font-weight: 500;
  text-transform: uppercase;
`;
