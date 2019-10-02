import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignInBtn, ...otherProps }) => (
  <button {...otherProps} className={`${isGoogleSignInBtn ? 'google-sign-in' : ''} custom-button`} >
    {children}
  </button>
);

export default CustomButton;