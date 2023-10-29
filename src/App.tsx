import { createContext, useEffect, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import { MountStore, StoreItem } from "./api";

interface StoreContextProps {
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
  store: StoreItem[]
}

export const StoreContext = createContext<StoreContextProps>({
  showCart: false,
  setShowCart: () => { },
  store: []
});

function App() {
  const [showCart, setShowCart] = useState(false);
  const [store, setStore] = useState<StoreItem[]>([])

  useEffect(() => {
    MountStore().then(data => setStore(data))
  }, [])

  return (
    <StoreContext.Provider value={{ showCart, setShowCart, store }}>
      <Header></Header>
      <Products />
      <Cart />
    </StoreContext.Provider>
  );
}

export default App;
