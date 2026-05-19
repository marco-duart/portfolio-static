import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding: 3rem 1.5rem;
  background: ${props => props.theme.colors.background};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 3rem;
  }
`;

export const EmptyState = styled.div`
  border: 1px dashed ${props => props.theme.colors.primary}66;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};

  h4 {
    margin-bottom: 0.35rem;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: ${props => props.theme.fontSizes.sm};
    opacity: 0.9;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes["3xl"]};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin: 0 0 3rem 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes["4xl"]};
  }
`;

export const FeaturedProjectSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    align-items: center;
  }
`;

export const FeaturedProjectImage = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow.xl};
  cursor: pointer;
  aspect-ratio: 16 / 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const FeaturedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(255, 0, 110, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${FeaturedProjectImage}:hover & {
    opacity: 1;
  }
`;

export const ViewDetails = styled.span`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.base};
`;

export const FeaturedProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProjectName = styled.h3`
  font-size: ${props => props.theme.fontSizes["2xl"]};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes["3xl"]};
  }
`;

export const ProjectDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: 1.6;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ViewButton = styled.button`
  align-self: flex-start;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.accent} 100%);
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.boxShadow.neon};
  }
`;

export const OtherProjectsSection = styled.div`
  margin-top: 3rem;
`;

export const SubtitleOtherProjects = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin: 0 0 2rem 0;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const ProjectCard = styled.div`
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.primary}20;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.boxShadow.neon};
    transform: translateY(-5px);
  }
`;

export const ProjectCardImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

export const ProjectCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

export const CardViewDetails = styled.span`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: 0.5rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.sm};
`;

export const ProjectCardInfo = styled.div`
  padding: 1.5rem;
`;

export const CardProjectName = styled.h4`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin: 0 0 0.5rem 0;
`;

export const CardProjectDesc = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 0.95fr 1.25fr;
    gap: 1.2rem;
  }
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary}26;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: 0.85rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

export const DescLabel = styled.h4`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

export const DescText = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  margin: 0;
  line-height: 1.6;
`;

export const ProjectActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.35rem;
`;

export const ProjectActionButton = styled.button`
  border: 1px solid ${props => props.theme.colors.primary}66;
  background: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.text};
  padding: 0.45rem 0.8rem;
  border-radius: ${props => props.theme.borderRadius.full};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.sm};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.primary};
  }
`;

export const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.sm};
  transition: all 0.2s ease;
  word-break: break-all;

  &:hover {
    color: ${props => props.theme.colors.accent};
    text-decoration: underline;
  }
`;

export const CarouselSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const ActivePhoto = styled.div`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.primary}26;
  background: #0c1327;
  overflow: hidden;
  min-height: 240px;
  max-height: 420px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    min-height: 360px;
  }
`;

export const PhotoThumbs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const PhotoThumb = styled.button<{ active: boolean }>`
  border: 1px solid
    ${props => (props.active ? props.theme.colors.primary : `${props.theme.colors.primary}1f`)};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: 0;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.72)};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    border-color: ${props => props.theme.colors.primary};
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
  }
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.full};
  }
`;

export const PhotoItem = styled.div`
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.primary}20;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
