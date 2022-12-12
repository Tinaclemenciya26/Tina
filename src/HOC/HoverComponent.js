import React, { Component } from 'react'

export default class HoverComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {count:0}
         
      }
  render() {
    return (
      <div>
      <button> onClick={this.inc}>Click{this.state.count}</button></div>
    )
  }
  inc()=>{this.setsState({count:this.state.count+1})}
}
