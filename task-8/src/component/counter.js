import React from "react";

export default class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }


  render(){
      return(
        <div>
          <h2>{this.state.counter}</h2>
            <button onClick={() => this.setState({counter: this.state.counter + 1})}>увеличить</button>
            <button onClick={() => this.setState({counter: this.state.counter - 1})}>уменьшить</button>
            <button onClick={() => this.setState({counter: this.state.counter = 0})}>сбросс</button>
      </div>
      )
  }
}