//NATIVE
import React from "react";

//LIBRARIES
import { StyledIcon } from "@styled-icons/styled-icon";

//COMPONENTS

//STYLES
import * as S from "./styles";

//UTILS

type Props = {
  icon: StyledIcon;
  link: string;
  handleClick?: () => void;
  expanded: boolean;
  text: string;
  color: "black" | "white" | "red";
};

const BaseIcon: React.FC<Props> = (props) => {
  const { link, handleClick, expanded, text, color, ...rest } = props;

  return (
    <S.IconContainer>
      {handleClick ? (
        <div>
          <S.Icon color={color}>
            <rest.icon onClick={() => handleClick()} />
          </S.Icon>

          {expanded && <div>{text}</div>}
        </div>
      ) : (
        <S.Link to={link}>
          <S.Icon color={color}>
            <rest.icon />
          </S.Icon>
          {expanded && <h3>{text}</h3>}
        </S.Link>
      )}
    </S.IconContainer>
  );
};

export default BaseIcon;
