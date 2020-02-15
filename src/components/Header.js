import React from 'react';
import logo from '../images/gog-logo.png';
import cartIcon from '../images/icocart.png';
import _ from 'lodash';
import CartItems from './CartItems';

export default class Header extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	cartOpen: false
	  };
	}

	static defaultProps = {
	  cart: []
	}

	render(){
		return(
			[
			<div className="overlayCart" hidden={!this.state.cartOpen} onClick={()=>this.setState({cartOpen: false})} ></div>,
			<header className="App-header" >
		        <div className="content">
		          <div className="headerItems">
		            <img src={logo} className="logo" />
		            <div className="cartContainer">
		            	<button className={this.state.cartOpen ? "cartButtonOpen" : "cartButton"} onClick={()=>this.state.cartOpen ? this.setState({cartOpen: false}) : this.setState({cartOpen: true})} ><img src={cartIcon} /> {this.props.cart.length > 0 ? <span> {this.props.cart.length}</span> : null}</button>
		            	{this.state.cartOpen && (
		            		<div className="cartContent">
		            			<div className="cartHeader">
		            				<div className="itemsInCart">
		            					<h5>{this.props.cart.length > 0 ? withPlural(this.props.cart.length,"item") + " in cart" : "Your cart is empty"}</h5>
		            				</div>
		            				<div className="cartAmount">
		            					<h5>$ {this.props.cart.length > 0 ? _.sumBy(this.props.cart,'price') : "0"}</h5>
		            					<button className="clearCartButton" onClick={this.props.onClear} ><h5>clear cart</h5></button>
		            				</div>
		            			</div>
		            			<CartItems items={this.props.cart} deleteAction={this.props.onDelete} />
		            		</div>
	            		)}
		            </div>
		          </div>
		        </div>
	      	</header>
	      	]
		)
	}
}

function withPlural(number, word){
	let initialPhrase = number + " " + word;
	return  number > 1 ? initialPhrase + "s" : initialPhrase;
}