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
  min-height: 92vh;
  background-color: ${(props) =>
    props.activeSection === "front"
      ? "#ff4d4d"
      : props.activeSection === "back"
      ? "#007bff"
      : props.theme.colors.secundary};
  overflow: hidden;
  padding: 1.5rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${CONSTANTS.DEVICE.tablet} {
    min-height: 92vh;
    padding: 2rem 0;
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
  flex-direction: row;
  gap: 1.5rem;
  max-width: 100%;

  @media ${CONSTANTS.DEVICE.tablet} {
    flex-direction: column;
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
  width: 94%;
  height: 40vh;
  min-height: 280px;
  max-height: 440px;
  display: flex;
  overflow: hidden;

  @media ${CONSTANTS.DEVICE.tablet} {
    width: 80%;
    height: 62vh;
    min-height: 460px;
    max-height: 720px;
  }
`;

export const SkillsTitleContainer = styled.div`
  min-height: 72px;
  display: flex;
  align-items: center;

  @media ${CONSTANTS.DEVICE.tablet} {
    min-height: 15%;
    align-items: flex-end;
  }
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

export const SkillsInfoMobile = styled.div`
  width: 94%;
  margin-top: 1rem;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid ${(props) => props.theme.colors.primary}66;
  border-radius: 14px;
  padding: 0.9rem;

  h3 {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    display: none;
  }
`;

export const SkillsMobileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.6rem;
`;

export const SkillsMobileCard = styled.div`
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: 10px;
  padding: 0.55rem 0.35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  min-height: 86px;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 0.68rem;
    text-align: center;
    line-height: 1.2;
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
    display: none;
  }

  ${StyledIconBase} {
    width: 28px;
    height: 28px;
    color: ${(props) => props.theme.colors.primary};
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    ${StyledIconBase} {
      width: 40px;
      height: 40px;
    }

    div {
      display: block;
      color: ${(props) => props.theme.colors.primary};
      font-family: ${(props) => props.theme.fonts.poppins};
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

export const ProfileSection = styled.section`
  width: 100%;
  min-height: 92vh;
  padding: 2.2rem 1rem;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(0, 217, 255, 0.16),
      transparent 40%
    ),
    radial-gradient(circle at 85% 80%, rgba(255, 0, 110, 0.14), transparent 42%),
    ${(props) => props.theme.colors.secundary};

  @media ${CONSTANTS.DEVICE.tablet} {
    padding: 3.5rem 2rem;
  }
`;

export const ProfileTabs = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto 1rem auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const ProfileTabButton = styled.button<{ active: boolean }>`
  border: 1px solid
    ${(props) =>
      props.active
        ? props.theme.colors.primary
        : `${props.theme.colors.primary}44`};
  background: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.background};
  color: ${(props) =>
    props.active ? props.theme.colors.background : props.theme.colors.white};
  padding: 0.7rem 0.8rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${(props) => props.theme.boxShadow.neon};
  }

  @media ${CONSTANTS.DEVICE.tablet} {
    font-size: 0.92rem;
  }
`;

export const ProfileSpotlight = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(10, 16, 34, 0.82);
  backdrop-filter: blur(8px);

  @media ${CONSTANTS.DEVICE.tablet} {
    grid-template-columns: minmax(260px, 0.9fr) 1.4fr;
    gap: 0;
  }
`;

export const ProfileSpotlightVisual = styled.div`
  position: relative;
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background: linear-gradient(165deg, #0f1f42, #142f56);

  @media ${CONSTANTS.DEVICE.tablet} {
    min-height: 420px;
  }
`;

export const ProfileHalo = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${(props) => props.theme.colors.primary}88,
    transparent 70%
  );
  filter: blur(8px);
`;

export const ProfileSpotlightImage = styled.img`
  width: min(74%, 260px);
  height: auto;
  object-fit: contain;
  z-index: 1;
  filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.35));
`;

export const ProfileSpotlightContent = styled.div`
  padding: 1.1rem 1rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    padding: 2rem;
    gap: 0.95rem;
  }
`;

export const ProfileMiniLabel = styled.span`
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-size: 0.7rem;
  font-weight: 700;
`;

export const ProfileMainTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.35rem;
  line-height: 1.2;

  @media ${CONSTANTS.DEVICE.tablet} {
    font-size: 2rem;
  }
`;

export const ProfileMainCode = styled.div`
  display: inline-flex;
  width: fit-content;
  padding: 0.34rem 0.7rem;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.accent};
  font-weight: 700;
  font-size: 0.85rem;
`;

export const ProfileMainDescription = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.95;

  @media ${CONSTANTS.DEVICE.tablet} {
    font-size: 1.02rem;
  }
`;

export const ProfileMetrics = styled.div`
  display: grid;
  gap: 0.6rem;
  grid-template-columns: 1fr;
  margin-top: 0.2rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }
`;

export const ProfileMetricCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  background: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.34rem;

  strong {
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;
