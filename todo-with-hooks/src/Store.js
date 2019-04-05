import React from 'react'

export const Store = React.createContext()

const initialState = {
  todos: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'TODO/ADD':
      return {
        todos: state.todos.concat(action.payload.todo)
      };
    case 'TODO/EDIT':
      return {
        todos: state.todos.map((oldTodo, i) => {
          return i === action.payload.index ? action.payload.todo : oldTodo
        })
      }
    case 'TODO/REMOVE':
      return {
        todos: state.todos.filter((oldTodo, i) => {
          return i !== action.payload.index
        })
      }
    case 'TODO/MOVE_UP':
      return {
        todos: state.todos.map((oldTodo, i) => {
          if (i === action.payload.index) {
            return state.todos[action.payload.index - 1]
          } else if (i === (action.payload.index - 1)) {
            return state.todos[action.payload.index]
          } else {
            return oldTodo
          }
        })
      }
    case 'TODO/MOVE_DOWN':
      return {
        todos: state.todos.map((oldTodo, i) => {
          if (i === action.payload.index) {
            return state.todos[action.payload.index + 1]
          } else if (i === (action.payload.index + 1)) {
            return state.todos[action.payload.index]
          } else {
            return oldTodo
          }
        })
      }

    case 'TODO/REMOVE_ALL':
        return initialState;
    default:
      return state;
  }
}

export function StoreProvider(props) {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Store.Provider
    value={{
      state: state,
      dispatch: dispatch
    }}>
    {props.children}
  </Store.Provider>
}
