import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import Card from "./Card";

type Props = {};

const Checkout = (props: Props) => {
  const [cartData, setCartData] = useContext(CartContext);
  const finalCartData: [] = useMemo(() => {
    return Object.values(cartData).reduce((accumulator, currentValue) => {
      accumulator.push(...currentValue);
      return accumulator;
    }, []);
  }, [cartData]);
  const clearCartHandler = () => {
    setCartData({});
  };
  console.log(finalCartData, "finalCart");
  return (
    <div>
      {finalCartData.length > 0 && (
        <div style={{ textAlign: "end" }}>
          <button onClick={clearCartHandler} className="button">
            {" "}
            Clear Cart
          </button>
        </div>
      )}
      {finalCartData.length == 0 && (
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button className="button"> Go To Home</button>
          </Link>
        </div>
      )}
      <div className="itemContainer">
        {finalCartData.length == 0 && <div>No item Added</div>}
        {finalCartData.length > 0 &&
          finalCartData.map((item) => {
            return <Card key={item?.id} item={item} showAddDeleteBtn={false} />;
          })}
      </div>
    </div>
  );
};

export default Checkout;
