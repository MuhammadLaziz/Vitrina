import {useContext} from "react";
import {ShopContext} from '../context'

function Card () {
    const {order, handleBascketShow = Function.prototype} = useContext(ShopContext)
    const quantity = order.length

    return(
        <div className="cart" onClick={handleBascketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    )
}
export default Card