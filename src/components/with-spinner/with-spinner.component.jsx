import  React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

/*
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {

  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps}/>
  )
}
*/

const withSpinner = WrappedComponent => {
  class WithSpinner extends React.Component {

    render(){
      return this.props.isLoading ?
      (<SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>)
      :
      ( <WrappedComponent {...this.props}/>)
    }
  }
  return WithSpinner;
}
export default withSpinner;