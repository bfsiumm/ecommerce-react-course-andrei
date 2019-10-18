
import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions.js';
import './checkout-item.styles.scss';

const CheckoutItem = ( { cartItem, clearItemFromCart, addItemToCart, removeItemFromCart}) =>{
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className='checout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={()=> addItemToCart(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
);}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItem(item)),
    removeItemFromCart: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);