import { SkillCategoryEnum } from "../utils/enums/skill-category.enum";
import { SkillLevelEnum } from "../utils/enums/skill-level.enum";

export interface Skill {
  id: number;
  name: string;
  level: SkillLevelEnum;
  category: SkillCategoryEnum;
  link: string;
}
