import { useEffect, useState } from "react";
import { user, educations, experiences, skills, portfolioItems } from "../../data/index"

import {
  User,
  Skill,
  Education,
  Experience,
  PortfolioItem,
  PortfolioPhoto,
} from "../../models";

type State = {
  user: undefined | User;
  skills: undefined | Skill[];
  educations: undefined | Education[];
  experiences: undefined | Experience[];
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

const INITIAL_STATE: State = {
  user: undefined,
  skills: undefined,
  educations: undefined,
  experiences: undefined,
  portfolioItems: undefined,
};

export const useUserBio = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchBio = async () => {

    setState((prevState) => ({
      ...prevState,
      user,
      skills,
      educations,
      experiences,
      portfolioItems,
    }));
  };

  useEffect(() => {
    fetchBio();
  }, []);

  return {
    user: state.user,
    skills: state.skills,
    educations: state.educations,
    experiences: state.experiences,
  };
};
