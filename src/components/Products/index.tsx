import Product from "../Product";
import { useContext } from "react";
import { StoreContext } from "../../App";
import { matchSorter } from "match-sorter";
import { useParams } from "react-router-dom";
import {
  ImageSkeleton,
  ProductsContainer,
  Title,
  TitleSkeleton,
} from "./style";
import { EmptyWarning } from "../Cart/style";
import { ProductContainer } from "../Product/style";

interface ProductsProps {
  type?: "favorite" | "search" | "similar";
}

export const ProductsSkeleton = () => {
  const ItemsSkeleton = new Array(8).fill("");

  return ItemsSkeleton.map((_item, index) => (
    <ProductContainer key={index}>
      <ImageSkeleton />
      <TitleSkeleton />
    </ProductContainer>
  ));
};

export const Products = ({ type }: ProductsProps) => {
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

  const handleEmptyMessage = (type: string | undefined) => {
    switch (type) {
      case "similar": {
        return "Erro ao carregar produtos similares.";
      }
      case "search": {
        return "Nenhum produto encontrado.";
      }
      case "favorite": {
        return "Você ainda não adicionou produtos ao seus favoritos.";
      }
      default: {
        return null;
      }
    }
  };

  return (
    <>
      <Title>{handleTitle(type)}</Title>
      <ProductsContainer>
        {store.length ? (
          products.map((item) => <Product key={item.id} item={item} />)
        ) : (
          <ProductsSkeleton />
        )}
      </ProductsContainer>
      {!products.length && (
        <EmptyWarning>{handleEmptyMessage(type)}</EmptyWarning>
      )}
    </>
  );
};

export default Products;
