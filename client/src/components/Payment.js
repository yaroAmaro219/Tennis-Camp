import React from 'react'
import Venmo from '../images/venmo-ar21.svg'
 
function Payment () {
    return (
      <div class='payment-page'>
        <h1>Payment</h1>
        <h3>$55/half day</h3>
        <h3>$100/full day</h3>
        <h3>$500/week</h3>
        <a target="_blank" rel="noopener noreferrer" href='http://paypal.me/tenniscoachesofnyc'><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" /></a>
        <h2 class='or'>Or:</h2>
        <a target="_blank" rel="noopener noreferrer" href='https://venmo.com/Artemie-Amari'><img class='venmo' src={Venmo}/></a>
      </div>
    );
  }
 
export default Payment;

