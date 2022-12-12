import React, { Component } from 'react'

export default class State extends Component {
  constructor(props){
    super(props)
  this.state={
    count:0,
    name:"tina",
  }
  }
  inc=()=>
  {
    this.setState({count.this.state.count+1})
  }
  render() {
    console.log(this.state.count)
    return (
      <>
      
      </>
      <div>State</div>
    )
  }
}
 