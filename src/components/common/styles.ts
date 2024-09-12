import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as CONSTANTS from "../../utils/constants/constants";

// HEADER
export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  padding: 0 4rem;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 4;

  @media ${CONSTANTS.DEVICE.mobileS} {
    justify-content: center;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    justify-content: space-around;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    justify-content: space-between;
  }
`;

export const Navbar = styled.header`
  display: flex;
  gap: 25px;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    text-shadow: 0 0 10px ${(props) => props.theme.colors.primary},
      0 0 20px ${(props) => props.theme.colors.primary},
      0 0 30px ${(props) => props.theme.colors.primary};
  }
  &.active {
    color: ${(props) => props.theme.colors.primary};
    text-shadow: 0 0 10px ${(props) => props.theme.colors.primary},
      0 0 20px ${(props) => props.theme.colors.primary},
      0 0 30px ${(props) => props.theme.colors.primary};
  }
`;

export const HeaderScrool = styled.div<{ mobile: boolean }>`
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    text-shadow: 0 0 10px ${(props) => props.theme.colors.primary},
      0 0 20px ${(props) => props.theme.colors.primary},
      0 0 30px ${(props) => props.theme.colors.primary};
  }
  &.active {
    color: ${(props) => props.theme.colors.primary};
    text-shadow: 0 0 10px ${(props) => props.theme.colors.primary},
      0 0 20px ${(props) => props.theme.colors.primary},
      0 0 30px ${(props) => props.theme.colors.primary};
  }

  @media ${CONSTANTS.DEVICE.mobileS} {
    display: ${(props) => (props.mobile ? "flex" : "none")};
    align-items: center;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    display: flex;
    align-items: center;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
  }
`;

// LOGO
export const Logo = styled.div`
  height: 20vh;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${CONSTANTS.DEVICE.mobileS} {
    display: none;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    display: block;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    display: block;
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
  gap: 30px;

  span {
    display: flex;
    gap: 10px;
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

  @media ${CONSTANTS.DEVICE.mobileS} {
    div {
      width: 30px;
      height: 30px;
    }
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    div {
      width: 40px;
      height: 40px;
    }
  }
`;

export const FooterEnd = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.openSans};
  color: ${(props) => props.theme.colors.lightGray};

  a {
    color: ${(props) => props.theme.colors.white};
  }

  @media ${CONSTANTS.DEVICE.mobileS} {
    justify-content: center;

    span {
      font-size: 0.75rem;
    }
    #rules {
      display: none;
    }
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    justify-content: space-between;
    gap: 2rem;

    span {
      font-size: 1rem;
    }
    #rules {
      display: flex;
      gap: 20px;
    }
  }
  @media ${CONSTANTS.DEVICE.desktop} {
  }
`;
