import styled from "styled-components";
import Product from "../Product";
import { useContext } from "react";
import { StoreContext } from "../../App";

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 1rem;
`;

const SimilarTitle = styled.h1`
  font-size: large;
  padding:1rem 0 1rem 0rem;

  font-family: "Alumni Sans", sans-serif;
`

interface ProductsProps {
  similar: boolean
}
const Products = ({ similar }: ProductsProps) => {

  const { store } = useContext(StoreContext)

  const similarProducts = store.map((item, index) => index < 4 && <Product key={item.id} item={item} />)
  const allProducts = store.map((item) => <Product key={item.id} item={item} />)



  return (<>  {similar && <SimilarTitle>produtos que você pode gostar</SimilarTitle>}

    <ProductsContainer>
      {similar ? similarProducts : allProducts}
    </ProductsContainer>
  </>);
};

export default Products;
