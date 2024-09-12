//NATIVE

//LIBRARIES
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Trash2 } from "@styled-icons/evaicons-solid";
import { NavLink } from "react-router-dom";

//COMPONENTS

//STYLES

//UTILS
//HOOKS

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.div<{ color: "black" | "white" | "red" }>`
  width: 40px;
  height: 40px;
  cursor: pointer;
  ${StyledIconBase} {
    color: ${(props) => {
      switch (props.color) {
        case "black":
          return props.theme.colors.background;
        case "white":
          return props.theme.colors.white;
        case "red":
          return props.theme.colors.delete;
      }
    }};
  }
`;

export const DeleteIcon = styled(Trash2)`
  color: ${(props) => props.theme.colors.error};
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Link = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 25px;
  border-radius: 10px;

  h3 {
    text-decoration: none;
    color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.candal};
  }
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }
  &.active {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
  }
`;
