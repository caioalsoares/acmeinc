import styled from "styled-components";
import { StoreItem } from "../../api";
import { useContext } from "react";
import { StoreContext } from "../../App";
import { FavoriteButton } from "../Common";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  max-width: 250px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  position: relative;
`;

const ProductInfoContainer = styled.div`
  padding: 0.75rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "title price"
    "details price";
`;

const ProductTitle = styled.div`
  font-weight: 600;
  grid-area: title;
`;
const ProductDetails = styled.div`
  font-weight: 300;
  font-size: 12px;
  text-decoration: underline;
  color: black;
  grid-area: details;

  & a {
    color: black;
  }
`;
const Favorite = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

`;

const Price = styled.div`
  grid-area: price;
  display: flex;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-size: 18px;
`;

interface ProductsProps {
  item: StoreItem
}

const Product = ({ item }: ProductsProps) => {

  const { dispatchCart } = useContext(StoreContext)
  return (
    <ProductContainer>
      <img src={item.img} />
      <Favorite>
        <FavoriteButton isFavorite={item.favorite} itemId={item.id} />
      </Favorite>
      <ProductInfoContainer>
        <ProductTitle>{item.name}</ProductTitle>
        <a onClick={() => dispatchCart({ type: "add", item })}>adicionar</a>
        <ProductDetails><Link to={`/acmeinc/produto/${item.id}`} >ver detalhes</Link></ProductDetails>
        <Price>R${item.price}</Price>
      </ProductInfoContainer >

    </ProductContainer >
  );
};

export default Product;
