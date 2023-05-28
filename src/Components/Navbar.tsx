import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
Link;
type Props = {};

const Navbar = (props: Props) => {
  const [cartData, setCartData] = useContext(CartContext);
  const finalCartData: [] = useMemo(() => {
    return Object.values(cartData).reduce((accumulator, currentValue) => {
      accumulator.push(...currentValue);
      return accumulator;
    }, []);
  }, []);
  return (
    <nav className="navbar">
      <Link to="/">Overview</Link>
      <div>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/color/48/shopping-cart--v1.png"
          alt="shopping-cart--v1"
        />
        {finalCartData.length > 0 && (
          <div className="badge">{finalCartData.length}</div>
        )}
        <Link to="checkout">Checkout</Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
