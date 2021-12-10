import { createContext, useReducer } from "react";

import { reducer } from "./reducer";

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBascket: false,
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.addToBascket = (item) => {
        dispatch({type: 'ADD_TO_BASCKET', payLoad: item})
    }

    value.incrementQuantity = (itemID) => {
        dispatch({type: 'INCREMENT_QUANTITY', payLoad: {id: itemID}})
    }

    value.decrementQuantity = (itemID) => {
        dispatch({type: 'DECREMENT_QUANTITY', payLoad: {id: itemID}})
    }

    value.handleBascketShow = () => {
        dispatch({type: 'TOGGLE_BASCKET'})
    }

    value.removeFromBascket = (itemID) => {
        dispatch({type: 'REMOVE_FROM_BASCKET', payLoad: {id: itemID}})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payLoad: data})
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}