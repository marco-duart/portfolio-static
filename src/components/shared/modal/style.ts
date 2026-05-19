import styled from "styled-components";
import * as CONSTANTS from "../../../utils/constants/constants";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 8, 18, 0.82);
  backdrop-filter: blur(4px);
  z-index: 40;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: min(1100px, 94%);
  height: min(86vh, 820px);
  border: 1px solid ${(props) => props.theme.colors.primary}2e;
  box-shadow: ${(props) => props.theme.boxShadow.xl};

  @media ${CONSTANTS.DEVICE.tablet} {
    width: min(1220px, 92%);
    height: min(88vh, 860px);
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 0 14px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.backgroundTertiary},
    ${(props) => props.theme.colors.backgroundSecondary}
  );
  border-radius: 16px 16px 0 0;
  height: 60px;

  @media ${CONSTANTS.DEVICE.tablet} {
    height: 64px;
    padding: 0 18px 0 20px;
  }
`;

export const ModalTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.openSans};
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    font-size: 1.2rem;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.openSans};
  padding: 12px;
  overflow-y: auto;

  @media ${CONSTANTS.DEVICE.tablet} {
    height: calc(100% - 64px);
    padding: 16px;
  }
`;