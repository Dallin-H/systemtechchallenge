import React, { Component } from "react";
import Card from './Card'
import axios from 'axios'
import './Style.css'

export default class Backlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        this.getCards()
    }

    getCards = () => {
        axios.get('api/cards').then(res => {
            console.log(res)
        })
    }

    addCard = () => {}

    moveCardToDo = () => {}

  render() {
    return (
      <div className='Container'>
        <h4>Backlog</h4>
        <button>Add Item</button>
        <Card />
      </div>
    );
  }
}
