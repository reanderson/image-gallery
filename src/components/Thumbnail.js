import React, { Component } from "react"

class Thumbnail extends Component {

  viewImage() {
    this.props.store.dispatch({
      type: "SET_IMAGE",
      info: this.props.imgInfo
    })

    this.props.store.dispatch({
      type: "IMG_VIEW",
    })
  }

  render() {
    return (<div className={this.props.leftCol ? "col col-md-3 col-sm-4 col-6" : "col col-md-6 col-12"}>
      <img src={this.props.imgInfo.thumbnailUrl} alt={this.props.imgInfo.title} className="img-thumbnail my-1" onClick={() => this.viewImage()}/>
    </div>)
  }
}

export default Thumbnail