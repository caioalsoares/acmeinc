import styled from "styled-components";
import CartSVG from "../../assets/cart.svg";
import UserSVG from "../../assets/user.svg";

const NavbarContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.5rem;

  a {
    padding: 0.5rem;
    cursor: pointer;
  }

  a:hover {
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <a>
        <img src={CartSVG} />
      </a>
      <a>
        <img src={UserSVG} />
      </a>
    </NavbarContainer>
  );
};

export default Navbar;
