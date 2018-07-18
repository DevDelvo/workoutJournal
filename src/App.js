import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar'
import { LogIn } from './components/LogIn'
import Routes from './routes';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <LogIn />
      </div>
    );
  }
}

export default App;
