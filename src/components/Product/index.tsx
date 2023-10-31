import { StoreItem } from "../../api";
import { FavoriteButton } from "../Common";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  Favorite,
  ProductInfoContainer,
  ProductTitle,
  Price,
} from "./style";

interface ProductsProps {
  item: StoreItem;
}

const Product = ({ item }: ProductsProps) => {
  return (
    <ProductContainer>
      <Favorite>
        <FavoriteButton
          fill="white"
          isFavorite={item.favorite}
          itemId={item.id}
        />
      </Favorite>
      <Link to={`/acmeinc/produto/${item.id}`}>
        <img src={item.img} width="100%" />

        <ProductInfoContainer>
          <ProductTitle>{item.name}</ProductTitle>
          <Price>R${item.price}</Price>
        </ProductInfoContainer>
      </Link>
    </ProductContainer>
  );
};

export default Product;
