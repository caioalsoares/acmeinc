import CloseSVG from "../../assets/close.svg";
import { useContext } from "react";
import { CartContext, StoreContext } from "../../App";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardTitle,
  ProductCardPrice,
  CartContainer,
  CartHeader,
  CartTitle,
  ProductsContainer,
  CloseButton,
  Total,
  Remove,
  EmptyWarning,
} from "./style";
import { Typography } from "../LayoutItem/style";
import { StoreItem } from "../../api";
import { CartButton, Wrapper } from "../Common";
import MinusSVG from "../../assets/minus.svg";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  item: StoreItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const { dispatchCart } = useContext(StoreContext);
  return (
    <ProductCardContainer>
      <ProductCardImage>
        <img src={item.img} width={50} />
      </ProductCardImage>
      <ProductCardTitle>{item.name}</ProductCardTitle>
      <ProductCardPrice>R$ {item.price}</ProductCardPrice>
      <Remove onClick={() => dispatchCart({ type: "remove", item })}>
        <img src={MinusSVG} />
      </Remove>
    </ProductCardContainer>
  );
};

const Cart = () => {
  const { showCart, setShowCart, isLogged } = useContext(StoreContext);
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/acmeinc/result");
  };
  const handleCheckoutLogin = () => {
    setShowCart(false);
    navigate("/acmeinc/login");
  };

  const total =
    cart.length &&
    cart
      .map((item) => +item.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue);

  return (
    <Wrapper $show={showCart}>
      <CartContainer>
        <CartHeader>
          <CloseButton src={CloseSVG} onClick={() => setShowCart(false)} />
          <CartTitle>Itens no carrinho</CartTitle>
        </CartHeader>
        {cart.length ? (
          <ProductsContainer>
            {cart.map((item: StoreItem) => (
              <ProductCard item={item} key={item.id} />
            ))}

            {!!total && (
              <Total>
                <Typography fontWeight="600" fontSize="14px">
                  Total:
                </Typography>
                <Typography fontSize="18px">R${total.toFixed(2)}</Typography>
              </Total>
            )}
          </ProductsContainer>
        ) : (
          <EmptyWarning>
            Seu carrinho está vazinho. Continue comprando!
          </EmptyWarning>
        )}
        {!!cart.length && (
          <CartButton
            onClick={() =>
              isLogged ? handleCheckout() : handleCheckoutLogin()
            }
          >
            {isLogged ? "finalizar compra" : "fazer login"}
          </CartButton>
        )}
      </CartContainer>
    </Wrapper>
  );
};

export default Cart;
