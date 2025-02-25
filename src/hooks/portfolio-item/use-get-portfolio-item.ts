import { useEffect, useState } from "react";
import { PortfolioItem } from "../../models/portfolio-item";
import { PortfolioPhoto } from "../../models/portfolio-photo";
import { portfolioItems } from "../../data/index";

type State = {
  portfolioItems: undefined | (PortfolioItem & { photos: PortfolioPhoto[] })[];
};

const INITIAL_STATE = {
  portfolioItems: undefined,
};

export const useGetPortfolioItem = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchPortfolioItems = async () => {
    setState({ portfolioItems });
  };

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  return {
    portfolioItems: state.portfolioItems,
  };
};
