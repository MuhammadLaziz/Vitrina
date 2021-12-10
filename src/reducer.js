export function reducer(state, {
    type,
    payLoad
}) {
    switch (type) {
        case 'ADD_TO_BASCKET' : {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payLoad.id);
            let newOrder = null
            if (itemIndex < 0) {
                const newItem = {
                    ...payLoad,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                 newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                })
            }
            return {
                ...state,
                order: newOrder
            }
        }

        case 'INCREMENT_QUANTITY' :
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payLoad.id) {
                        const newQuantity = el.quantity + 1
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return el
                    }
                })
            }
        
        case 'DECREMENT_QUANTITY' :
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payLoad.id) {
                        const newQuantity = el.quantity - 1
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return el
                    }
                })
            }
        
        case 'TOGGLE_BASCKET' : 
            return {
                ...state,
                isBascket: !state.isBascket
            }
        case 'REMOVE_FROM_BASCKET':
            return{
                ...state,
                order: state.order.filter((item) => item.id !== payLoad.id)
            }
        
        case 'SET_GOODS' : 
            return {
                ...state,
                goods: payLoad || [],
                loading: false
            }
         default:
            return state
    }
}