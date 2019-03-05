import React, { Component } from "react"

class Pagination extends Component {
  getPageTotal() {
    return this.props.activeState.images.map((imgInfo) => {
      //get an array of just the albumIds
      return imgInfo.albumId
    }).sort((a, b) => {
      //sort in descending order
      return b - a
    })[0] //then return the value in the first position in the array
  }

  goNext() {
    this.props.store.dispatch({
      type: "PAGE_NEXT",
      lastPage: this.getPageTotal()
    })
  }

  goPrevious() {
    this.props.store.dispatch({
      type: "PAGE_PREVIOUS",
    })
  }

  goFirst() {
    this.props.store.dispatch({
      type: "PAGE_FIRST",
    })
  }

  goLast() {
    this.props.store.dispatch({
      type: "PAGE_LAST",
      lastPage: this.getPageTotal()
    })
  }

  render() {
    return (
      <div className="my-2">
        <div className="btn-group">
          <button onClick={()=>this.goFirst()} className={this.props.activeState.page > 1 ? "btn btn-outline-secondary" : "btn btn-outline-secondary disabled"} disabled={this.props.activeState.page > 1 ? false : true}><i className="fas fa-angle-double-left"></i></button>
          <button onClick={()=>this.goPrevious()} className={this.props.activeState.page > 1 ? "btn btn-outline-secondary" : "btn btn-outline-secondary disabled"} disabled={this.props.activeState.page > 1 ? false : true}><i className="fas fa-angle-left"></i></button>
        </div>
        &nbsp; Page {this.props.activeState.page} of {this.getPageTotal()} &nbsp;
        <div className="btn-group">
          <button onClick={()=>this.goNext()} className={this.props.activeState.page < this.getPageTotal() ? "btn btn-outline-secondary" : "btn btn-outline-secondary disabled"} disabled={this.props.activeState.page < this.getPageTotal() ? false : true}><i className="fas fa-angle-right"></i></button>
          <button onClick={()=>this.goLast()} className={this.props.activeState.page < this.getPageTotal() ? "btn btn-outline-secondary" : "btn btn-outline-secondary disabled"} disabled={this.props.activeState.page < this.getPageTotal() ? false : true}><i className="fas fa-angle-double-right"></i></button>
        </div>
      </div>
    )
  }
}

export default Pagination