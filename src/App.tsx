import { createContext, useEffect, useReducer, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { CartActionType, cartReducer } from "./reducer";
import { MountStore, StoreItem } from "./api";
import styled from "styled-components";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LoggedInInfo } from "./api/login";

interface StoreContextProps {
  showCart: boolean;
  store: StoreItem[];
  isLogged: boolean;
  user: string;
  setShowCart: (showCart: boolean) => void;
  handleFavorite: (itemId: number) => void;
  dispatchCart: (action: CartActionType) => void;
}

export const StoreContext = createContext<StoreContextProps>({
  showCart: false,
  store: [],
  isLogged: false,
  user: "",
  setShowCart: () => { },
  handleFavorite: () => { },
  dispatchCart: () => { },
});

export const CartContext = createContext<StoreItem[]>([]);
export const LoginContext = createContext<LoggedInInfo>({
  isLogged: false,
  user: "",
});

const Content = styled.main`
  max-width: 1100px;
  margin: 0px auto;
`;

function App() {
  const [showCart, setShowCart] = useState(false);
  const [store, setStore] = useState<StoreItem[]>([]);
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const navigate = useNavigate()

  const loginInfo = localStorage.getItem("loggedUser");

  const handleFavorite = (itemId: number) => {
    const setFavorite = store.map((item) =>
      item.id == itemId ? { ...item, favorite: !item.favorite } : item,
    );

    return loginInfo ? setStore(setFavorite) : navigate("/acmeinc/login")
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    MountStore().then((data) => setStore(data));
  }, []);

  console.log(!!loginInfo);

  return (
    <StoreContext.Provider
      value={{
        setShowCart,
        handleFavorite,
        store,
        isLogged: !!loginInfo,
        user: loginInfo || "",
        dispatchCart,
        showCart,
      }}
    >
      <CartContext.Provider value={cart}>
        <Header></Header>
        <Content>
          {store.length ? <Outlet /> : "carregando"}
        </Content>
        <Cart />
      </CartContext.Provider>
    </StoreContext.Provider>
  );
}

export default App;
