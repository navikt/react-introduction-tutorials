import React, { useState, useEffect } from 'react';
import { Store } from './Store';
import TodoItem from './TodoItem'

export default function Todo () {

  const { state, dispatch } = React.useContext(Store);
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    document.title = `You have ${state.todos.length} items in your Todo list`;
  }, [state.todos])

  function onNewTodoRequest() {
    if (newTodo !== '') {
      dispatch({
        type: 'TODO/ADD',
        payload: {
          todo: newTodo
        }
      });
      setNewTodo('')
    }
  }

  function onNewTodoChange(e) {
    setNewTodo(e.target.value)
  }

  function onRemoveAllTodosRequest () {
    dispatch({
      type: 'TODO/REMOVE_ALL'
    });
  }

  return <div className="Todo-app m-4">
    <header className="Todo-header mb-4">
      <h2>Todo app, with hooks</h2>
    </header>
    <div className='input-group mb-3'>
      <ul className="Todo-list list-group w-100">
        {state.todos.map((todo, index) => {
          return <TodoItem
            todo={todo}
            index={index}
            canGoUp={index > 0}
            canGoDown={state.todos.length > 1 && index < state.todos.length - 1}
            dispatch={dispatch}
          />
        })}
      </ul>
    </div>
    <div>
      <input className='form-control' onChange={(e) => onNewTodoChange(e)} value={newTodo}/>
      <button className='btn btn-primary mt-3 mr-1' onClick={() => onNewTodoRequest()}>Add</button>
      <button className='btn btn-danger mt-3 mr-1' onClick={() => onRemoveAllTodosRequest()}>Remove All</button>
    </div>
  </div>
}
