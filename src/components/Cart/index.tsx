import CloseSVG from "../../assets/close.svg";
import { useContext } from "react";
import { CartContext, StoreContext } from "../../App";
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
  CloseButton,
  Total,
} from "./style";
import { Typography } from "../LayoutItem/style";
import { StoreItem } from "../../api";
import { CartButton } from "../Common";
import MinusSVG from "../../assets/minus.svg"

interface ProductCardProps {
  item: StoreItem
}

const ProductCard = ({ item }: ProductCardProps) => {

  const { dispatchCart } = useContext(StoreContext)
  return (
    <ProductCardContainer>
      <ProductCardImage>
        <img src={item.img} width={50} />
      </ProductCardImage>
      <ProductCardTitle>{item.name}</ProductCardTitle>
      <ProductCardPrice>R$ {item.price}</ProductCardPrice>
      <a onClick={() => dispatchCart({ type: "remove", item })}><img src={MinusSVG} /></a>

    </ProductCardContainer>
  );
};

const Cart = () => {
  const { showCart, setShowCart } = useContext(StoreContext);
  const cart = useContext(CartContext)

  const total = cart.length && cart.map((item) => +item.price).reduce((accumulator, currentValue) => accumulator + currentValue)

  console.log(total)

  return (
    <CartWrapper $show={showCart}>
      <CartContainer>
        <CartHeader>
          <CloseButton src={CloseSVG} onClick={() => setShowCart(false)} />
          <CartTitle>Itens no carrinho</CartTitle>
        </CartHeader>
        <ProductsContainer>
          {cart.map((item: StoreItem) => <ProductCard item={item} key={item.id} />)}

          {!!total &&
            <Total>
              <Typography fontWeight="600" fontSize="14px">Total:</Typography>
              <Typography fontSize="18px">R${total.toFixed(2)}</Typography>
            </Total>
          }
        </ProductsContainer>
        <CartButton>finalizar compra</CartButton>
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
