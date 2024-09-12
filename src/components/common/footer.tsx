//NATIVE
//LIBRARIES
import {
  FacebookCircle,
  InstagramAlt,
  Google,
  LinkedinSquare,
  Youtube,
} from "@styled-icons/boxicons-logos";
//COMPONENTS
//STYLES
import { Link } from "react-router-dom";
import * as S from "./styles";
//UTILS
import { useUserBio } from "../../hooks";

const Footer = () => {
  const { user } = useUserBio()
  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterList>
          <span>
            <a href={user?.facebook} target="_blank">
              <div>
                <FacebookCircle />
              </div>
            </a>{" "}
            <a href={user?.linkedin} target="_blank">
              <div>
                <LinkedinSquare />
              </div>
            </a>
            <a href={user?.google} target="_blank">
              <div>
                <Google />
              </div>
            </a>{" "}
            <a href={user?.instagram} target="_blank">
              <div>
                <InstagramAlt />
              </div>
            </a>{" "}
            <a href={user?.youtube} target="_blank">
              <div>
                <Youtube />
              </div>
            </a>
          </span>
        </S.FooterList>
      </S.FooterContent>
      <S.FooterEnd>
        <span>
          &copy; {year} - Marco Aurélio. Todos os
          direitos reservados
        </span>
        <span id="rules">
          <Link to="/use-terms">Termos de Uso</Link>
          <Link to="/privacy">Política de Privacidade</Link>
        </span>
      </S.FooterEnd>
    </S.Footer>
  );
};

export default Footer;
