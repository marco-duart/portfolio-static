import { Education } from "../models";
import { EducationDegreeEnum } from "../utils/enums/education-degree.enum";

export const educations: Education[] = [
  {
    id: 1,
    institutionName: "Arnia Dev",
    degree: "Desenvolvimento Fullstack",
    degreeLevel: EducationDegreeEnum.TECHNICAL,
    startDate: new Date("2023-02-01T00:00:00-03:00"),
    endDate: new Date("2024-05-30T00:00:00-03:00"),
    description:
      "Formação intensiva em desenvolvimento web e mobile, abrangendo tecnologias modernas como React, Node.js, TypeScript e bancos de dados SQL/NoSQL. Enfoque em boas práticas, arquitetura de software e metodologias ágeis.",
  },
  {
    id: 2,
    institutionName: "Faculdade Descomplica",
    degree: "Bacharelado em Ciência da Computação",
    degreeLevel: EducationDegreeEnum.HIGHER_EDUCATION,
    startDate: new Date("2024-10-27T00:00:00-03:00"),
    endDate: undefined,
    description:
      "Curso superior com ênfase em desenvolvimento de software, engenharia de dados, inteligência artificial e segurança da informação.",
  },
  {
    id: 2,
    institutionName: "Faculdade Descomplica",
    degree: "Tecnologia em Banco de Dados",
    degreeLevel: EducationDegreeEnum.HIGHER_EDUCATION,
    startDate: new Date("2025-03-26T00:00:00-03:00"),
    endDate: undefined,
    description:
      "Curso superior que forma profissionais para dominar a gestão, análise e segurança de bancos de dados.",
  },
];
