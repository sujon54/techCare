import {ADD_TO_CART, REMOVE_TO_CART} from '../actions/ActionTypes';
  
  const initState = {
    cartData: []
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartData: [...state.cartData, action.data]
        };
      case REMOVE_TO_CART:
        return {
          ...state,
          cartData: []
        };
      default:
        return state;
    }
  };
  