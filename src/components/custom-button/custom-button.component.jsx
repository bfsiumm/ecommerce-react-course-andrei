import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps} >
    {children}
  </CustomButtonContainer>
);

// Before transfoorming it to a styled compponent
/*
const CustomButton = ({ children, isGoogleSignInBtn, inverted, ...otherProps }) => (
  <button {...otherProps} className={`${isGoogleSignInBtn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} >
    {children}
  </button>
);
*/
export default CustomButton;