import styled from "styled-components";
import FavSVG from "../../assets/fav.svg";

const ProductContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  max-width: 250px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  position: relative;
`;

const ProductInfoContainer = styled.div`
  padding: 0.75rem;
  display: grid;
  grid-template-areas:
    "title price"
    "details price";
`;

const ProductTitle = styled.div`
  font-weight: 600;
  grid-area: title;
`;
const ProductDetails = styled.a`
  font-weight: 300;
  font-size: 12px;
  text-decoration: underline;
  color: black;
  grid-area: details;
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

const Product = () => {
  return (
    <ProductContainer>
      <img src="https://picsum.photos/250/250" />
      <Favorite>
        <img src={FavSVG} />
      </Favorite>
      <ProductInfoContainer>
        <ProductTitle>Navio Legítimo</ProductTitle>
        <ProductDetails href="#">ver detalhes</ProductDetails>
        <Price>R$1694</Price>
      </ProductInfoContainer>
    </ProductContainer>
  );
};

export default Product;
