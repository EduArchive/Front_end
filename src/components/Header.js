import { HeaderDiv, SubHeaderDiv } from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "./HeaderTitle";
import { useNavigate } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

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
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} onClick={toggleDarkMode} />
          ) : (
            <FontAwesomeIcon icon={faMoon} onClick={toggleDarkMode} />
          )}
        </SubHeaderDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
