import { useContext } from "react"
import { ShopContext } from "../context"
import Goodsitem from "./GoodItem"

function GoodsList (props) {
    const { goods = [] } = useContext(ShopContext)
    
    if(!goods.length) {
        return <h3>Nothing Found</h3>
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <Goodsitem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default GoodsList 