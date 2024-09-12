//NATIVE
import React, { ReactNode } from "react";

//LIBRARIES
//COMPONENTS

//STYLES
import * as S from "./styles";

//UTILS

interface Props {
  onClick?: () => void;
  children: ReactNode;
  type: "button" | "submit" | "reset";
}

const BaseButton: React.FC<Props> = ({ onClick, children, type }) => {
  return (
    <S.BaseButton type={type} onClick={onClick ? onClick : () => {}}>
      {children}
    </S.BaseButton>
  );
};

export default BaseButton;
