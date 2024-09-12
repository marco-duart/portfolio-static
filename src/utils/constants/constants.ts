import backgroundEffect1 from "../../assets/images/background-effect-1.png"
import backgroundEffect2 from "../../assets/images/background-effect-2.png"
import iconWhite from "../../assets/images/icon-white.png"
import iconBlack from "../../assets/images/icon-black.png"
import logoWhite from "../../assets/images/logo-white.png"
import logoBackgroundBlack from "../../assets/images/logo-background-black.png"
import frontEnd from "../../assets/images/front-end.png"
import backEnd from "../../assets/images/back-end.png"
import about from "../../assets/images/about.png"
import contact from "../../assets/images/contact.png"

const SIZES = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  desktop: '1024px',
};

export const DEVICE = {
  mobileS: `(min-width: ${SIZES.mobileS})`,
  mobileM: `(min-width: ${SIZES.mobileM})`,
  mobileL: `(min-width: ${SIZES.mobileL})`,
  tablet: `(min-width: ${SIZES.tablet})`,
  desktop: `(min-width: ${SIZES.desktop})`,
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
  about,
  contact,
}
