import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FooterDiv, FooterBig, FooterSmall } from "../styledComponents";

const Footer = () => {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>복커톤</FooterBig>
      <FooterSmall>2023. by 멋사 1조 </FooterSmall>
    </FooterDiv>
  );
};

export default Footer;
