export default function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_BASCKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
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
        });
      }
      return {
        ...state,
        order: newOrder,
      };
    }

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };

    case "HANDLE_BASCKET_SHOW":
      return {
        ...state,
        basketShow: !state.basketShow,
      };
    case "REMOVE_FROM_BASCKET":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };

    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    default:
      return state;
  }
}
