import { StyledHeader } from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="Logo Movie Box" />
      </Link>
    </StyledHeader>
  );
};
