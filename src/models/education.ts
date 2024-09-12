import { EducationDegreeEnum } from "../utils/enums/education-degree.enum";

export interface Education {
  id: number;
  institutionName: string;
  degree: string;
  degreeLevel: EducationDegreeEnum;
  startDate: Date;
  endDate?: Date;
  description: string;
}
