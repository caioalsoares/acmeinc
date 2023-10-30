import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../App";
import AddFavSVG from "../../assets/addfav.svg"
import FavSVG from "../../assets/fav.svg"


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
}

const Svg = styled.img<{ invert?: boolean }> `
  cursor: pointer;
`



export const FavoriteButton = ({ itemId, isFavorite }: FavoriteButtonProps) => {

  const { handleFavorite } = useContext(StoreContext)

  return (<Svg src={isFavorite ? FavSVG : AddFavSVG} onClick={() => handleFavorite(itemId)} />)
}
