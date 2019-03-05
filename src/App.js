import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API.js'

let images

class App extends Component {

  componentDidMount() {
    //When the page loads, get the image data from the API
    API.getImages()
    .then((res) => {
      images = res.data
      //Call an action to change the loaded part of the state to true
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
