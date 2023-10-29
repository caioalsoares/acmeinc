import styled from "styled-components";
import Product from "../Product";
import { useContext } from "react";
import { StoreContext } from "../../App";

const ProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  align-items: center;
  max-width: 1100px;
  margin: 0px auto;
  gap: 1rem;
`;

const Products = () => {

  const { store } = useContext(StoreContext)

  return (
    <ProductsContainer>
      {store.map((item) => <Product key={item.id} item={item} />
      )}
    </ProductsContainer>
  );
};

export default Products;
