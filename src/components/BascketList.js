import BascketItem from "./BascketItem";

export default function BascketList(props) {
  const { order } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bsk">
      <ul className="collection bascket-list">
        <li className="collection-item active">Bascket</li>
        {order.length ? (
          order.map((item) => {
            return (
              <BascketItem
                removeFromBascket={props.removeFromBascket}
                key={item.id}
                {...item}
                incrementQuantity={props.incrementQuantity}
                decrementQuantity={props.decrementQuantity}
              />
            );
          })
        ) : (
          <li className="collection-item">Bascket is Empty</li>
        )}
        <li className="collection-item active">
          Total Price: {totalPrice} <b>$</b>
        </li>
        <i
          className="material-icons bascket-close"
          onClick={props.handleBascketShow}
        >
          close
        </i>
      </ul>
    </div>
  );
}
