import { createContext, useEffect, useReducer, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { CartActionType, cartReducer } from "./reducer";
import { MountStore, StoreItem } from "./api";
import ProductDetails from "./components/ProductDetail";
import styled from "styled-components";

interface StoreContextProps {
  showCart: boolean
  store: StoreItem[]
  setShowCart: (showCart: boolean) => void;
  handleFavorite: (itemId: number) => void;
  dispatchCart: (action: CartActionType) => void;
}



export const StoreContext = createContext<StoreContextProps>({
  showCart: true,
  store: [],
  setShowCart: () => { },
  handleFavorite: () => { },
  dispatchCart: () => { },
});


export const CartContext = createContext<StoreItem[]>([])

const Content = styled.main`
  max-width: 1100px;
  margin: 0px auto;
`

function App() {

  const [showCart, setShowCart] = useState(false);

  const [store, setStore] = useState<StoreItem[]>([])

  const handleFavorite = (itemId: number) => {
    const setFavorite = store.map(item => item.id == itemId ? { ...item, favorite: !item.favorite } : item)

    return setStore(setFavorite)
  }



  useEffect(() => {
    MountStore().then(data => setStore(data))
  }, [])

  const [cart, dispatchCart] = useReducer(cartReducer, [])



  return (
    <StoreContext.Provider value={{ setShowCart, handleFavorite, store, dispatchCart, showCart }}>
      <CartContext.Provider value={cart}>
        <Header></Header>
        <Content>{store.length ? <ProductDetails /> : "carregando"}</Content>
        <Cart />
      </CartContext.Provider>
    </StoreContext.Provider>
  );
}

export default App;
