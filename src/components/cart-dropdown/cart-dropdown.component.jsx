
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartDropdownVisibility } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const cartDropdown = ({ cart, history, dispatch }) => {
    console.log('cart ',cart)
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cart.length ? 
                    cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                    <span className="empty-message"> Your cart is Empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDropdownVisibility());
                } }>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    cart: selectCartItems
})
export default withRouter(connect(mapStateToProps)(cartDropdown));