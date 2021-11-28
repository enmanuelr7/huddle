import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocial } from "./styled/Social.styled";

export default function Social() {
  return (
    <StyledSocial>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocial>
  );
}
