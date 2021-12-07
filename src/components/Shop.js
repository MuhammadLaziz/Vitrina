import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_URL, API_KEY } from "../config";
import BascketList from "./BascketList";
import Card from "./Card";
import GoodsList from "./GoodsList";
import { Loader } from "./Loader";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBascket, setBascketShow] = useState(false);

  const handleBascketShow = () => {
    setBascketShow(!isBascket);
  };

  const addToBascket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setOrder(newOrder);
    }
    toast.success('Good Added To Bascket Successfully!')
  };

  const removeFromBascket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
    toast.error('Good deleted')
  };

  const incrementQuantity = (itemID) => {
    const newOrder = order.map(el => {
      if(el.id === itemID) {
        const newQuantity = el.quantity + 1
        return{
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })
    
    setOrder(newOrder)
  }
  const decrementQuantity = (itemID) => {
    const newOrder = order.map(el => {
      if(el.id === itemID) {
        const newQuantity = el.quantity - 1
        return{
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return el
      }
    })
    
    setOrder(newOrder)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="Shop container">
      <Card quantity={order.length} handleBascketShow={handleBascketShow} />
      {loading ? (
        <Loader />
      ) : (
        <GoodsList goods={goods} addToBascket={addToBascket} />
      )}
      {isBascket && 
        <BascketList
          order={order}
          handleBascketShow={handleBascketShow}
          removeFromBascket={removeFromBascket}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      }
    </div>
  );
};

export default Shop;
