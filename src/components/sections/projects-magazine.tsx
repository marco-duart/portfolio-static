import React, { useState } from "react";
import * as S from "./projects-magazine.styles";
import { PortfolioItem, PortfolioPhoto } from "../../models";
import BaseModal from "../shared/modal/base-modal";
import { TechnologyTags } from "../technology-tag/technology-tag";

type ProjectWithPhotos = PortfolioItem & { photos: PortfolioPhoto[] };

interface ProjectsMagazineProps {
  projects?: ProjectWithPhotos[];
}

export const ProjectsMagazine: React.FC<ProjectsMagazineProps> = ({
  projects = [],
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectWithPhotos | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const handleProjectClick = (project: ProjectWithPhotos) => {
    setSelectedProject(project);
    setActivePhotoIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const visibleProjects = projects.filter((p) => p.show === true);
  const featuredProject = visibleProjects[0];
  const otherProjects = visibleProjects.slice(1);

  const handleNextPhoto = () => {
    if (!selectedProject?.photos?.length) {
      return;
    }

    setActivePhotoIndex((prev) =>
      prev === selectedProject.photos.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevPhoto = () => {
    if (!selectedProject?.photos?.length) {
      return;
    }

    setActivePhotoIndex((prev) =>
      prev === 0 ? selectedProject.photos.length - 1 : prev - 1
    );
  };

  return (
    <S.ProjectsContainer>
      <S.SectionTitle>Projetos</S.SectionTitle>

      {visibleProjects.length === 0 && (
        <S.EmptyState>
          <h4>Nenhum projeto visivel agora</h4>
          <p>Marque projetos com show: true para exibi-los nesta vitrine.</p>
        </S.EmptyState>
      )}

      {featuredProject && (
        <S.FeaturedProjectSection>
          <S.FeaturedProjectImage
            onClick={() => handleProjectClick(featuredProject)}
          >
            <img src={featuredProject.photos[0]?.photoUrl} alt={featuredProject.name} />
            <S.FeaturedOverlay>
              <S.ViewDetails>Ver Detalhes</S.ViewDetails>
            </S.FeaturedOverlay>
          </S.FeaturedProjectImage>

          <S.FeaturedProjectInfo>
            <S.ProjectName>{featuredProject.name}</S.ProjectName>
            <S.ProjectDescription>{featuredProject.description}</S.ProjectDescription>
            <S.TechWrapper>
              <TechnologyTags techString={featuredProject.technologies} />
            </S.TechWrapper>
            <S.ViewButton onClick={() => handleProjectClick(featuredProject)}>
              Explorar Projeto
            </S.ViewButton>
          </S.FeaturedProjectInfo>
        </S.FeaturedProjectSection>
      )}

      {otherProjects.length > 0 && (
        <S.OtherProjectsSection>
          <S.SubtitleOtherProjects>Mais Projetos</S.SubtitleOtherProjects>
          <S.ProjectsGrid>
            {otherProjects.map((project) => (
              <S.ProjectCard
                key={project.id}
                onClick={() => handleProjectClick(project)}
              >
                <S.ProjectCardImage>
                  <img src={project.photos[0]?.photoUrl} alt={project.name} />
                  <S.ProjectCardOverlay>
                    <S.CardViewDetails>Ver</S.CardViewDetails>
                  </S.ProjectCardOverlay>
                </S.ProjectCardImage>
                <S.ProjectCardInfo>
                  <S.CardProjectName>{project.name}</S.CardProjectName>
                  <S.CardProjectDesc>{project.description}</S.CardProjectDesc>
                </S.ProjectCardInfo>
              </S.ProjectCard>
            ))}
          </S.ProjectsGrid>
        </S.OtherProjectsSection>
      )}

      <BaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject?.name}
      >
        <S.ModalContent>
          <S.DescriptionSection>
            <S.DescLabel>Descricao</S.DescLabel>
            <S.DescText>{selectedProject?.description}</S.DescText>

            <S.DescLabel>Tecnologias</S.DescLabel>
            <TechnologyTags
              techString={selectedProject?.technologies || ""}
            />

            <S.DescLabel>Link do projeto</S.DescLabel>
            <S.ProjectLink href={selectedProject?.link} target="_blank" rel="noopener noreferrer">
              {(selectedProject?.link || "").replace(/^https?:\/\//, "")}
            </S.ProjectLink>

            <S.ProjectActions>
              <S.ProjectActionButton onClick={handlePrevPhoto}>Anterior</S.ProjectActionButton>
              <S.ProjectActionButton onClick={handleNextPhoto}>Proxima</S.ProjectActionButton>
            </S.ProjectActions>
          </S.DescriptionSection>

          <S.CarouselSection>
            {selectedProject?.photos && selectedProject.photos.length > 0 && (
              <>
                <S.ActivePhoto>
                  <img
                    src={selectedProject.photos[activePhotoIndex]?.photoUrl}
                    alt={`${selectedProject.name} screenshot ${activePhotoIndex + 1}`}
                  />
                </S.ActivePhoto>

                <S.PhotoThumbs>
                  {selectedProject.photos.map((photo, index) => (
                    <S.PhotoThumb
                      key={photo.id}
                      active={index === activePhotoIndex}
                      onClick={() => setActivePhotoIndex(index)}
                    >
                      <img src={photo.photoUrl} alt={`thumb ${index + 1}`} />
                    </S.PhotoThumb>
                  ))}
                </S.PhotoThumbs>
              </>
            )}
          </S.CarouselSection>
        </S.ModalContent>
      </BaseModal>
    </S.ProjectsContainer>
  );
};

export default ProjectsMagazine;
