import {useContext} from 'react'
import {ShopContext} from '../context'

function Goodsitem (props) {

    const {addToBascket} = useContext(ShopContext)

    const {name, id, description, price, full_background} = props
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background}  alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className='btn' onClick={() => addToBascket({id, name, price})}>Buy</button>
                <span className="right" style={{fontSize: '20px', fontWeight: 'bold'}}>{price}$</span>
            </div>
        </div>
    )
}

export default Goodsitem