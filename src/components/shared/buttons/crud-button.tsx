//NATIVE
import React, { ReactNode } from "react";

//LIBRARIES
//COMPONENTS

//STYLES
import * as S from "./styles";

//UTILS

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  action: "close" | "edit" | "delete" | "cancel" | "create" | "save";
  type?: "submit" | "reset";
}

const CrudButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  action,
  type,
}) => {
  return (
    <S.CrudButton
      type={type || "button"}
      action={action}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </S.CrudButton>
  );
};

export default CrudButton;
