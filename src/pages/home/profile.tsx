import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { useMemo, useState } from "react";

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
    "eneagram" | "disc" | "personality16" | "temperaments"
  >("personality16");

  const profileMap = useMemo(
    () => ({
      eneagram: {
        label: "Eneagrama",
        image: CONSTANTS.IMAGES.enneagram,
        code: profileData?.eneagram.code || "",
        name: profileData?.eneagram.name || "",
        description: profileData?.eneagram.description || "",
      },
      disc: {
        label: "DISC",
        image: CONSTANTS.IMAGES.disc,
        code: profileData?.disc.code || "",
        name: profileData?.disc.name || "",
        description: profileData?.disc.description || "",
      },
      personality16: {
        label: "16 Personalidades",
        image: CONSTANTS.IMAGES.personality,
        code: profileData?.personality16.code || "",
        name: profileData?.personality16.name || "",
        description: profileData?.personality16.description || "",
      },
      temperaments: {
        label: "Temperamentos",
        image: CONSTANTS.IMAGES.temperament,
        code: profileData?.temperaments.code || "",
        name: profileData?.temperaments.name || "",
        description: profileData?.temperaments.description || "",
      },
    }),
    [profileData]
  );

  const current = profileMap[activeProfile];

  return (
    <S.ProfileSection>
      <S.Title style={{ marginBottom: "1.2rem" }}>Perfil</S.Title>

      <S.ProfileTabs>
        {(Object.keys(profileMap) as Array<keyof typeof profileMap>).map((key) => (
          <S.ProfileTabButton
            key={key}
            active={activeProfile === key}
            onClick={() => setActiveProfile(key)}
          >
            {profileMap[key].label}
          </S.ProfileTabButton>
        ))}
      </S.ProfileTabs>

      <S.ProfileSpotlight>
        <S.ProfileSpotlightVisual>
          <S.ProfileHalo />
          <S.ProfileSpotlightImage src={current.image} alt={current.label} />
        </S.ProfileSpotlightVisual>

        <S.ProfileSpotlightContent>
          <S.ProfileMiniLabel>Leitura ativa</S.ProfileMiniLabel>
          <S.ProfileMainTitle>{current.name}</S.ProfileMainTitle>
          <S.ProfileMainCode>{current.code}</S.ProfileMainCode>
          <S.ProfileMainDescription>{current.description}</S.ProfileMainDescription>

          <S.ProfileMetrics>
            <S.ProfileMetricCard>
              <strong>{current.label}</strong>
              <span>Base principal de traço</span>
            </S.ProfileMetricCard>
            <S.ProfileMetricCard>
              <strong>Perfil Comportamental</strong>
              <span>Leitura complementar de tomada de decisão</span>
            </S.ProfileMetricCard>
            <S.ProfileMetricCard>
              <strong>Aplicacao no trabalho</strong>
              <span>Comunicação, liderança e resolução de problemas</span>
            </S.ProfileMetricCard>
          </S.ProfileMetrics>
        </S.ProfileSpotlightContent>
      </S.ProfileSpotlight>
    </S.ProfileSection>
  );
};
