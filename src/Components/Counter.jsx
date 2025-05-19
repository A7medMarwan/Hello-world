import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  inc() {
    this.setState(
      {
        count: this.state.count + 1
      }, () => console.log('callback = ' + this.state.count)
    )
    console.log(this.state.count)  
  }
  render() {
    return (
      <div>
        <h1>Counter = {this.state.count}</h1>
        <button onClick={() => this.inc()}>Increment</button>
      </div>
    )
  }
}

