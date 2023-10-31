import CartSVG from "../../assets/cart.svg";
import UserSVG from "../../assets/user.svg";
import SearchSVG from "../../assets/search.svg";
import { useContext, useState } from "react";
import { CartContext, StoreContext } from "../../App";
import FavSvg from "../../assets/fav";
import { Link, useNavigate } from "react-router-dom";
import {
  SearchContainer,
  SearchInput,
  NavbarContainer,
  CartIcon,
  CartQuantity,
} from "./style";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    navigate(`search/${search}`);
    setShowSearch(false);
    e.preventDefault();
  };

  return (
    <SearchContainer showSearch={showSearch} onSubmit={(e) => handleSearch(e)}>
      {showSearch && (
        <SearchInput
          autoFocus
          placeholder="Encontre seus produtos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <a
        onClick={(e) =>
          showSearch && search ? handleSearch(e) : setShowSearch(!showSearch)
        }
      >
        <img src={SearchSVG} />
      </a>
    </SearchContainer>
  );
};

const Navbar = () => {
  const { setShowCart } = useContext(StoreContext);
  const cart = useContext(CartContext);

  return (
    <NavbarContainer>
      <Search />
      <a onClick={() => setShowCart(true)}>
        <CartIcon>
          <img src={CartSVG} />
          {!!cart.length && (
            <CartQuantity>{cart.length > 9 ? "9+" : cart.length}</CartQuantity>
          )}
        </CartIcon>
      </a>
      <Link to="/acmeinc/favorites">
        <FavSvg selected fill="#424242" menu />
      </Link>
      <a>
        <img src={UserSVG} />
      </a>
    </NavbarContainer>
  );
};

export default Navbar;
