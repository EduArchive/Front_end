import React from "react";
import { TitleBig, TitleSmall, TitleLogoDiv } from "../styledComponents";

const HeaderTitle = ({ goHome }) => {
  return (
    <>
      <TitleLogoDiv onClick={goHome}>
        <TitleBig>니꺼, 내꺼</TitleBig>
        <TitleSmall>메인 페이지</TitleSmall>
      </TitleLogoDiv>
    </>
  );
};

export default React.memo(HeaderTitle);
