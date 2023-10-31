import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../App";
import FavSvg from "../../assets/fav.tsx";


export const CartButton = styled.button`
  padding: 1rem;
  font-family: "Alumni Sans", sans-serif;
  color: white;
  background-color: black;
  font-size: 18px;
  font-weight: 600;
  border: 0px;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #424242;
  }
`;

interface FavoriteButtonProps {
  itemId: number
  isFavorite: boolean
  fill: string
}

export const FavoriteButton = ({ itemId, isFavorite, fill }: FavoriteButtonProps) => {

  const { handleFavorite } = useContext(StoreContext)

  return <a onClick={() => handleFavorite(itemId)} style={{ cursor: "pointer" }}><FavSvg fill={fill} selected={isFavorite} /></a>
}
