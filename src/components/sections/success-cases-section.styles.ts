import styled from "styled-components";

export const CasesContainer = styled.section`
  padding: 3rem 1.5rem;
  background: ${(props) => props.theme.colors.backgroundSecondary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4rem 3rem;
  }
`;

export const CasesTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes["3xl"]};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin: 0 0 0.5rem 0;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes["4xl"]};
  }
`;

export const CasesSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin: 0 auto 2rem auto;
  max-width: 860px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
    margin-bottom: 2.5rem;
  }
`;

export const CarouselShell = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;
  }
`;

export const NavButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.primary}55;
  background: ${(props) => props.theme.colors.backgroundTertiary};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 42px;
    height: 42px;

    span {
      font-size: 1.2rem;
    }
  }
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

export const CarouselTrack = styled.div<{ activeIndex: number }>`
  display: flex;
  width: 100%;
  transform: translateX(${(props) => `-${props.activeIndex * 100}%`});
  transition: transform 0.35s ease;
`;

export const CaseCard = styled.article`
  min-width: 100%;
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background: ${(props) => props.theme.colors.background};
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`;

export const CaseHeader = styled.header`
  margin-bottom: 1rem;
`;

export const RoleBadge = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.3rem 0.65rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  border: 1px solid ${(props) => props.theme.colors.primary}66;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const CaseSegment = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

export const CaseTitle = styled.h3`
  margin: 0.45rem 0 0 0;
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes["2xl"]};
  }
`;

export const CaseBody = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.75;
`;

export const ImpactBlock = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.backgroundTertiary};
`;

export const ImpactTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.primary};
`;

export const ImpactText = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.65;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

export const DotsRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const DotButton = styled.button<{ active: boolean }>`
  width: ${(props) => (props.active ? "22px" : "10px")};
  height: 10px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${(props) =>
    props.active ? props.theme.colors.primary : `${props.theme.colors.primary}55`};
  transition: all 0.2s ease;
`;
