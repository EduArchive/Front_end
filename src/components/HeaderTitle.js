import React from "react";
import { TitleBig, TitleSmall, TitleLogoDiv } from "../styledComponents";

const HeaderTitle = ({ goHome }) => {
  return (
    <>
      <TitleLogoDiv onClick={goHome}>
        <TitleBig>니꺼내꺼</TitleBig>
        <TitleSmall>구매 게시판</TitleSmall>
      </TitleLogoDiv>
    </>
  );
};

export default React.memo(HeaderTitle);
