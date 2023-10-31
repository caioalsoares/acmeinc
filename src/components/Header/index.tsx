import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer } from "./style";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Link to="./">acme inc.</Link>
        </LogoContainer>
        <Navbar />
      </HeaderContainer>
    </>
  );
};

export default Header;
