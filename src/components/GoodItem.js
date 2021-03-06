import { useContext } from 'react'
import {ShopContext} from '../context'

function GoodItem (props) {
    const {id, name, price, description, full_background} = props
    
    const {addToBascket} = useContext(ShopContext)

    return(
        <li className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBascket({id, name, price})}>Buy</button>
                <span className="right" style={{fontSize: '25px', fontWeight: 'bold'}}>{price}$</span>
            </div>
        </li>
    )
}
export default GoodItem