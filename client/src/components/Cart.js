import React, { Component } from 'react';

class Cart extends Component {
  render() {
    
    const { cart } = this.props
    console.log(cart)
    const order = cart
      &&
      cart.map((order, index) => {
        return (
          <>
            <h1>Items</h1>
            <h1>{order.location_id}</h1>
            <h1>{order.price}</h1>
            <h1>{order.kids}</h1>
            </>
      )
    })
    return (
      <div class='show-page'>
        <h1>Cart</h1>
        {order}
      </div>
    );
  }
}

export default Cart;