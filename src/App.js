import React from 'react';
import './App.css';
import Header from "./components/Header";
import gameOfTheWeek from "./images/bg.png";
import GameList from './components/GameList';

export default class App extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      cartItems: [],
      games: []
    };
  }

  componentDidMount(){
    this.setState({games: [
      {price: 9.99,title:"Assassin's creed: Director's cut",id:3,image: require("./images/img_3.png")},
      {price: 5.99,title:"The settlers 2: Gold edition",id:1,image: require("./images/img_1.png")},
      {price: 5.99,title:"Oddworld: Tranger's wrath",id:4,image: require("./images/img.png"),discount: 50},
      {price: 5.99,title:"Chaos on Deponia",id:5,image: require("./images/img_0.png"),purchased:true},
      {price: 4.99,title:"Neverwinter Nights",id:2,image: require("./images/img_2.png"),discount: 50}
      ]}) //this would be coming from an API call.
  }

  onClear = () => {
    this.setState({cartItems: []})
  }

  onDelete = id => {
    let newArray = this.state.cartItems.filter(obj => id !== obj.id);
    this.setState({cartItems: newArray});
  }

  onAdd = game => {
    if(undefined !== this.state.cartItems.find(item => item.id == game.id)) return null;
    let newArray = this.state.cartItems;
    newArray.push(game);
    this.setState({cartItems: newArray})
  }

  render() {
    return (
      <div className="App">
        <Header cart={this.state.cartItems} onDelete={this.onDelete} onClear={this.onClear} />
        <div className="contentWrapper">
          <div className="content">
            <div className="introSection">
              <h6>GAME OF THE WEEK</h6>
              <div className="introImage">
                <img src={gameOfTheWeek /*would be getting the game of the week from an api*/} />
                <button class="clearCartButton">You've found the hidden button</button>
              </div>
            </div>
            <div className="games">
              <GameList onAdd={this.onAdd} inCart={this.state.cartItems} games={this.state.games} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
