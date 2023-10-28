import { createContext, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

interface StoreContextProps {
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
}

export const StoreContext = createContext<StoreContextProps>({
  showCart: false,
  setShowCart: () => {},
});

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <StoreContext.Provider value={{ showCart, setShowCart }}>
      <Header></Header>
      <Products />
      <Cart />
    </StoreContext.Provider>
  );
}

export default App;
