import React from 'react'
import { Link } from 'react-router-dom'
import Lock from '../images/144-lock.svg'
import Venmo from '../images/venmo-ar21.svg'
 
function Payment () {
  return (
    <div class='payment-page-container'>
      <h1 class='secure'><span class="icomoon-lock align-items-center pr-3"></span><img class='lock' src={Lock}/>Secure Payment</h1>
      <div class='payment-page'>
        
        <div class='cart'>
          <h1 class='cart-title'>Your cart</h1>
        </div>
        <div>
        <div class='summary'>
          <h1>Summary</h1>
          <h3>Total</h3>
          
            <a class='href' href='https://www.paypal.com/paypalme/tenniscoachesofnyc'>
        <button class='stripe-checkout'>Proceed to checkout</button>
            <h4 class='href'>-OR-</h4>
            <a href='https://www.paypal.com/paypalme/tenniscoachesofnyc'>
          <button class='paypal-checkout' >Checkout with <table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"><a href="https://www.paypal.com/paypalme/tenniscoachesofnyc" title="How PayPal Works" onclick="javascript:window.open('https://www.paypal.com/paypalme/tenniscoachesofnyc','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" border="0" alt="PayPal Logo" /></a></td></tr></table></button></a></a>
          </div>
        {/* <a target="_blank" rel="noopener noreferrer" href='http://paypal.me/tenniscoachesofnyc'><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" /></a>
        <h2 class='or'>Or:</h2>
        <a target="_blank" rel="noopener noreferrer" href='https://venmo.com/Artemie-Amari'><img class='venmo' src={Venmo}/></a> */}
          {/* <div class='accepted'>
            <h3>Accepted Payment Methods</h3>
            </div> */}
        </div>
        </div>
      </div>
    );
  }
 
export default Payment;

