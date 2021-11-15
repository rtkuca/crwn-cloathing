import React from "react";
import StripeCheckout from "react-stripe-checkout";

// teste numbers 4242 4242 4242 4242 01/20 123

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishedKey = 'pk_test_51Jlz5UDqh4M0cbIdiKhFzbfFqWaQzC26DTZdyFU54lSuXrGBXn5Ksv7JNfGQDpAGtJbEG9VcRsPyWiIPBUQsJxuF00pqvRrUA4';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(

        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is ${price}`}
            token={onToken}
            stripeKey={publishedKey}
        />

    );

}

export default StripeCheckoutButton;