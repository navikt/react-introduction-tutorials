import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as reducers from './reducers'

const initialState = {}

const reducer = combineReducers({
  ...reducers
})

const store = createStore(reducer, initialState)

ReactDOM.render(<Provider store={store}>
  <Todo />
</Provider>, document.getElementById('root'));
