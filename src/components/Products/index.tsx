import Product from "../Product";
import { useContext } from "react";
import { StoreContext } from "../../App";
import { matchSorter } from "match-sorter";
import { useParams } from "react-router-dom";
import { ProductsContainer, Title } from "./style";

interface ProductsProps {
  type?: "favorite" | "search" | "similar";
}
const Products = ({ type }: ProductsProps) => {
  const { store } = useContext(StoreContext);

  const { searchParam } = useParams();

  const filterProducts = (type: string | undefined) => {
    switch (type) {
      case "favorite": {
        return store.filter((item) => item.favorite && item);
      }
      case "search": {
        return searchParam
          ? matchSorter(store, searchParam, { keys: ["name"] })
          : store;
      }
      case "similar": {
        return store.filter((_item, index) => index < 4);
      }
      default: {
        return store;
      }
    }
  };

  const products = filterProducts(type);

  const handleTitle = (type: string | undefined) => {
    switch (type) {
      case "similar": {
        return "produtos que você pode gostar";
      }
      case "search": {
        return searchParam && `busca por ${searchParam}`;
      }
      case "favorite": {
        return "seus favoritos";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <>
      {" "}
      <Title>{handleTitle(type)}</Title>
      <ProductsContainer>
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default Products;
