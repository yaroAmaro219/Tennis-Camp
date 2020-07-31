// import React, {Component} from 'react'
// import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'
// <script src="https://js.stripe.com/v3/"></script>

// class Form extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			name: ""
// 		}
// 	}

// 	handleSubmit = ( ) => {
// 		try{
//       //	let token = await this.props
      
// 		}catch(e){
// 			throw(e)
// 		}
// 	}

// 	render(){
// 		return(
// 			<main className="container">
// 				<form
// 					onSubmit={this.handleSubmit}>
// 					<label>Name</label>
// 					<input
// 						type="text"
// 						className="input"
// 						value={this.state.name}
// 						onChange={(e)=>this.setState({name: e.target.value})}
// 					/>
// 					<label>Amount</label>
// 					<input
// 						type="text"
// 						className="input"
// 						value={this.state.amount}
// 						onChange={(e)=> this.setState({amount: e.target.value})}
// 					/>
// 					<label>CC</label>
// 					<CardElement className="cardelement" />
// 					<button className="button"> Charge it!</button>
// 				</form>
// 			</main>
// 				)
// 	}
// }

// export default injectStripe(Form);
