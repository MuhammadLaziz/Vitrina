function BascketItem(props) {
  const { name, id, price, quantity } = props;

  return (
    <li key={id} className="collection-item">
      {name} x {quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          class="waves-effect waves-light btn"
          onClick={() => props.incrementQuantity(id)}
        >
          <i class="material-icons left">exposure_plus_1</i>Add
        </a>
        <a
          class="waves-effect waves-light btn"
          onClick={() => props.decrementQuantity(id)}
        >
          <i class="material-icons left">exposure_minus_1</i>Remove
        </a>
        <a class="waves-effect waves-light btn" style={{padding: '15px 20px'}}>
          <i
            className="material-icons delete_forever"
            onClick={() => props.removeFromBascket(id)}
          >
            delete_forever
          </i>
        </a>
      </span>
    </li>
  );
}

export default BascketItem;
