import { useContext } from "react";
import { CartContext, StoreContext } from "../../App";
import Products from "../Products";
import { Typography } from "../LayoutItem/style";
import { CartButton, FavoriteButton } from "../Common";
import { useParams } from "react-router-dom";
import {
  ProductsContainer,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductBuy,
} from "./styles";

const ProductDetails = () => {
  const { store, dispatchCart } = useContext(StoreContext);
  const cart = useContext(CartContext);

  const { id } = useParams();

  const isOnCart: boolean = !!(
    id && cart.find((item) => item.id == parseInt(id))
  );

  const product = id && store.find((item) => item.id == parseInt(id));

  return (
    product && (
      <>
        <ProductsContainer>
          <ProductImage>
            <img src={product.img} width={500} />
          </ProductImage>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>
            R$
            <Typography fontSize="24px" fontWeight="600">
              {product.price}
            </Typography>
          </ProductPrice>
          <ProductBuy>
            <CartButton
              onClick={() => dispatchCart({ type: "add", item: product })}
              disabled={isOnCart}
            >
              {isOnCart ? "no carrinho" : "adicionar ao carrinho"}
            </CartButton>
            <FavoriteButton
              isFavorite={product.favorite}
              fill="black"
              itemId={product.id}
            />
          </ProductBuy>
        </ProductsContainer>
        <Products type="similar" />
      </>
    )
  );
};

export default ProductDetails;
