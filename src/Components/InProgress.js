import React, { Component } from "react";
import "./Style.css";

export default class InProgress extends Component {
  render() {
    return (
      <div className="Container">
        <h4>In Progress</h4>
        <button>Add Item</button>
      </div>
    );
  }
}
