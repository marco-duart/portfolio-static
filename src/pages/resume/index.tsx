import { format } from "date-fns";
import { useUserBio } from "../../hooks";
import * as S from "./styles";
import { TechnologyLevel } from "../../components/technology-level/technology-level";
import { resume } from "../../data";

export const Resume: React.FC = () => {
  const { user, skills, educations, experiences } = useUserBio();

  const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

  return (
    <S.Container>
      <S.PageTitle>Meu Currículo</S.PageTitle>

      <S.SummaryCard>
        <S.SummaryTitle>Resumo Profissional</S.SummaryTitle>
        <S.SummaryText>{resume.summary}</S.SummaryText>
      </S.SummaryCard>

      <S.BasicInfo>
        <S.BasicInfoItem>
          <S.ItemTitle>Telefone:</S.ItemTitle>
          <S.ItemDescription>{user?.phone}</S.ItemDescription>
        </S.BasicInfoItem>
        <S.BasicInfoItem>
          <S.ItemTitle>Data de Nascimento:</S.ItemTitle>
          <S.ItemDescription>{user ? formatDate(user?.birthday) : "Não informado"}</S.ItemDescription>
        </S.BasicInfoItem>
        <S.BasicInfoItem>
          <S.ItemTitle>E-mail:</S.ItemTitle>
          <S.ItemDescription>
            <a href={`mailto:${user?.businessEmail}`}>{user?.businessEmail}</a>
          </S.ItemDescription>
        </S.BasicInfoItem>
        <S.BasicInfoItem>
          <S.ItemTitle>LinkedIn:</S.ItemTitle>
          <S.ItemDescription>
            <a href={user?.linkedin} target="_blank" rel="noreferrer">
              {user?.linkedin}
            </a>
          </S.ItemDescription>
        </S.BasicInfoItem>
        <S.BasicInfoItem>
          <S.ItemTitle>Github:</S.ItemTitle>
          <S.ItemDescription>
            <a href={user?.github} target="_blank" rel="noreferrer">
              {user?.github}
            </a>
          </S.ItemDescription>
        </S.BasicInfoItem>
        <S.BasicInfoItem>
          <S.ItemTitle>Endereço:</S.ItemTitle>
          <S.ItemDescription>{user?.address}</S.ItemDescription>
        </S.BasicInfoItem>
      </S.BasicInfo>

      <S.Timeline>
        <S.TimelineWrapper>
          <S.TimelineIconContainer>
            <S.EducationIcon />
          </S.TimelineIconContainer>
          {educations?.map((education, index) => (
            <S.TimelineItem key={index}>
              <S.TimelinePoint />
              <S.TimelineContent>
                <S.TimelineTitle>{education.degree}</S.TimelineTitle>
                <S.TimelineSubtitle>
                  {education.institutionName} - {education.degreeLevel}
                </S.TimelineSubtitle>
                <S.TimelineSubtitle>
                  {formatDate(education.startDate)} -{" "}
                  {education.endDate ? formatDate(education.endDate) : "Atual"}
                </S.TimelineSubtitle>
              </S.TimelineContent>
            </S.TimelineItem>
          ))}
        </S.TimelineWrapper>
        <S.TimelineWrapper>
          <S.TimelineIconContainer>
            <S.ExperienceIcon />
          </S.TimelineIconContainer>
          {experiences?.map((experience, index) => (
            <S.TimelineItem key={index}>
              <S.TimelinePoint />
              <S.TimelineContent>
                <S.TimelineTitle>{experience.role}</S.TimelineTitle>
                <S.TimelineSubtitle>
                  {experience.companyName}
                </S.TimelineSubtitle>
                <S.TimelineSubtitle>
                  {formatDate(experience.startDate)} -{" "}
                  {experience.endDate
                    ? formatDate(experience.endDate)
                    : "Atual"}
                </S.TimelineSubtitle>
                <S.TimelineDescription>
                  {experience.description}
                </S.TimelineDescription>
              </S.TimelineContent>
            </S.TimelineItem>
          ))}
        </S.TimelineWrapper>
      </S.Timeline>

      <S.TechSection>
        <S.TechTitle>Tecnologias</S.TechTitle>
        <S.TechContainer>
          {skills?.map((skill, index) => (
            <S.TechItem key={index}>
              <S.TechName>{skill.name}</S.TechName>
              <TechnologyLevel level={skill.level} />
            </S.TechItem>
          ))}
        </S.TechContainer>
      </S.TechSection>

      <S.DownloadSection>
        <S.DownloadLink href="/assets/pdf/curriculo.pdf" download>
          <S.DownloadIcon />
          Baixar Currículo (PDF)
        </S.DownloadLink>
      </S.DownloadSection>
    </S.Container>
  );
};
