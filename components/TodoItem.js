import React, { Component } from 'react'

class TodoItem extends Component {

    handleComplete() {
        console.log('cli complete')
        this.props.actions.completeTodo(this.props.todo.id)
    }

    handleDelete() {
        console.log('cli delete')
        this.props.actions.deleteTodo(this.props.todo.id)
    }

    render() {
        return (
            <li className="ListItem">
                <div>{this.props.todo.text}</div>
                <button onClick={this.handleComplete.bind(this)}>Completed</button>
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
            </li>
        )
    }
}

export default TodoItem