import styled from "styled-components";
import { StoreItem } from "../../api";
import { FavoriteButton } from "../Common";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 100%;
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  position: relative;
  transition: 0.250s;

  &:hover {
    transform: scale(1.025);
  }
`;

const ProductInfoContainer = styled.div`
  padding: 0.75rem;
  display: grid;
  flex: 1;
  display: flex;
  gap:0.5rem;
`;

const ProductTitle = styled.div`
  font-weight: 600;
  flex: 1;
`;

const Favorite = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

`;

const Price = styled.div`
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

  return (

    <ProductContainer><Favorite>
      <FavoriteButton fill="white" isFavorite={item.favorite} itemId={item.id} />
    </Favorite><Link to={`/acmeinc/produto/${item.id}`} >
        <img src={item.img} width="100%" />

        <ProductInfoContainer>
          <ProductTitle>{item.name}</ProductTitle>
          <Price>R${item.price}</Price>
        </ProductInfoContainer >
      </Link>
    </ProductContainer >
  );
};

export default Product;
