import backgroundEffect1 from "../../assets/images/background-effect-1.png";
import backgroundEffect2 from "../../assets/images/background-effect-2.png";
import iconWhite from "../../assets/images/icon-white.png";
import iconBlack from "../../assets/images/icon-black.png";
import logoWhite from "../../assets/images/logo-white.png";
import logoBackgroundBlack from "../../assets/images/logo-background-black.png";
import frontEnd from "../../assets/images/front-end.png";
import backEnd from "../../assets/images/back-end.png";
import contact from "../../assets/images/contact.png";
import personality from "../../assets/images/personality.png";
import enneagram from "../../assets/images/enneagram.png";
import temperament from "../../assets/images/temperament.png";
import disc from "../../assets/images/disc.png";

// Mobile-First Breakpoints + backward compatibility
export const SIZES = {
  // New naming
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1920,

  // Legacy naming (used across existing components)
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  desktop: 1024,
  fullHd: 1920,
};

// Media Query Helpers
export const DEVICE = {
  // Min-width approach (mobile-first)
  xs: `(min-width: ${SIZES.xs}px)`,
  sm: `(min-width: ${SIZES.sm}px)`,
  md: `(min-width: ${SIZES.md}px)`,
  lg: `(min-width: ${SIZES.lg}px)`,
  xl: `(min-width: ${SIZES.xl}px)`,
  xxl: `(min-width: ${SIZES.xxl}px)`,

  // Legacy naming (kept to avoid breaking existing styles)
  mobileS: `(min-width: ${SIZES.mobileS}px)`,
  mobileM: `(min-width: ${SIZES.mobileM}px)`,
  mobileL: `(min-width: ${SIZES.mobileL}px)`,
  tablet: `(min-width: ${SIZES.tablet}px)`,
  desktop: `(min-width: ${SIZES.desktop}px)`,
  fullHd: `(min-width: ${SIZES.fullHd}px)`,
  
  // Max-width helpers (útil para max-width queries)
  smMax: `(max-width: ${SIZES.sm - 1}px)`,
  mdMax: `(max-width: ${SIZES.md - 1}px)`,
  lgMax: `(max-width: ${SIZES.lg - 1}px)`,
  xlMax: `(max-width: ${SIZES.xl - 1}px)`,
};

export const IMAGES = {
  backgroundEffect1,
  backgroundEffect2,
  iconWhite,
  iconBlack,
  logoWhite,
  logoBackgroundBlack,
  frontEnd,
  backEnd,
  contact,
  personality,
  enneagram,
  temperament,
  disc,
};
