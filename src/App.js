import React, { Component } from 'react';
import './App.css';
import API from './utils/API.js'
import { AST_PropAccess } from '../node_modules/terser';
import LeftCol from './components/LeftCol.js'

class App extends Component {

  componentDidMount() {
    //When the page loads, get the image data from the API
    API.getImages()
      .then((res) => {
        //Call an action to change the loaded part of the state to true
        this.props.store.dispatch({
          type: "IMAGES_LOADED",
          images: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    if (this.props.activeState.images !== []) {
      return (
        <div className="container py-3">
          <div className="row">
            <LeftCol {...this.props}/>

            <div className="col col-12 col-md-3">
              <button className="btn btn-primary btn-block text-center"><i className="fas fa-star" /> {this.props.activeState.viewFavorites ? "Hide" : "Show"} {this.props.activeState.favorites.length} Favorites </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div className="App">
        Look this thing's loading ok?
      </div>)
    }
    ;
  }
}

export default App;
