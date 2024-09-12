import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { User } from "../../models/user";

type Props = {
  user: undefined | User;
};

export const AboutMe: React.FC<Props> = ({ user }) => {
  return (
    <S.Container>
      <S.Title>Sobre Mim</S.Title>
      <S.FlexContainer>
        <S.TextContainer>
          <S.SubtitleBlock>{user?.bioTitle}</S.SubtitleBlock>
          <S.TextBlock>{user?.bio}</S.TextBlock>
        </S.TextContainer>
        <S.PortraitWrapper>
          <S.PortraitImage src={CONSTANTS.IMAGES.about} alt="about" />
          <S.PortraitOverlay />
        </S.PortraitWrapper>
      </S.FlexContainer>
    </S.Container>
  );
};
