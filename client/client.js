// var react = require('react')
// var render = require('react-dom').render;
import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// config and create store
let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: 'Initial todo for demo purposes'
    }],
    user: {
        username: 'ed',
        id: '8'
    }
}

// createstore()recudes, initialState)
let store = configureStore(initialState)



render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
