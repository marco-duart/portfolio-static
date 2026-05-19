import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 3rem 1.5rem;
  background: ${props => props.theme.colors.background};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 3rem;
  }
`;

export const AboutTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes["3xl"]};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin: 0 0 0.5rem 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes["4xl"]};
  }
`;

export const AboutSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin: 0 0 2rem 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const BioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;

export const BioImage = styled.img`
  width: min(100%, 260px);
  max-width: 260px;
  max-height: 220px;
  height: auto;
  object-fit: contain;
  object-position: center;
  align-self: center;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.md};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex: 0 0 32%;
    width: 100%;
    max-width: 320px;
    max-height: 260px;
  }
`;

export const BioText = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.8;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
    flex: 1;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.primary}20;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    gap: 1rem 3rem;
  }
`;

export const ContactLabel = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`;

export const ContactValue = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.sm};
  word-break: break-word;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.base};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors.accent};
      text-decoration: underline;
    }
  }
`;
