import {useContext} from 'react'
import {ShopContext} from '../context'

function BascketItem(props) {
  const { name, id, price, quantity } = props;

  const {incrementQuantity, decrementQuantity, removeFromBascket} = useContext(ShopContext)

  return (
    <li key={id} className="collection-item">
      {name} x {quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>Add
        </a>
        <a
          className="waves-effect waves-light btn"
          onClick={() => decrementQuantity(id)}
        >
          <i className="material-icons left">exposure_minus_1</i>Remove
        </a>
        <a className="waves-effect waves-light btn" style={{padding: '15px 20px'}}>
          <i
            className="material-icons delete_forever"
            onClick={() => removeFromBascket(id)}
          >
            delete_forever
          </i>
        </a>
      </span>
    </li>
  );
}

export default BascketItem;
