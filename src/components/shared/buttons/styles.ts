import styled from "styled-components";

export const BaseButton = styled.button`
  display: inline-block;
  width: 250px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secundary};
  border: 3px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    transform: translateX(-100%);
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0);
  }
`;

export const FormButton = styled.button`
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.candal};
  cursor: pointer;
`;

export const CrudButton = styled("button")<{
  action: "close" | "edit" | "delete" | "cancel" | "create" | "save";
}>`
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
    0 1px 1px rgba(0, 0, 0, 0.05);
  padding: 0.8rem 1.5rem;
  margin: 1rem;
  background-color: ${(props) => {
    switch (props.action) {
      case "close":
        return props.theme.colors.close;
      case "delete":
        return props.theme.colors.delete;
      case "edit":
        return props.theme.colors.edit;
      case "cancel":
        return props.theme.colors.cancel;
      case "create":
        return props.theme.colors.create;
      case "save":
        return props.theme.colors.save;
    }
  }};

  border: none;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.candal};
  cursor: pointer;

  /* &:hover {
    
  }

  &:focus {

  } */
`;
