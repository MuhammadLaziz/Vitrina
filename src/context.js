import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    order: [],
    basketShow: false
}

function ContextProvider ({children}) {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.addToBascket = (item) => {
        dispatch({type: 'ADD_TO_BASCKET', payload: item})
    }
    value.icrement = (itemID) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemID}})
    }
    value.decrement = (itemID) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemID}})
    }
    value.handleBascketShow = () => {
        dispatch({type: 'HANDLE_BASCKET_SHOW'})
    }
    value.removeFromBascket = (itemID) => {
        dispatch({type: "REMOVE_FROM_BASCKET", payload: {id: itemID}})
    }
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ContextProvider