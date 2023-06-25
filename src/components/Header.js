import { HeaderDiv, SubHeaderDiv } from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "./HeaderTitle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/main");
  };

  return (
    <>
      <HeaderDiv>
        <HeaderTitle goHome={goHome} />

        <SubHeaderDiv>
          <div>
            <div>이름 : 장세환</div>
            <div>포인트: 500p</div>
          </div>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </SubHeaderDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
