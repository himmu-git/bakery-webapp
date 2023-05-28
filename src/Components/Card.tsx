import React, { useContext } from "react";
import { CartContext } from "../App";

type Props = {
  item: any;
  cartData: any;
  setCartData?: any;
  showAddDeleteBtn?: boolean;
};

const Card = (props: Props) => {
  const { item, cartData, setCartData, showAddDeleteBtn = true } = props;
  const addToCartHandler = (item) => {
    setCartData((data) => {
      if (data?.[item?.id]) {
        data[item?.id].push(item);
      } else {
        data[item?.id] = [item];
      }
      return { ...data };
    });
  };
  const onDeleteHandler = (item) => {
    setCartData((data) => {
      data[item.id].pop();
      return { ...data };
    });
  };
  return (
    <div className="cardContainer">
      <div>
        <img src={item?.item_image_thumb_url} width={"296"} height={"160"} />
        <div>
          <span>{item?.name}</span>
          <p className="desc">{item?.desc}</p>
        </div>
        <div>
          <label htmlFor="">Price : </label>
          <span>&#8377;{item?.price}</span>
        </div>
      </div>
      <div>
        {showAddDeleteBtn && (
          <button
            className="button"
            onClick={() => {
              addToCartHandler(item);
            }}
          >
            Add to cart
          </button>
        )}
        {showAddDeleteBtn && cartData[item?.id]?.length > 0 && (
          <button
            className="button"
            onClick={() => {
              onDeleteHandler(item);
            }}
          >
            <span>Delete</span>
          </button>
        )}
      </div>
      {showAddDeleteBtn && cartData[item?.id]?.length > 0 && (
        <div className="badge">{cartData[item?.id]?.length ?? 0}</div>
      )}
    </div>
  );
};

export default Card;
