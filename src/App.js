import React, { Component } from 'react';
import Backlog from './Components/Backlog'
import Completed from './Components/Completed'
import InProgress from './Components/InProgress'
import ToDo from './Components/ToDo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Backlog />
        <ToDo />
        <InProgress />
        <Completed />
      </div>
    );
  }
}

export default App;
