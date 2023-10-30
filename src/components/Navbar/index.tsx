import styled from "styled-components";
import CartSVG from "../../assets/cart.svg";
import UserSVG from "../../assets/user.svg";
import { useContext } from "react";
import { CartContext, StoreContext } from "../../App";

const NavbarContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.5rem;

  a {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const CartIcon = styled.span`
  position: relative;
  padding: 10px;
`
const CartQuantity = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
  border-radius: 50%;
  padding:2px;
  height: 14px;
  width: 14px;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  font-size: 10px;
`
const Navbar = () => {
  const { setShowCart } = useContext(StoreContext);
  const cart = useContext(CartContext)



  return (
    <NavbarContainer>
      <a onClick={() => setShowCart(true)}>
        <CartIcon><img src={CartSVG} />
          {!!cart.length && (<CartQuantity>{cart.length > 9 ? "9+" : cart.length}</CartQuantity>)}
        </CartIcon>
      </a>
      <a>
        <img src={UserSVG} />
      </a>
    </NavbarContainer>
  );
};

export default Navbar;
