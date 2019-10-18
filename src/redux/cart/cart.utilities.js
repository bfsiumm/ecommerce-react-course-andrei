
export const addItemToCart = (cart, itemToAdd) => {
    const itemExistInCart = cart.find(item => item.id === itemToAdd.id);

    if(itemExistInCart) {
        return cart.map(item => (
             item.id === itemToAdd.id ? {...item, quantity: item.quantity+1} : item
        ))
    }
    return [...cart, {...itemToAdd, quantity:1}];
}

export const removeItemFromCart = (cart, itemToRemove) => {
    const  itemToBeRemoved = cart.find(cartItem => cartItem.id === itemToRemove.id);
    if(itemToBeRemoved.quantity === 1)
        return clearItemFromCart(cart, itemToRemove);
    return cart.map(cartItem => (
        cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity -1} : cartItem
    ))
}

export const clearItemFromCart = (cart, itemToClear) => {
    return cart.filter(cartItem => cartItem.id !== itemToClear.id);
}