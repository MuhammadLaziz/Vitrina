import Goodsitem from "./GoodItem"

function GoodsList (props) {
    const { goods = [], addToBascket } = props
    if(!goods.length) {
        return <h3>Nothing Found</h3>
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <Goodsitem key={item.id} {...item} addToBascket={addToBascket} />
            ))}
        </div>
    )
}

export default GoodsList