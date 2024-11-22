import { Education } from "../models";
import { EducationDegreeEnum } from "../utils/enums/education-degree.enum";

export const educations: Education[] = [
  {
    id: 1,
    institutionName: "Arnia Dev",
    degree: "Programação Fullstack",
    degreeLevel: EducationDegreeEnum.TECHNICAL,
    startDate: new Date("2023-02-01T00:00:00-03:00"),
    endDate: new Date("2024-05-30T00:00:00-03:00"),
    description: "Curso de programação fullstack pela Arnia Dev.",
  },
  {
    id: 2,
    institutionName: "Faculdade Descomplica",
    degree: "Ciencia da Computação",
    degreeLevel: EducationDegreeEnum.HIGHER_EDUCATION,
    startDate: new Date("2024-10-27T00:00:00-03:00"),
    endDate: undefined,
    description:
      "Curso superior bacharelado com o foco em desenvolvimento de software.",
  },
];
