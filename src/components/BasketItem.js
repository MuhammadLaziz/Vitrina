import { useContext } from "react"
import { ShopContext } from "../context"

export default function BasketItem(props) {
    const {id, name, price, quantity} = props

    const {icrement, decrement, removeFromBascket} = useContext(ShopContext)
    

    return(
        <li className="collection-item" style={{height: '50px'}}>
            <b style={{fontSize: '18px'}}>{name} x {quantity} = {price * quantity}</b> <b>$</b>
            <span className="secondary-content">
                <a href="#"><button className="btn" onClick={() => icrement(id)}>+1 Add</button></a>
                <a href="#"><button className="btn" onClick={() => decrement(id)}>-1 Remove</button></a>
                <i className="material-icons delete_forever white-text" style={{backgroundColor: '#26A69A', padding: '5px', borderRadius: '5px'}} onClick={() => removeFromBascket(id)}>delete_forever</i>
            </span>
        </li>
    )
}