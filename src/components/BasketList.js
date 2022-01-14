import BasketItem from "./BasketItem";
import {useContext} from "react";
import {ShopContext} from '../context'

function BasketList() {
  const { order =[], handleBascketShow} = useContext(ShopContext)

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div className="bsk">
      <ul className="collection bascket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((el) => {
            return (
              <BasketItem
                key={el.id}
                {...el}
              />
            );
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total Price : {totalPrice} <b>$</b>
        </li>
        <i
          className="material-icons bascket-close"
          onClick={handleBascketShow}
        >
          close
        </i>
      </ul>
    </div>
  );
}

export default BasketList;
