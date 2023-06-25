import React from "react";
import { SloganSection, SloganBig, SloganSmall } from "../styledComponents";

const Slogun = () => {
  return (
    <SloganSection>
      <SloganBig>I WANT YOUR ASSIGNMENT</SloganBig>
      <SloganSmall>니 과제 얼마면 돼</SloganSmall>
    </SloganSection>
  );
};

export default React.memo(Slogun); /* React.memo를 사용하여 리렌더링 방지 */
