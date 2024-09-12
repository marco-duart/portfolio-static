import * as S from "./styles";
import { PortfolioItem, PortfolioPhoto } from "../../models";
import { useState } from "react";
import BaseModal from "../../components/shared/modal/base-modal";
import { TechnologyTags } from "../../components/technology-tag/technology-tag";

type Props = {
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

export const Portfolio: React.FC<Props> = ({ portfolioItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [portfolioItem, setPortfolioItem] = useState<
    undefined | (PortfolioItem & { photos: PortfolioPhoto[] })
  >(undefined);

  const handleModal = () => {
    setIsOpen(false);
  };

  const handlePortfolioItem = (
    portfolioItem: PortfolioItem & { photos: PortfolioPhoto[] }
  ) => {
    setPortfolioItem(portfolioItem);
    setIsOpen(true);
  };

  return (
    <S.Container>
      <S.Title>Projetos</S.Title>
      <S.PortfolioCardContainer>
        {portfolioItems?.map((item) => (
          <S.PortfolioCardWrapper key={item.id}>
            <S.PortfolioCard onClick={() => handlePortfolioItem(item)}>
              <img src={item.photos[0]?.photoUrl} alt={item.name} />
              <h4>{item.name}</h4>
            </S.PortfolioCard>
          </S.PortfolioCardWrapper>
        ))}
      </S.PortfolioCardContainer>
      <BaseModal
        isOpen={isOpen}
        onClose={handleModal}
        title={portfolioItem?.name}
      >
        <S.ModalContent>
          <S.DescriptionSection>
            <table>
              <tr>
                <S.TableRow>
                  <h4>Descrição: </h4>
                </S.TableRow>
                <S.TableRow>{portfolioItem?.description}</S.TableRow>
              </tr>
              <tr>
                <S.TableRow>
                  <h4>Link: </h4>
                </S.TableRow>
                <S.TableRow>
                  <a href={portfolioItem?.link}>
                    {(portfolioItem?.link || "").replace(/^https?:\/\//, "")}
                  </a>
                </S.TableRow>
              </tr>
              <tr>
                <S.TableRow>
                  <h4>Tecnologias: </h4>
                </S.TableRow>
                <S.TableRow>
                  <TechnologyTags
                    techString={portfolioItem?.technologies || ""}
                  />
                </S.TableRow>
              </tr>
              <tr>
                <S.TableRow>
                  <h4>Total de fotos: </h4>
                </S.TableRow>
                <S.TableRow>{portfolioItem?.photos?.length}</S.TableRow>
              </tr>
            </table>
          </S.DescriptionSection>
          <S.CarouselSection>
            <S.StyledCarousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
            >
              {portfolioItem?.photos?.map((photo) => (
                <S.CarouselItem key={photo.id}>
                  <img src={photo.photoUrl} />
                </S.CarouselItem>
              ))}
            </S.StyledCarousel>
          </S.CarouselSection>
        </S.ModalContent>
      </BaseModal>
    </S.Container>
  );
};
