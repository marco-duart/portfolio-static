import { useEffect, useState } from "react";
import { user, resume, educations, experiences, skills } from "../../data/index"
import {
  User,
  Resume,
  Skill,
  Education,
  Experience,
} from "../../models";

type State = {
  user: undefined | User;
  resume: undefined | Resume;
  educations: undefined | Education[];
  experiences: undefined | Experience[];
  skills: undefined | Skill[];
};

const INITIAL_STATE = {
  user: undefined,
  resume: undefined,
  educations: undefined,
  experiences: undefined,
  skills: undefined,
};

export const useProfile = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchResume = async () => {
    setState((prevState) => ({
      ...prevState,
      user,
      resume,
      educations,
      experiences,
      skills,
    }));
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return {
    profile: state,
  };
};
