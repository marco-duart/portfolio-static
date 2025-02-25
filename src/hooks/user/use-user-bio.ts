import { useEffect, useState } from "react";
import {
  user,
  profile,
  educations,
  experiences,
  skills,
  portfolioItems,
} from "../../data/index";

import {
  User,
  Profile,
  Skill,
  Education,
  Experience,
  PortfolioItem,
  PortfolioPhoto,
} from "../../models";

type State = {
  user: undefined | User;
  profile: undefined | Profile;
  skills: undefined | Skill[];
  educations: undefined | Education[];
  experiences: undefined | Experience[];
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

const INITIAL_STATE: State = {
  user: undefined,
  profile: undefined,
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
      profile,
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
    profile: state.profile,
    skills: state.skills,
    educations: state.educations,
    experiences: state.experiences,
  };
};
