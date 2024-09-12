import styled from "styled-components";

export const Card = styled("div")<{ size: "small" | "middle" | "large" }>`
  background: ${(props) => props.theme.colors.white};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.size === "large" ? "flex-start" : "center"};
  align-items: center;
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "400px";
      case "middle":
        return "600px";
      case "large":
        return "900px";
    }
  }};
  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "300px";
      case "middle":
        return "400px";
      case "large":
        return "500px";
    }
  }};
  padding-top: ${(props) => (props.size === "large" ? "2rem" : "0")};
  margin: 1rem;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
