export default function Card(props) {
    const {quantity = 0, handleBascketShow = Function.prototype} = props
    return(
        <div className="cart blue darken-4 white-text" onClick={handleBascketShow}>
              <i className=" material-icons">add_shopping_cart</i>
              {quantity ? <span className="card-quantity">{quantity}</span> : null}
        </div>
    )
}