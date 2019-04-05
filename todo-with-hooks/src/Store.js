import React from 'react'
import { todoReducer, initialTodoState } from './reducers/todo'

export const Store = React.createContext()

export function StoreProvider(props) {

  const [todoState, todoDispatch] = React.useReducer(todoReducer, initialTodoState);

  return <Store.Provider
    value={{
      state: {
        todo: todoState,
      },
      dispatch: {
        todo: todoDispatch
      }
    }}>
    {props.children}
  </Store.Provider>
}
