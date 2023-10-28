import styled from "styled-components";
import CartSVG from "../../assets/cart.svg";
import UserSVG from "../../assets/user.svg";
import { useContext } from "react";
import { StoreContext } from "../../App";

const NavbarContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.5rem;

  a {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const { setShowCart } = useContext(StoreContext);

  return (
    <NavbarContainer>
      <a onClick={() => setShowCart(true)}>
        <img src={CartSVG} />
      </a>
      <a>
        <img src={UserSVG} />
      </a>
    </NavbarContainer>
  );
};

export default Navbar;
