import React, { useEffect, useState } from "react";
// import { ShopContext } from "../context";
import { API_URL, API_KEY } from "../config";
import { Loader } from "./Loader";
// import BascketList from "./BascketList";
// import Card from "./Card";
// import GoodsList from "./GoodsList";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => 
        data.featured && setGoods(data.featured),
        setLoading(false)
      );
  }, []);

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
      {loading ? <Loader /> : <h1>Shop</h1>}
      {/* <Card quantity={order.length} />
      {loading ? <Loader /> : <GoodsList />}
      {isBascket && <BascketList />} */}
    </div>
  );
};

export default Shop;
