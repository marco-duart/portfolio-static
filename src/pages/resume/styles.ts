import styled from "styled-components";
import { Education } from "@styled-icons/zondicons";
import { Briefcase } from "@styled-icons/ionicons-sharp";
import { Download } from "@styled-icons/boxicons-regular";
import * as CONSTANTS from "../../utils/constants/constants";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
    radial-gradient(circle at 10% 10%, rgba(0, 217, 255, 0.16), transparent 38%),
    radial-gradient(circle at 90% 90%, rgba(255, 0, 110, 0.14), transparent 42%),
    ${(props) => props.theme.colors.background};
  padding: 6rem 1rem 2.5rem 1rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    padding: 7rem 2rem 3rem 2rem;
  }
`;

export const PageTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-weight: 800;
  font-family: ${(props) => props.theme.fonts.poppins};
  font-size: clamp(1.9rem, 4vw, 3rem);
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 0.6rem;
`;

export const BasicInfo = styled.div`
  width: min(1100px, 100%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.7rem;
  margin-bottom: 2.2rem;

  @media ${CONSTANTS.DEVICE.mobileL} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${CONSTANTS.DEVICE.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const BasicInfoItem = styled.div`
  background: rgba(15, 52, 96, 0.58);
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 0.9rem;
  backdrop-filter: blur(6px);
  min-height: 96px;
`;

export const DownloadSection = styled.div`
  margin-top: 2.2rem;
  text-align: center;
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colors.background};
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.accent}
  );
  padding: 0.7rem 1.1rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.boxShadow.neon};
  }
`;

export const DownloadIcon = styled(Download)`
  margin-right: 0.5rem;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.background};
`;

export const ItemTitle = styled.h4`
  font-size: 0.82rem;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ItemDescription = styled.p`
  font-size: 0.93rem;
  margin: 0.45rem 0 0;
  color: ${(props) => props.theme.colors.text};
  word-break: break-word;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.accent};
      text-decoration: underline;
    }
  }
`;

export const Timeline = styled.div`
  width: min(1100px, 100%);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin: 0.5rem 0 1.5rem 0;

  @media ${CONSTANTS.DEVICE.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
  }
`;

export const TimelineWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.colors.primary}2e;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 1.4rem 0.9rem 1rem 0.9rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    padding: 1.6rem 1.1rem 1.1rem 1.1rem;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding: 0.9rem 0 0.9rem 0;
  border-left: 2px solid ${(props) => props.theme.colors.primary}66;
  margin-left: 1.1rem;
`;

export const EducationIcon = styled(Education)`
  color: ${(props) => props.theme.colors.background};
  width: 18px;
  height: 18px;
`;

export const ExperienceIcon = styled(Briefcase)`
  color: ${(props) => props.theme.colors.background};
  width: 18px;
  height: 18px;
`;

export const TimelineIconContainer = styled.div`
  position: absolute;
  left: 0.2rem;
  top: -0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.accent}
  );
  z-index: 1;
`;

export const TimelinePoint = styled.div`
  position: absolute;
  left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 0 3px ${(props) => props.theme.colors.backgroundSecondary};
`;

export const TimelineContent = styled.div`
  padding-left: 0.95rem;
`;

export const TimelineTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.3;
`;

export const TimelineSubtitle = styled.h5`
  font-size: 0.84rem;
  margin: 0.35rem 0;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 500;
`;

export const TimelineDescription = styled.p`
  font-size: 0.9rem;
  margin: 0.45rem 0 0;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.55;
`;

export const TechSection = styled.div`
  width: min(1100px, 100%);
  background: ${(props) => props.theme.colors.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.colors.primary}2e;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 1rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    padding: 1.2rem;
  }
`;

export const TechTitle = styled.h3`
  font-size: 1.06rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary}55;
  padding-bottom: 0.45rem;
  color: ${(props) => props.theme.colors.text};
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: flex-start;

  @media ${CONSTANTS.DEVICE.tablet} {
    gap: 0.85rem;
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  padding: 0.65rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary}22;

  @media ${CONSTANTS.DEVICE.tablet} {
    width: 160px;
  }
`;

export const TechName = styled.span`
  font-size: 0.84rem;
  margin-bottom: 0.35rem;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

export const SummaryCard = styled.section`
  width: min(1100px, 100%);
  background: rgba(15, 52, 96, 0.62);
  border: 1px solid ${(props) => props.theme.colors.primary}3d;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 1rem;
  margin-bottom: 1.4rem;

  @media ${CONSTANTS.DEVICE.tablet} {
    padding: 1.2rem;
  }
`;

export const SummaryTitle = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.45rem;
`;

export const SummaryText = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 0.94rem;
  line-height: 1.65;
`;