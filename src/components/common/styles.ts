import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as CONSTANTS from "../../utils/constants/constants";

// HEADER
export const Header = styled.header`
  position: fixed;
  top: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 1rem);
  max-width: 1200px;
  min-height: 56px;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: rgba(15, 52, 96, 0.7);
  backdrop-filter: blur(12px);
  z-index: 20;
  box-shadow: ${(props) => props.theme.boxShadow.lg};

  @media ${CONSTANTS.DEVICE.md} {
    width: calc(100% - 2rem);
    min-height: 64px;
    padding: 0.5rem 1rem;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  min-width: 44px;
`;

export const MobileToggle = styled.button`
  width: 42px;
  height: 42px;
  border: 1px solid ${(props) => props.theme.colors.primary}55;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.theme.colors.backgroundSecondary};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;

  span {
    width: 18px;
    height: 2px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
  }

  @media ${CONSTANTS.DEVICE.md} {
    display: none;
  }
`;

export const Navbar = styled.nav<{ open: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  left: 0;
  margin: 0 auto;
  width: calc(100% - 1rem);
  display: ${(props) => (props.open ? "grid" : "none")};
  gap: 0.25rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background: rgba(15, 52, 96, 0.95);
  backdrop-filter: blur(10px);

  @media ${CONSTANTS.DEVICE.md} {
    position: static;
    width: auto;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    border: 0;
    background: transparent;
    backdrop-filter: none;
    padding: 0;
  }
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.9rem;
  color: ${(props) => props.theme.colors.text};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.92rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.background};
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.accent}
    );
    box-shadow: ${(props) => props.theme.boxShadow.neon};
  }
`;

export const HeaderScrool = styled.button`
  text-decoration: none;
  padding: 0.55rem 0.9rem;
  color: ${(props) => props.theme.colors.text};
  border-radius: ${(props) => props.theme.borderRadius.full};
  border: 1px solid transparent;
  background: transparent;
  font-size: 0.92rem;
  font-family: ${(props) => props.theme.fonts.poppins};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary}66;
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }

  &.active {
    color: ${(props) => props.theme.colors.background};
    border-color: transparent;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.accent}
    );
    box-shadow: ${(props) => props.theme.boxShadow.neon};
  }
`;

// LOGO
export const Logo = styled.div`
  display: block;
  width: 34px;
  height: 34px;

  @media ${CONSTANTS.DEVICE.md} {
    width: 40px;
    height: 40px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// FOOTER
export const Footer = styled.footer`
  width: 100%;
  height: 12vh;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 70%;
  background-color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterList = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  span {
    display: flex;
    gap: 5px;
  }
  h4 {
    font-family: ${(props) => props.theme.fonts.openSans};
    color: ${(props) => props.theme.colors.white};
  }
  a {
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts.openSans};
    color: ${(props) => props.theme.colors.white};
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    gap: 30px;

    span {
      gap: 10px;
    }

    div {
      width: 40px;
      height: 40px;
    }
  }
`;

export const FooterEnd = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.openSans};
  color: ${(props) => props.theme.colors.lightGray};

  a {
    color: ${(props) => props.theme.colors.white};
  }

  span {
    font-size: 0.75rem;
  }

  #rules {
    display: none;
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    justify-content: space-between;
    padding: 0 2rem;

    span {
      font-size: 1rem;
    }

    #rules {
      display: flex;
      gap: 20px;
    }
  }
`;