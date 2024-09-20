//NATIVE
//LIBRARIES
import { Outlet } from "react-router-dom";

//COMPONENTS
import Footer from "../common/footer";
import Header from "../common/header";

//STYLES
import * as S from "./styles";

//UTILS

const BaseLayout = () => {
  return (
    <S.Container>
      <div>
        <Header />
      </div>
      <S.ContentSection>
        <Outlet />
      </S.ContentSection>
      <div>
        <Footer />
      </div>
    </S.Container>
  );
};

export default BaseLayout;
