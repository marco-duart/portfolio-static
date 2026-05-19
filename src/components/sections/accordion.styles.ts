import styled from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AccordionItemContainer = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.primary}20;
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const AccordionHeader = styled.button<{ isOpen?: boolean }>`
  width: 100%;
  padding: 1.5rem;
  background: ${props => (props.isOpen ? props.theme.colors.backgroundTertiary : "transparent")};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.backgroundTertiary};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

export const AccordionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  text-align: left;
`;

export const AccordionIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const AccordionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const AccordionChevron = styled.div<{ isOpen?: boolean }>`
  width: 20px;
  height: 20px;
  border-right: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  transform: ${props => (props.isOpen ? "rotate(-45deg)" : "rotate(45deg)")};
  transition: transform 0.3s ease;
  flex-shrink: 0;
`;

export const AccordionContent = styled.div<{ isOpen?: boolean }>`
  max-height: ${props => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

export const AccordionContentInner = styled.div`
  padding: 1.5rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.base};
  line-height: 1.6;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem;
  }

  p {
    margin: 0 0 1rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul, ol {
    margin: 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;
