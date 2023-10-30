import styled from "styled-components";
import { useContext } from "react";
import { StoreContext } from "../../App";
import Products from "../Products";
import { Typography } from "../LayoutItem/style";
import { CartButton, FavoriteButton } from "../Common";
import { StoreItem } from "../../api";


const ProductsContainer = styled.main`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas: 
  "image name"
  "image price"
  "image description"
  "image buy"
  ;

  gap: 1rem;
`;

const ProductImage = styled.figure`
    grid-area: image;
    & img {
        border-radius: 0.5rem;
    }
`
const ProductName = styled.h1`
    grid-area: name;
    font-size: large;
`
const ProductDescription = styled.div`
    grid-area: description;

`

const ProductPrice = styled.div`
    grid-area: price;
`

const ProductBuy = styled.div`
    grid-area: buy;
    justify-self: right;
    display: flex;
    gap: 1rem;

    & svg {
        fill: #000;
    }

`
const ProductDetails = () => {

    const { store, dispatchCart } = useContext(StoreContext)

    const product: StoreItem = store[0]

    return (
        <>
            <ProductsContainer>
                <ProductImage><img src={product.img} width={500} /></ProductImage>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>R$<Typography fontSize="24px" fontWeight="600">{product.price}</Typography></ProductPrice>
                <ProductBuy><CartButton onClick={() => dispatchCart({ type: "add", item: product })}>adicionar ao carrinho</CartButton>                    <FavoriteButton isFavorite={product.favorite} itemId={product.id} />
                </ProductBuy>
            </ProductsContainer >
            <Products similar />
        </>
    )

}

export default ProductDetails