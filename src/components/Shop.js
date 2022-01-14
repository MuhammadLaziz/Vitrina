import React, { useEffect, useState, useContext } from "react";
// import { toast } from "react-toastify/dist/react-toastify.cjs.development";
// import { ShopContext } from "../context";
import { API_URL, API_KEY } from "../config";
import BasketList from "./BasketList";
import Card from "./Card";
import GoodList from "./GoodList";
import { Loader } from "./Loader";
import { ShopContext } from "../context";
// import BascketList from "./BascketList";
// import Card from "./Card";
// import GoodsList from "./GoodsList";

const Shop = () => {
  const { goods, setGoods, order, loading, basketShow } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured)
      });
  }, [goods]);

  // useEffect(() => {
  //   fetch(API_URL, {
  //     headers: {
  //       Authorization: API_KEY,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setGoods(data.featured);
  //     });
  // }, []);

  return (
    <div className="Shop container">
      <Card />
      {loading ? (
        <Loader />
      ) : (
        <GoodList goods={goods} />
      )}
      {basketShow && <BasketList />}
      {/* <Card quantity={order.length} />
      {loading ? <Loader /> : <GoodsList />}
      {isBascket && <BascketList />} */}
    </div>
  );
};

export default Shop;
