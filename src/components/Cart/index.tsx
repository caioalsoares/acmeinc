import CloseSVG from "../../assets/close.svg";
import { useContext } from "react";
import { StoreContext } from "../../App";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardTitle,
  ProductCardPrice,
  CartWrapper,
  CartContainer,
  CartHeader,
  CartTitle,
  ProductsContainer,
  CartButton,
  CloseButton,
  Total,
} from "./style";
import { Typography } from "../LayoutItem/style";

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <ProductCardImage>
        <img src="https://picsum.photos/50" />
      </ProductCardImage>
      <ProductCardTitle>Noia noiado</ProductCardTitle>
      <ProductCardPrice>R$ 420</ProductCardPrice>
    </ProductCardContainer>
  );
};

const Cart = () => {
  const { showCart, setShowCart } = useContext(StoreContext);

  return (
    <CartWrapper $show={showCart}>
      <CartContainer>
        <CartHeader>
          <CloseButton src={CloseSVG} onClick={() => setShowCart(false)} />
          <CartTitle>Itens no carrinho</CartTitle>
        </CartHeader>
        <ProductsContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <Total><Typography fontWeight="600" fontSize="14px">Total:</Typography> <Typography fontSize="18px">R$4500</Typography></Total>
        </ProductsContainer>
        <CartButton>finalizar compra</CartButton>
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
