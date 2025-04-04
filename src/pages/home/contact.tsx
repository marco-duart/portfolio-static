import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";
import { Whatsapp, Linkedin, Github } from "@styled-icons/bootstrap/";
import { Email } from "@styled-icons/material-outlined";
import { User } from "../../models/user";

type Props = {
  user: undefined | User;
};

export const Contact: React.FC<Props> = ({ user }) => {
  return (
    <S.Container>
      <S.Title>Contato</S.Title>
      <S.ContactFlexContainer>
        <S.ContactPortraitWrapper>
          <S.PortraitImage src={CONSTANTS.IMAGES.contact} alt="contact" />
          <S.PortraitOverlay />
        </S.ContactPortraitWrapper>

        <S.TextContainer>
          <S.IconBlock href={user?.whatsapp} target="_blank">
            <Whatsapp />
            <div>{user?.phone}</div>
          </S.IconBlock>

          <S.IconBlock href={`mailto:${user?.businessEmail}`}>
            <Email />
            <div>{user?.businessEmail}</div>
          </S.IconBlock>

          <S.IconBlock href={user?.linkedin} target="_blank">
            <Linkedin />
            <div>{(user?.linkedin || "").replace(/^https?:\/\/www?./, "")}</div>
          </S.IconBlock>

          <S.IconBlock href={user?.github} target="_blank">
            <Github />
            <div>{(user?.github || "").replace(/^https?:\/\//, "")}</div>
          </S.IconBlock>
        </S.TextContainer>
      </S.ContactFlexContainer>
    </S.Container>
  );
};
