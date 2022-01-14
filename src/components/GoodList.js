import GoodItem from "./GoodItem"
import {useContext} from 'react'
import {ShopContext} from '../context'


function GoodList () {
    const {goods = []} = useContext(ShopContext)

    if(!goods.length) {
        <h3>Noting Found</h3>
    }

    return(
        <div className="goods">
            {goods.map((item) => (
                <GoodItem key={item.id} {...item} />
            ))}
        </div>
    )
} 
export default GoodList