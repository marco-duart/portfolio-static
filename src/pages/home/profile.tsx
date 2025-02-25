import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { useState } from "react";

type ProfileData = {
  eneagram: {
    name: string;
    code: string;
    description: string;
  };
  disc: {
    name: string;
    code: string;
    description: string;
  };
  personality16: {
    name: string;
    code: string;
    description: string;
  };
  temperaments: {
    name: string;
    code: string;
    description: string;
  };
};

type Props = {
  profileData: undefined | ProfileData;
};

export const Profile: React.FC<Props> = ({ profileData }) => {
  const [activeProfile, setActiveProfile] = useState<
    "eneagram" | "disc" | "personality16" | "temperaments" | null
  >(null);

  const handleProfileHover = (
    profile: "eneagram" | "disc" | "personality16" | "temperaments"
  ) => {
    setActiveProfile(profile);
  };

  const handleProfileLeave = () => {
    setActiveProfile(null);
  };

  return (
    <S.Container>
      <S.Title style={{ marginBottom: "4rem" }}>Perfil</S.Title>
      <S.ProfileGrid>
        <S.ProfileCard
          onMouseEnter={() => handleProfileHover("eneagram")}
          onMouseLeave={handleProfileLeave}
          active={activeProfile === "eneagram"}
        >
          <S.ProfileImageWrapper>
            <S.ProfileImage src={CONSTANTS.IMAGES.enneagram} alt="Eneagrama" />
          </S.ProfileImageWrapper>
          <S.ProfileInfo active={activeProfile === "eneagram"}>
            <S.ProfileName>{profileData?.eneagram.name}</S.ProfileName>
            <S.ProfileCode>{profileData?.eneagram.code}</S.ProfileCode>
            <S.ProfileDescription>
              {profileData?.eneagram.description}
            </S.ProfileDescription>
          </S.ProfileInfo>
        </S.ProfileCard>

        <S.ProfileCard
          onMouseEnter={() => handleProfileHover("disc")}
          onMouseLeave={handleProfileLeave}
          active={activeProfile === "disc"}
        >
          <S.ProfileImageWrapper>
            <S.ProfileImage src={CONSTANTS.IMAGES.disc} alt="DISC" />
          </S.ProfileImageWrapper>
          <S.ProfileInfo active={activeProfile === "disc"}>
            <S.ProfileName>{profileData?.disc.name}</S.ProfileName>
            <S.ProfileCode>{profileData?.disc.code}</S.ProfileCode>
            <S.ProfileDescription>
              {profileData?.disc.description}
            </S.ProfileDescription>
          </S.ProfileInfo>
        </S.ProfileCard>

        <S.ProfileCard
          onMouseEnter={() => handleProfileHover("personality16")}
          onMouseLeave={handleProfileLeave}
          active={activeProfile === "personality16"}
        >
          <S.ProfileImageWrapper>
            <S.ProfileImage
              src={CONSTANTS.IMAGES.personality}
              alt="16 Personalidades"
            />
          </S.ProfileImageWrapper>
          <S.ProfileInfo active={activeProfile === "personality16"}>
            <S.ProfileName>{profileData?.personality16.name}</S.ProfileName>
            <S.ProfileCode>{profileData?.personality16.code}</S.ProfileCode>
            <S.ProfileDescription>
              {profileData?.personality16.description}
            </S.ProfileDescription>
          </S.ProfileInfo>
        </S.ProfileCard>

        <S.ProfileCard
          onMouseEnter={() => handleProfileHover("temperaments")}
          onMouseLeave={handleProfileLeave}
          active={activeProfile === "temperaments"}
        >
          <S.ProfileImageWrapper>
            <S.ProfileImage
              src={CONSTANTS.IMAGES.temperament}
              alt="Temperamentos"
            />
          </S.ProfileImageWrapper>
          <S.ProfileInfo active={activeProfile === "temperaments"}>
            <S.ProfileName>{profileData?.temperaments.name}</S.ProfileName>
            <S.ProfileCode>{profileData?.temperaments.code}</S.ProfileCode>
            <S.ProfileDescription>
              {profileData?.temperaments.description}
            </S.ProfileDescription>
          </S.ProfileInfo>
        </S.ProfileCard>
      </S.ProfileGrid>
      {!activeProfile && (
        <S.TipText>Passe o mouse sobre um perfil para explorar!</S.TipText>
      )}
    </S.Container>
  );
};
