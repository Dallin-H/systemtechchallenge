import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import "./Style.css";

export default class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.getCards();
  }

  // getCards will fetch cards for this component.
  getCards = () => {
    axios.post(`/api/cards`, "Completed").then(res => {
      let completedCards = res.data.filter(card => card.table === "Completed");
      this.setState({ cards: completedCards });
    });
  };

  // moveCard will change the table value for that item then reload the page.
  moveCard = (ID, string) => {
    console.log(ID, string);
    let messageObj = { ID, string };
    axios.post(`/api/moveCard/`, messageObj).then(res => {
      window.location.reload();
    });
  };

  // handleInput will update state according to what is typed into the the input field.
  handleInput = value => {
    this.setState({ input: value });
  };
  // addCard will add an object to the cards array in the server then reload the page.
  addCard = () => {
    const { input } = this.state;
    let messageObj = { text: input, table: "Completed" };
    axios.post(`/api/addCard`, messageObj).then(res => {
      window.location.reload();
    });
  };

  render() {
    const mappedCards = this.state.cards.map(card => {
      return (
        <Card
          key={card.ID}
          text={card.text}
          cardID={card.ID}
          moveCard={this.moveCard}
        />
      );
    });
    return (
      <div className="Container">
        <h4>Completed</h4>
        <input
          placeholder="add item to Completed"
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={this.addCard}>Add Item</button>
        {mappedCards}
      </div>
    );
  }
}
