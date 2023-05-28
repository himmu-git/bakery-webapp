import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import useGetData from "./hooks/useGetData";
import { createContext, useContext } from "react";

export const CartContext = createContext({});
function App() {
  const pageData = useGetData({ endpoint: "db" });
  const [cartData, setCartData] = useState([]);
  return (
    <>
      {/* <Router> */}
      <CartContext.Provider value={[cartData, setCartData]}>
        <Navbar />
        <main>
          <Outlet context={{ pageData }} />
        </main>
        {/* <Footer /> */}
      </CartContext.Provider>
    </>
  );
}

export default App;
