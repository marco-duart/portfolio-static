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
  type: "submit" | "reset";
}

const FormButton: React.FC<Props> = ({ onClick, children, type }) => {
  return (
    <S.FormButton type={type} onClick={onClick ? onClick : () => {}}>
      {children}
    </S.FormButton>
  );
};

export default FormButton;
