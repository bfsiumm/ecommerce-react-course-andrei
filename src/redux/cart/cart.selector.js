import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cart
);

export const selectDropdownVisible =  createSelector(
    [selectCart],
    cart => cart.dropDownVisible
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulateQuantity, cartItem) => { return accumulateQuantity + cartItem.quantity}, 0)
    )

    export const selectCartTotal = createSelector(
        [selectCartItems],
        cartItems => cartItems.reduce((totalAccumulator, cartItem) => totalAccumulator + cartItem.quantity * cartItem.price, 0)
    );