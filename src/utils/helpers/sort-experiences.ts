import { Experience } from "../../models";

const compareByStartDate = (left: Experience, right: Experience) =>
  left.startDate.getTime() - right.startDate.getTime();

export const sortExperiencesByTimeline = (items: Experience[]) => {
  return [...items].sort((left, right) => {
    const leftIsCurrent = !left.endDate;
    const rightIsCurrent = !right.endDate;

    if (leftIsCurrent !== rightIsCurrent) {
      return leftIsCurrent ? 1 : -1;
    }

    return compareByStartDate(left, right);
  });
};