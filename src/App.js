import React, { Component } from 'react';
import './App.css';
import API from './utils/API.js'
import LeftCol from './components/LeftCol.js'
import Thumbnail from './components/Thumbnail.js'

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

  toggleFavoritesView(){
    this.props.store.dispatch({
      type: "FAV_VIEW"
    })
  }

  render() {
    if (this.props.activeState.images !== []) {
      return (
        <div className="container py-3">
          <div className="row">
            <LeftCol {...this.props}/>

            <div className="col col-12 col-md-3">
              <button className="btn btn-primary btn-block text-center mb-2" onClick={()=>this.toggleFavoritesView()}><i className="fas fa-star" /> {this.props.activeState.viewFavorites ? "Hide" : "Show"} {this.props.activeState.favorites.length} Favorites </button>
              <div className="row">
              {this.props.activeState.viewFavorites ? 
                this.props.activeState.images.filter((imgInfo) => this.props.activeState.favorites.includes(imgInfo.id))
                .map((imgInfo) => {
                  return (<Thumbnail imgInfo={imgInfo} store={this.props.store} key={`${imgInfo.id}-fav`}/>)
                }) 
                : ""}
                </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div className="App">
        Retrieving images...
      </div>)
    }
    ;
  }
}

export default App;
