//NATIVE
//LIBRARIES

//COMPONENTS

//STYLES
import * as S from "./styles";
//UTILS
import * as CONSTANTS from "../../utils/constants/constants";

const Logo: React.FC = () => {
  return (
    <S.Logo>
      <img src={CONSTANTS.IMAGES.logoWhite} alt="" />
    </S.Logo>
  );
};

export default Logo;
