import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as CONSTANTS from "../../utils/constants/constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;

  @media ${CONSTANTS.DEVICE.mobileS} {
    width: 100vw;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    height: 92vh;
    width: 100vw;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    height: 92vh;
    width: 100vw;
  }
`;

export const SkillsContainer = styled.div<{ bgColor?: string }>`
  width: 100vw;
  height: 92vh;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;

  @media ${CONSTANTS.DEVICE.mobileS} {
    display: none;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
  }
`;

export const TitleContainer = styled.div`
  height: 15%;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.playWrite};
  font-size: 2.5rem;

  @media ${CONSTANTS.DEVICE.mobileS} {
    margin-bottom: 1rem;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    margin-bottom: 0;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
  }
`;

export const FlexContainer = styled.div`
  width: 70%;
  display: flex;

  @media ${CONSTANTS.DEVICE.mobileS} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${CONSTANTS.DEVICE.mobileS} {
    gap: 0.5rem;
    max-width: 100%;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    gap: 1.5rem;
    max-width: 60%;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    gap: 2rem;
    max-width: 60%;
  }
`;

export const SubtitleBlock = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;

  @media ${CONSTANTS.DEVICE.mobileS} {
    text-align: center;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    text-align: left;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    text-align: left;
  }
`;

export const TextBlock = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.6;

  @media ${CONSTANTS.DEVICE.mobileS} {
    width: 100%;
    text-align: center;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    width: 55%;
    text-align: left;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    width: 55%;
    text-align: left;
  }
`;

export const PortraitWrapper = styled.div`
  position: relative;
  transform: rotate(0deg);

  @media ${CONSTANTS.DEVICE.mobileS} {
    width: 50%;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    width: 30%;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    width: 30%;
  }
`;

export const ContactPortraitWrapper = styled.div`
  position: relative;
  transform: rotate(0deg);

  @media ${CONSTANTS.DEVICE.mobileS} {
    display: none;
    width: 50%;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    display: block;
    width: 30%;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    width: 30%;
  }
`;

export const PortraitImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
`;

export const PortraitOverlay = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(18, 246, 214, 0.3),
    rgba(18, 246, 214, 0.5)
  );
  border-radius: 15px;
  z-index: -1;
  transform: rotate(5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const SkillsImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 85%;
  display: flex;
  overflow: hidden;
`;

export const SkillsImageWrapper = styled(motion.div)<{
  side: "left" | "right";
  active: boolean;
  initialState: boolean;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  ${(props) => (props.side === "left" ? "left: 0;" : "right: 0;")}
  clip-path: ${(props) =>
    props.active
      ? "inset(0 0 0 0)"
      : props.initialState
      ? props.side === "left"
        ? "inset(0 50% 0 0)"
        : "inset(0 0 0 50%)"
      : "inset(0 100% 0 0)"};
  transform: ${(props) =>
    props.active
      ? `translateX(${props.side === "left" ? "-30%" : "30%"}) scale(1)`
      : "translateX(0%) scale(1)"};
  transition: transform 0.3s ease, clip-path 0.3s ease;
  z-index: ${(props) => (props.active ? 2 : 1)};
`;

export const SkillsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SkillsInfo = styled.div<{ activeSection: "front" | "back" }>`
  max-width: 40%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.activeSection === "front" ? "right: 10%;" : "left: 10%;")}
  color: #fff;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  animation: fadeIn 0.3s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const SkillInfoIconWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover div {
    visibility: visible;
    opacity: 1;
  }
`;

export const SkillInfoIcon = styled.img`
  width: 4rem;
`;

export const Tooltip = styled.div`
  visibility: hidden;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.secundary} transparent
      transparent transparent;
  }
`;

export const IconBlock = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  div {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.poppins};
    font-size: 1.25rem;
  }

  ${StyledIconBase} {
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const PortfolioCardContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 1rem 2rem;
  margin-top: 2rem;

  @media ${CONSTANTS.DEVICE.mobileS} {
    flex-wrap: nowrap;
    overflow: scroll;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    justify-content: center;
    flex-wrap: wrap;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    flex-wrap: wrap;
  }
`;

export const PortfolioCardWrapper = styled.div`
  width: 320px;
  height: 230px;
  background-image: linear-gradient(
    163deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.tertiary} 100%
  );
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export const PortfolioCard = styled.div`
  width: 320px;
  height: 230px;
  background-color: #1a1a1a;
  border-radius: 10px;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h4 {
    color: ${(props) => props.theme.colors.white};
  }

  img {
    width: 90%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const DescriptionSection = styled.div`
  width: 40%;

  table {
    width: 80%;
  }

  @media ${CONSTANTS.DEVICE.mobileS} {
    display: none;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    display: flex;
    flex-direction: column;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const TableRow = styled.td`
  vertical-align: top;
  padding: 0 0 1rem 1rem;
`;

export const CarouselSection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media ${CONSTANTS.DEVICE.mobileS} {
    max-width: 98%;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    max-width: 60%;
    max-height: 80%;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
  }
`;

export const CarouselItem = styled.div`
  background-color: #181818;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 4px solid #85858589;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;

  .control-arrow {
    opacity: 1 !important;
    visibility: visible !important;
    background-color: #85858589 !important;
  }
`;
