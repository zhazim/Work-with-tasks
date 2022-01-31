import React from "react";

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stateTodo: ["Buy Lemonade", "Make toasty","Repair car", "Play games", "Pet a cat"]}
    }
    render(){
        return(
            <ol id="todo-list">
                {this.state.stateTodo.map(item => (
                    <li>{item}</li>
                ))}
            </ol>
        )
    }
}

