import React from 'react';

export default class CartItems extends React.Component{
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render(){
		return (
		<ul className="cartList">
			{this.props.items.map((game,index) => {return (
				<li key={index} >
					<div className="cartItem">
						<div className="itemImage">
							<img src={game.image} />
						</div>
						<div className="itemTitle">
							<p >{game.title}</p>
							<p>
							<a href="#" className="cartRemoveLink" onClick={()=>this.props.deleteAction(game.id)} >
								Remove
							</a>
							</p>
						</div>
						<div className="itemPrice">
							<span>$ {game.price}</span>
						</div>
					</div>
				</li>
			)}
			)}
		</ul>)
	}
}