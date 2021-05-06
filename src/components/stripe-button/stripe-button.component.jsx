import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Iniq5Lsnk1dIlngMA84FMRCJ5xz3YklERSd7R83rMVNMtTGSHvl2RjN2XV7xISqtAGSatDt937e8KQC0mmYCMr600c2viBX6t';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Clothing-ECOMM'
            billingAddress
            shippingAddress
            // image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total amount is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;