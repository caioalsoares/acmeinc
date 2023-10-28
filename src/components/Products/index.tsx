import styled from "styled-components";
import Product from "../Product";

const ProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  align-items: center;
  max-width: 1100px;
  margin: 0px auto;
  gap: 1rem;
`;

const Products = () => {
  return (
    <ProductsContainer>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductsContainer>
  );
};

export default Products;
