import BascketItem from "./BascketItem";
import { useContext } from "react";
import { ShopContext } from "../context";

export default function BascketList(props) {
  const { order, handleBascketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bsk">
      <ul className="collection bascket-list">
        <li className="collection-item active">Bascket</li>
        {order.length ? (
          order.map((item) => {
            return <BascketItem key={item.id} {...item} />;
          })
        ) : (
          <li className="collection-item">Bascket is Empty</li>
        )}
        <li className="collection-item active">
          Total Price: {totalPrice} <b>$</b>
        </li>
        <i className="material-icons bascket-close" onClick={handleBascketShow}>
          close
        </i>
      </ul>
    </div>
  );
}
