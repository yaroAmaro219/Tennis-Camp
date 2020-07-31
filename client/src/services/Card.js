// import React from 'react'
// import {loadStripe} from '@stripe/stripe-js';
// import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';
// import Form from './Form'
// const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

// {/* <script src="https://js.stripe.com/v3/"></script>

//   <label>Card
//   <div id="card-element"></div>
//   </label>


//   <label for="card-element">Card</label>
//   <div id="card-element"></div>

//   <script>
//     cardElement.mount('#card-element');
// </script> */}
// const stripe = ''
// var elements = stripe.elements();
// var cardElement = elements.create('card');
// var cardElement = elements.getElement('card');



// class Card extends React.Component {


//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const {stripe, elements} = this.props;
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });
//   };

  

// //const InjectedCheckoutForm = () => (
// //  <ElementsConsumer>
// //    {({stripe, elements}) => (
// //      <CheckoutForm stripe={stripe} elements={elements} />
// //    )}
// //  </ElementsConsumer>
// //);
  



//   render() {
//     const {stripe} = this.props;
//     return (
// 		<div className="pay">
// 		<Form />
//       <form onSubmit={this.handleSubmit}>
// 			<Elements stripe={stripePromise}>
//         <CardElement />
// 				</Elements>
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
// 			</div>
//     );
//   }
// }


// export default Card

