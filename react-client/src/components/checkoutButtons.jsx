import React from 'react';


const CheckoutButtons = ({loggedIn}) => {
  return (
    <div className="buttonsNweiran">
    <button type="button" id="checkoutButton"><b>Add To Cart</b></button>
    <hr / >
    {(!loggedIn ?
      <span className="linkClick"> Turn on 1-Click ordering for this browser </span> :
      <button type="button" id="oneClickCheckout"><b>Buy now with 1-Click</b></button>
    )}
    <hr />
    </div>
  )
}

export default CheckoutButtons;
