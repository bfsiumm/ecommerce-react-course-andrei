import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignInBtn, inverted, ...otherProps }) => (
  <button {...otherProps} className={`${isGoogleSignInBtn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} >
    {children}
  </button>
);

export default CustomButton;