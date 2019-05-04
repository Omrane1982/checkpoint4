import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';


class App extends Component {
  render() {
    const mystyle={
      display:"flex"
    }
    return (
      <div className="App">
      
        <header className="App-header">
        <div style={mystyle}>
         <Card title="omrane " gender="male" name="Etudiant Go My Code" />
         <Card title="omrane " gender="female" name="Etudiant Go My Code" />
         
         
          </div>
        </header>
      </div>
    );
  }
}

export default App;
