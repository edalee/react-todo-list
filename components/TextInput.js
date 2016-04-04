import React, { Component } from 'react'
import TextDisplay from './TextDisplay'


class TextInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: 'Input text'
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



    render() {
        return (
            <div className="TextDisplay">
                <input
                    type="text"
                    placeholder='Input Text'
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                />
                <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
            </div>
        )
    }
}

export default TextInput