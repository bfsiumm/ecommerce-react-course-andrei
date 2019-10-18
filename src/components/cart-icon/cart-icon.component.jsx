import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartDropdownVisibility } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ itemsCount, toggleCartDropdownVisibility }) => (
    <div className='cart-icon' onClick={toggleCartDropdownVisibility}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemsCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
})
const mapDispatchToProps = dispatch => ({
    toggleCartDropdownVisibility: () => dispatch(toggleCartDropdownVisibility())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);