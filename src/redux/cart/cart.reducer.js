
import {  cartActionsTypes } from './cart.types';
import {  addItemToCart, removeItemFromCart,  clearItemFromCart } from './cart.utilities';

const INITIAL_STATE = {
    dropDownVisible: false,
    cart: []
}

const  cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionsTypes.TOGGLE_CART_DROPDOWN_VISIBILITY:
            return {
                ...state,
                dropDownVisible: !state.dropDownVisible
            }
        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cart: addItemToCart(state.cart, action.payload)
            }
        case cartActionsTypes.REMOVE_ITEM:
            return {
                ...state,
                cart: removeItemFromCart(state.cart, action.payload)
            }
        case cartActionsTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cart: clearItemFromCart(state.cart, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;