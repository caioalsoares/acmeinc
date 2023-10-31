import styled from "styled-components";
import CartSVG from "../../assets/cart.svg";
import UserSVG from "../../assets/user.svg";
import SearchSVG from "../../assets/search.svg";
import { useContext, useState } from "react";
import { CartContext, StoreContext } from "../../App";
import FavSvg from "../../assets/fav";
import { Link, useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  width: auto;
  gap: 0.5rem;

  a {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const CartIcon = styled.span`
  position: relative;
`

const CartQuantity = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  border-radius: 50%;
  padding:2px;
  height: 14px;
  width: 14px;
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  font-size: 10px;
`

const SearchInput = styled.input`
  width: 150px;
  padding: 0px;
  flex: 1;
  border: 0;
  align-self: auto;

  &:focus {
    outline: none;
  }
`

const SearchContainer = styled.form<{ showSearch: boolean }>`
  background-color: ${props => props.showSearch ? "white" : null};
  display: flex;
  align-items: center;
  padding-left: 8px;
  border-radius: 0.25rem;

  &:focus-within {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  }
`
const Search = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    navigate(`search/${search}`)
    setShowSearch(false)
    e.preventDefault()


  }

  return (<SearchContainer showSearch={showSearch} onSubmit={(e) => handleSearch(e)}>
    {showSearch && <SearchInput autoFocus placeholder="Encontre seus produtos" value={search} onChange={e => setSearch(e.target.value)} />}
    <a onClick={(e) => showSearch && search ? handleSearch(e) : setShowSearch(!showSearch)}><img src={SearchSVG} /></a></SearchContainer >
  )
}

const Navbar = () => {
  const { setShowCart } = useContext(StoreContext);
  const cart = useContext(CartContext)



  return (
    <NavbarContainer>
      <Search />
      <a onClick={() => setShowCart(true)}>
        <CartIcon><img src={CartSVG} />
          {!!cart.length && (<CartQuantity>{cart.length > 9 ? "9+" : cart.length}</CartQuantity>)}
        </CartIcon>
      </a>
      <Link to="/acmeinc/favorites"><FavSvg selected fill="#424242" menu /></Link>
      <a>
        <img src={UserSVG} />
      </a>
    </NavbarContainer>
  );
};

export default Navbar;
