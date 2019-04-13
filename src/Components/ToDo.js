import React, { Component } from "react";
import "./Style.css";

export default class ToDo extends Component {
  render() {
    return (
      <div className="Container">
        <h4>To Do</h4>
        <button>Add Item</button>
      </div>
    );
  }
}
