import styled from 'styled-components';

export const TechTag = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 0 5px 5px 0;
  display: inline-block;
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
`;
