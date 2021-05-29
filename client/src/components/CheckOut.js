import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5X');


class CheckOut extends Component {

    state = {
        value: ""
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    handleClick = event => {
        this.props.history.push('/report')
    }

    current_order() {
        if (this.props.user.orders) {
            return this.props.user.orders.find(order => { 
                return this.props.user.current_order === order.id
            })
        }
    }

    totalPrice() {
        if (this.props.user.orders) {
           return <h5>Order Price: {this.current_order().total_price}</h5>
        }
    }

    // shippingPlusOrderPrice() {
    //     if (this.props.user.orders && this.state.value) {
    //         return <h2>Total Price: {this.current_order().total_price + parseInt(this.state.value)}</h2>
    //      }
    // }

    render() {
        // const totalPrice = this.current_order().total_price + parseInt(this.state.value)
        return (
            <div className="show-page">
                <div className="order-summary-checkout">
                    {this.totalPrice()}
                </div>
             
                {/* <div className="shipping-options">
                    <h5>Choose Shipping Method</h5>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="1000">Shipping</option>
                            <option value="1000">Regular</option>
                            <option value="12000">Express</option>
                           
                        </select>
                        </label>
                    
                    </form>

                </div> */}
            <div className="checkout-button">
            <Elements stripe={stripePromise}>
                {/* <MyCheckoutForm /> */}
                <CardElement
                  options={{
                    style: {
                      base: {
                        width: '66%',
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}/>
            </Elements>
                    <button onClick={this.handleClick}>Purchase</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.current_site_user
})

// const mapDispatchToProps = dispatch => ({
//     updateShippingRate: (shipping_rate) => dispatch(updateShippingRate(shipping_rate))
// })

export default connect(mapStateToProps)(CheckOut)
