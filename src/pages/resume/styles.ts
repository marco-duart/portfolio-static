import styled from "styled-components";
import { Education } from "@styled-icons/zondicons";
import { Briefcase } from "@styled-icons/ionicons-sharp";
import { Download } from "@styled-icons/boxicons-regular";
import * as CONSTANTS from "../../utils/constants/constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.secundary};
  overflow: hidden;
  padding: 2rem 0;
`;

export const PageTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.playWrite};
  font-size: 2.5rem;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

export const BasicInfoItem = styled.div`
  margin-bottom: 1rem;
`;

export const DownloadSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const DownloadIcon = styled(Download)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export const ItemTitle = styled.h4`
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
  color: ${(props) => props.theme.colors.gray};
`;

export const Timeline = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 2rem;
  margin: 2rem 0;
`;

export const TimelineWrapper = styled.div`
  position: relative;
`;

export const TimelineItem = styled.div`
  position: relative;
  padding: 1rem 0;
  border-left: 2px solid ${(props) => props.theme.colors.gray};
  margin-left: 1.5rem;
`;

export const EducationIcon = styled(Education)`
  color: ${(props) => props.theme.colors.white};
  width: 32px;
  height: 32px;
`;

export const ExperienceIcon = styled(Briefcase)`
  color: ${(props) => props.theme.colors.white};
  width: 32px;
  height: 32px;
`;

export const TimelineIconContainer = styled.div`
  position: absolute;
  left: 10px;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const TimelinePoint = styled.div`
  position: absolute;
  left: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.white};
`;

export const TimelineContent = styled.div`
  padding-left: 1rem;
`;

export const TimelineTitle = styled.h4`
  font-size: 16px;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

export const TimelineSubtitle = styled.h5`
  font-size: 14px;
  margin: 5px 0;
  color: ${(props) => props.theme.colors.gray};
`;

export const TimelineDescription = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
  color: ${(props) => props.theme.colors.white};
`;

export const TechSection = styled.div`
  width: 80%;
  max-width: 800px;
`;

export const TechTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.colors.white};
  padding-bottom: 5px;
  color: ${(props) => props.theme.colors.white};
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${CONSTANTS.DEVICE.mobileS} {
    justify-content: center;
  }
  @media ${CONSTANTS.DEVICE.tablet} {
    justify-content: flex-start;
  }
  @media ${CONSTANTS.DEVICE.desktop} {
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
`;

export const TechName = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.white};
`;
