import React, { Component } from 'react'

class TextDisplay extends Component {

    handleClick() {
        this.props.deleteLetter()
        // console.log('buttone deletee')
        // console.log(this)
    }

    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <button onClick={this.handleClick.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default TextDisplay