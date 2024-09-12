//NATIVE
import { ReactNode } from "react";
//LIBRARIES
//COMPONENTS

//STYLES
import * as S from "./styles";

//UTILS

type Props = {
  size: "small" | "middle" | "large"
  children: ReactNode;
};

const BaseCard: React.FC<Props> = ({ children, size }) => {
  return <S.Card size={size}>{children}</S.Card>;
};

export default BaseCard;
