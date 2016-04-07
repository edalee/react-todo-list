import React, { Component } from 'react'
import actions from '../redux/actions'


class TodoInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    deleteLetter() {
        this.setState({
            inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
        })
    }

    handleChange(event) {
        // console.log(event.target.value)
        this.setState({
            inputText: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        // console.log('clickked')
        this.props.addTodo(this.state.inputText)

    }

    render() {
        return (
            <div className="TextDisplay">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        placeholder='Type your To-do'
                        value={this.state.inputText}
                        onChange={this.handleChange.bind(this)}
                    />
                    <input type='submit' text='Submit' />
                </form>
            </div>
        )
    }
}

export default TodoInput