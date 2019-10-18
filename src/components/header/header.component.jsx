import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectDropdownVisible } from '../../redux/cart/cart.selector';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, dropDownVisible }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        Shop
            </Link>
      <Link to='/shop' className='option'>
        Contact
            </Link>
      {
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>Sign out</div>
        ) : (
          <Link className='option' to='/signin'>Sign in</Link>
        )
      }
      <CartIcon/>
    </div>
    { dropDownVisible ? <CartDropdown/> : null }
  </div>
)

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
  dropDownVisible: selectDropdownVisible
})
export default connect(mapStateToProps)(Header);