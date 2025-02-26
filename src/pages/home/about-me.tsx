import * as S from "./styles";
import { User } from "../../models/user";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@styled-icons/bootstrap";

type Props = {
  user: undefined | User;
};

export const AboutMe: React.FC<Props> = ({ user }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const bioSteps = user?.bio || [];

  const handleNext = () => {
    if (currentStep < bioSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
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
          <S.PortraitImage src={bioSteps[currentStep]?.image} alt="about" />
          <S.PortraitOverlay />
        </S.PortraitWrapper>
      </S.FlexContainer>

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
    </S.Container>
  );
};
