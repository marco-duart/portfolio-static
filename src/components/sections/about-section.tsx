import React, { useState } from "react";
import * as S from "./about-section.styles";
import { Accordion } from "./accordion";
import { User } from "../../models";

interface AboutSectionProps {
  user?: User;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ user }) => {
  if (!user?.bio) {
    return null;
  }

  const accordionItems = user.bio.map((bioItem, index) => ({
    id: `about-${index}`,
    title: bioItem.title,
    icon: "📖",
    content: (
      <S.BioContent>
        {bioItem.image && (
          <S.BioImage src={bioItem.image} alt={bioItem.title} />
        )}
        <S.BioText>{bioItem.text}</S.BioText>
      </S.BioContent>
    ),
  }));

  return (
    <S.AboutContainer>
      <S.AboutTitle>Sobre Mim</S.AboutTitle>
      <S.AboutSubtitle>{user.bioTitle}</S.AboutSubtitle>

      <Accordion items={accordionItems} allowMultiple />

      <S.ContactInfo>
        <S.ContactLabel>Localização:</S.ContactLabel>
        <S.ContactValue>{user.address}</S.ContactValue>

        <S.ContactLabel>Email:</S.ContactLabel>
        <S.ContactValue>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </S.ContactValue>
      </S.ContactInfo>
    </S.AboutContainer>
  );
};

export default AboutSection;
