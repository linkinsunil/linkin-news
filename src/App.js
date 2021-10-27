import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />    
        <News title="Card Title" desc="Card Description" />  
      </div>
    )
  }
}
