import styled from "styled-components";
import Navbar from "../Navbar";

const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  position: sticky;
  top:0;
  backdrop-filter: blur(5px) saturate(300%);
  justify-content: space-between;
  z-index: 1;
`;

const LogoContainer = styled.figure`
  font-family: "Alumni Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>acme inc.</LogoContainer>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
