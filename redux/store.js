import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'

// TODO: Add Middleware...
let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { todos: [], user: {} }) {
    return finalCreateStore(rootReducer,  initialState)
}