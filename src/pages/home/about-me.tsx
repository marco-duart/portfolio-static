import * as S from "./styles";
import { User } from "../../models/user";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@styled-icons/bootstrap";

type Props = {
  user: undefined | User;
};

export const AboutMe: React.FC<Props> = ({ user }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const bioSteps = user?.bio || [];

  const handleNext = () => {
    if (currentStep < bioSteps.length - 1) {
      setIsImageLoaded(false);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setIsImageLoaded(false);
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <S.Container>
      <S.Title>Sobre Mim</S.Title>
      <S.FlexContainer>
        <S.TextContainer>
          <S.SubtitleBlock>{bioSteps[currentStep]?.title}</S.SubtitleBlock>
          <S.TextBlock>{bioSteps[currentStep]?.text}</S.TextBlock>
        </S.TextContainer>

        <S.PortraitWrapper>
          {!isImageLoaded && (
            <div
              style={{ width: "100%", height: "100%", background: "#ddd" }}
            />
          )}
          <S.PortraitImage
            src={bioSteps[currentStep]?.image}
            alt="about"
            onLoad={() => setIsImageLoaded(true)}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
          {isImageLoaded && <S.PortraitOverlay />}
        </S.PortraitWrapper>
      </S.FlexContainer>

      {isImageLoaded && (
        <S.NavigationContainer>
          <S.NavigationButton
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ArrowLeft size={24} />
          </S.NavigationButton>
          <S.StepIndicator>
            Passo {currentStep + 1} de {bioSteps.length}
          </S.StepIndicator>
          <S.NavigationButton
            onClick={handleNext}
            disabled={currentStep === bioSteps.length - 1}
          >
            <ArrowRight size={24} />
          </S.NavigationButton>
        </S.NavigationContainer>
      )}
    </S.Container>
  );
};
