import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as CONSTANTS from "../../utils/constants/constants";

interface ActiveProps {
  active?: boolean;
}

export const Container = styled.div`
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;
  width: 100vw;
`;

export const SkillsContainer = styled.div<{
  activeSection: "front" | "back" | null;
}>`
  width: 100vw;
  height: 92vh;
  background-color: ${(props) =>
    props.activeSection === "front"
      ? "#ff4d4d"
      : props.activeSection === "back"
      ? "#007bff"
      : props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;
  display: none;

  @media ${CONSTANTS.DEVICE.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
  margin-bottom: 1rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    margin-bottom: 0;
  }
`;

export const FlexContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
  }
`;

export const ContactFlexContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 100%;

  @media ${CONSTANTS.DEVICE.tablet} {
    gap: 1.5rem;
    max-width: 60%;
  }

  @media ${CONSTANTS.DEVICE.desktop} {
    gap: 2rem;
  }
`;

export const SubtitleBlock = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
  text-align: center;

  @media ${CONSTANTS.DEVICE.tablet} {
    text-align: left;
  }
`;

export const TextBlock = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.white};
  line-height: 1.6;
  width: 100%;
  text-align: center;

  @media ${CONSTANTS.DEVICE.tablet} {
    width: 55%;
    text-align: left;
  }
`;

export const PortraitWrapper = styled.div`
  position: relative;
  transform: rotate(0deg);
  width: 50%;

  @media ${CONSTANTS.DEVICE.tablet} {
    width: 30%;
  }
`;

export const ContactPortraitWrapper = styled.div`
  position: relative;
  transform: rotate(0deg);
  width: 50%;
  display: block;

  @media ${CONSTANTS.DEVICE.tablet} {
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

export const SkillsTitleContainer = styled.div`
  height: 15%;
  display: flex;
  align-items: flex-end;
`;

export const HintText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 1rem;
  opacity: 0.7;
  text-align: center;
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
  ${({ side }) => (side === "left" ? "left: 0;" : "right: 0;")}
  clip-path: ${({ active, initialState, side }) =>
    active
      ? "inset(0 0 0 0)"
      : initialState
      ? side === "left"
        ? "inset(0 50% 0 0)"
        : "inset(0 0 0 50%)"
      : "inset(0 100% 0 0)"};
  transform: ${({ active, side }) =>
    active
      ? `translateX(${side === "left" ? "-30%" : "30%"}) scale(1)`
      : "translateX(0%) scale(1)"};
  transition: transform 0.3s ease, clip-path 0.3s ease;
  z-index: ${({ active }) => (active ? 2 : 1)};
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
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.colors.primary};
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    ${StyledIconBase} {
      width: 40px;
      height: 40px;
    }

    div {
      font-size: 1.25rem;
    }
  }
`;

export const PortfolioCardContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 1rem 2rem;
  margin-top: 2rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.secundary};
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const PortfolioCardWrapper = styled.div`
  background-image: linear-gradient(
    163deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.tertiary} 100%
  );
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
  width: 220px;
  height: 158px;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  @media ${CONSTANTS.DEVICE.fullHd} {
    width: 320px;
    height: 230px;
  }
`;

export const PortfolioCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 220px;
  height: 158px;

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

  @media ${CONSTANTS.DEVICE.fullHd} {
    width: 320px;
    height: 230px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const DescriptionSection = styled.div`
  width: 40%;
  display: none;

  table {
    width: 80%;
  }

  @media ${CONSTANTS.DEVICE.tablet} {
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
  max-width: 98%;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    max-width: 60%;
    max-height: 80%;
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

export const ProfileGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  gap: 1rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    justify-content: center;
    padding: 1rem;
    gap: 1.5rem;
    width: 90%;
    max-width: 700px;
  }

  @media ${CONSTANTS.DEVICE.desktop} {
    max-width: 800px;
    gap: 2rem;
  }
`;

export const ProfileCard = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 1.25rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 120px;
  height: ${({ active }) => (active ? "auto" : "120px")};
  max-height: ${({ active }) => (active ? "500px" : "120px")};

  @media ${CONSTANTS.DEVICE.tablet} {
    width: 100%;
    min-height: 180px;
    height: ${({ active }) => (active ? "auto" : "180px")};
    max-height: ${({ active }) => (active ? "600px" : "180px")};
    padding: 1.5rem;
  }

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 117, 0.4);
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media ${CONSTANTS.DEVICE.tablet} {
    width: 100px;
    height: 100px;
    border-width: 4px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  max-height: ${({ active }) => (active ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  padding: ${({ active }) => (active ? "1rem 0" : "0")};
  gap: 0.5rem;
`;

export const ProfileName = styled.h4`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
`;

export const ProfileCode = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  font-weight: bold;
`;

export const ProfileDescription = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.875rem;
  margin: 0.5rem 0 0 0;
`;

export const TipText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-style: italic;
  margin-top: 2rem;
  opacity: 0.7;
  text-align: center;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const NavigationButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StepIndicator = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: bold;
`;
