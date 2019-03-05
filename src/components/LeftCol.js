import React, { Component } from "react"
import Thumbnail from "./Thumbnail.js"

class LeftCol extends Component {

  addFavorite () {
    this.props.store.dispatch({
      type: "FAVORITE_ADD",
      id: this.props.activeState.imageToView.id
    })
  }

  removeFavorite() {
    this.props.store.dispatch({
      type: "FAVORITE_REMOVE",
      id: this.props.activeState.imageToView.id
    })
  }

  closeImgView() {
    this.props.store.dispatch({
      type: "THUMB_VIEW",
    })
  }

  render() {

    if (this.props.activeState.viewImage) {
      return (<div className="col col-12 col-md-9 text-center">
        <h2>{this.props.activeState.imageToView.title}</h2>
        <img className="img-fluid mb-3" src={this.props.activeState.imageToView.url} alt={this.props.activeState.imageToView.title} />
        <div className="row">
          <div className="col">
          {this.props.activeState.favorites.includes(this.props.activeState.imageToView.id) ? 
          (<button className="btn btn-primary btn-block" onClick={()=>this.removeFavorite()}><i className="far fa-star" /> Remove from Favorites</button>) : 
          (<button className="btn btn-primary btn-block" onClick={()=>this.addFavorite()}><i className="fas fa-star" /> Add to Favorites</button>)}
          </div>
          <div className="col">
          <button className="btn btn-danger btn-block" onClick={()=>this.closeImgView()}>Close</button>
          </div>
        </div>
      </div>)
    }
    else {
      return (<div className="col col-12 col-md-9">
        <div className="row justify-content-center">
        {/* Add pagination here */}
          {
            this.props.activeState.images.filter((imgInfo) => {
              return imgInfo.albumId === this.props.activeState.page
            })
              .map((imgInfo) => {
                return (<Thumbnail imgInfo={imgInfo} store={this.props.store} leftCol={true} key={imgInfo.id}/>)
              })
          }
          {/* Also put pagination here */}
        </div>
      </div>)
    }


  }
}

export default LeftCol