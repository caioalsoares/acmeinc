import styled from "styled-components";
import Product from "../Product";
import { useContext } from "react";
import { StoreContext } from "../../App";
import { matchSorter } from "match-sorter";
import { useParams } from "react-router-dom";

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: 1fr;
  gap: 1rem;
`;

const SimilarTitle = styled.h1`
  font-size: large;
  padding:1rem 0 1rem 0rem;

  font-family: "Alumni Sans", sans-serif;
`

interface ProductsProps {
  type?: "favorite" | "search" | "similar"
}
const Products = ({ type }: ProductsProps) => {

  const { store } = useContext(StoreContext)

  const { searchParam } = useParams()

  const filterProducts = (type: string | undefined) => {
    switch (type) {
      case "favorite": {
        return store.filter((item) => item.favorite && item)
      }
      case "search": {
        return searchParam ? matchSorter(store, searchParam, { keys: ['name'] }) : store
      }
      case "similar": {
        return store.filter((_item, index) => index < 4)
      }
      default: {
        return store
      }
    }
  }

  const products = filterProducts(type)

  const handleTitle = (type: string | undefined) => {
    switch (type) {
      case "similar": {
        return "produtos que você pode gostar"
      }
      case "search": {
        return searchParam && `busca por ${searchParam}`
      }
      case "favorite": {
        return "seus favoritos"
      }
      default: {
        return ""
      }
    }
  }


  return (<>  <SimilarTitle>{handleTitle(type)}</SimilarTitle>

    <ProductsContainer>
      {products.map((item) => <Product key={item.id} item={item} />)}
    </ProductsContainer>
  </>);
};

export default Products;
