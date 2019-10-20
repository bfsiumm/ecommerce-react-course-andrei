import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const puslishableKey = "pk_test_zRo0hKdbKrtVG9KtOzQMNzZs";
    const onToken = token => {
        // stripe payment could only processed by a server(node, php ...)
        // here wher we call our backend passing the token  and process the payment
        alert('payment successfull')
        console.log('token ',token);
    }
    return(
        <StripeCheckout
            name="Miladi Co"
            label="Pay now"
            panelLabel="Pay now your order"
            description={`Your total is $${price}`}
            shippingAddress
            billingAddress
            image={require('../../assets/me.png')}
            stripeKey={puslishableKey}
            amount={priceForStripe}
            token={onToken}
        />
    )
}

export default StripeButton;