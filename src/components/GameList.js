import React from 'react';

export default class GameList extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	isInCart = id => {
		return undefined !== this.props.inCart.find(item => item.id == id);
	}

	render(){
		return (
			<div className="gameList">
				{this.props.games.map((game,index)=>{
					return (
						<div className="gameItem">
							<img src={game.image} />
							<div className="gameMeta">
								<h5>{game.title}</h5>
								<div className="actionButtons">
									{undefined !== game.discount && (
										<button className="discountTag">{game.discount}%</button>
									)}

									{undefined === game.purchased && !this.isInCart(game.id) && (
										<button className="addToCart" onClick={()=>this.props.onAdd(game)} >$ {game.price}</button>
									)}

									{undefined !== game.purchased && (
										<button className="addToCart">Owned</button>
									)}

									{undefined === game.purchased && this.isInCart(game.id) && (
										<button className="addToCart">In Cart</button>
									)}

								</div>
							</div>
						</div>
					)
				}
				)}
			</div>
		)
	}
}