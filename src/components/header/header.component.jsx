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

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
//import './header.styles.scss';

const Header = ({ currentUser, dropDownVisible }) => (
  <HeaderContainer>
    <LogoContainer to='/' >
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer >
      <OptionLink to='/shop'>
        Shop
      </OptionLink>
      <OptionLink to='/shop' >
        Contact
      </OptionLink>
      {
        currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>Sign out</OptionLink>
        ) : (
          <OptionLink to='/signin'>Sign in</OptionLink>
        )
      }
      <CartIcon/>
    </OptionsContainer>
    { dropDownVisible ? <CartDropdown/> : null }
  </HeaderContainer>
)

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
  dropDownVisible: selectDropdownVisible
})
export default connect(mapStateToProps)(Header);