import styled from "styled-components";

export const TechLevel = styled.div`
  display: flex;
  gap: 2px;
`;

export const Block = styled.div<{ filled: boolean }>`
  width: 20px;
  height: 10px;
  background-color: ${(props) =>
    props.filled
      ? props.theme.colors.primary
      : props.theme.colors.lightGray};
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.filled
      ? `0 0 8px ${props.theme.colors.primary}`
      : `0 0 4px ${props.theme.colors.gray}`};
`;

