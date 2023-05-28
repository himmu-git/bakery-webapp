import React, { useContext, useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { CartContext } from "../App";
import Card from "./Card";

type Props = {};

const Home = (props) => {
  const { pageData } = useOutletContext();
  const noOfItems = 20;
  const { page_info, page_data } = pageData ?? {};
  const sectionData = page_data?.["sections"] ?? {};
  const sectionBasicInfo = sectionData?.["SECTION_BASIC_INFO"] ?? {};
  const sectionResHeaderDetails =
    sectionData?.["SECTION_RES_HEADER_DETAILS"] ?? {};
  const [cartData, setCartData] = useContext(CartContext);
  const itemList = useMemo(() => {
    const list = page_data?.order?.menuList?.menus?.reduce(
      (accumulator, currentValue) => {
        const value = currentValue?.menu?.categories?.[0]?.category?.items;
        if (Array.isArray(value)) {
          accumulator.push(...value);
        }
        return accumulator;
      },
      []
    );
    return list;
  }, [page_data]);
  return (
    <section>
      <div className="heading">
        <h1>{sectionBasicInfo?.name}</h1>
        <div className="ratingContainer">
          <div className="ratingValue">4.2</div>
          <div className="ratingCount">
            <span>4272</span>
            <span>Delivery Reviews</span>
          </div>
        </div>
      </div>
      {/* <span>{page_info?.pageDescription}</span> */}
      <div>
        <span>{sectionBasicInfo?.cuisine_string}</span>
        <span>MG Road, Gurgaon</span>
        <div>
          {sectionBasicInfo?.res_status_text}{" "}
          <span> {sectionBasicInfo?.timing?.timing_desc}</span>
        </div>
      </div>
      <div>
        <div className="d-flex">
          {sectionResHeaderDetails?.["CUISINES"]?.map((cuisine) => {
            return (
              // <>
              <div key={cuisine?.deeplink} className="chip">
                <a href={cuisine?.url}>{cuisine?.name}</a>
              </div>
              // </>
            );
          })}
        </div>
      </div>
      <div>
        <h4>{sectionBasicInfo?.name}'s Menu</h4>
        <div className="itemsContainer">
          {itemList?.slice(0, noOfItems)?.map((item, indx) => {
            return (
              <Card
                key={item?.id ?? `itemKey${indx}`}
                item={item.item}
                setCartData={setCartData}
                cartData={cartData}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
