import GoodItem from "./GoodItem"


function GoodList (props) {
    const {goods = []} = props

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