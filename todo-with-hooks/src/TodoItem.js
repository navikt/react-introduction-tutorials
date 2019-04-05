import React, { useState, useEffect } from 'react';

export default function TodoItem (props) {

  const [todo, setTodo] = useState(props.todo)
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    setTodo(props.todo)
  }, [props.todo])

  function onEditTodoRequest() {
    setEdit(true)
  }

  function onEditTodoChange(e) {
    setTodo(e.target.value)
  }

  function onEditTodoSave() {
    if (todo !== '') {
      props.dispatch({
        type: 'TODO/EDIT',
        payload: {
          todo: todo,
          index: props.index
        }
      });
      setTodo('')
      setEdit(false)
    }
  }

  function onEditTodoCancel() {
    setTodo(props.todo)
    setEdit(false)
  }

  function onRemoveTodoRequest() {
    props.dispatch({
      type: 'TODO/REMOVE',
      payload: {
        index: props.index
      }
    });
  }

  function onMoveTodoUp(todoIndex) {
    props.dispatch({
      type: 'TODO/MOVE_UP',
      payload: {
        index: props.index
      }
    });
  }

  function onMoveTodoDown(todoIndex) {
    props.dispatch({
      type: 'TODO/MOVE_DOWN',
      payload: {
        index: props.index
      }
    });
  }

  return <li className="Todo-item list-group-item">
    <div className="d-flex justify-content-between">
      {edit ? <div className="d-flex justify-content-between">
        <input className='Todo-editTodoInput form-control mr-1'
          onChange={(e) => onEditTodoChange(e)}
          value={todo}/>
        <button className='Todo-saveButton btn btn-success btn-sm mr-1'
          onClick={() => onEditTodoSave()}>
            save
        </button>
        <button className='Todo-cancelButton btn btn-danger btn-sm mr-1'
          onClick={() => onEditTodoCancel()}>
            cancel
        </button>
      </div>
      : <span>{todo}</span>}
      <div className='Todo-buttons'>
        {props.canGoUp ?
          <button className='Todo-goUpButton btn btn-link btn-lg p-0 mr-1'
            onClick={() => onMoveTodoUp()}>
            ⬆
          </button> : null}
        {props.canGoDown ?
          <button className='Todo-goDownButton btn btn-link btn-lg p-0 mr-1'
            onClick={() => onMoveTodoDown()}>
            ⬇
          </button> : null}
        <button className='Todo-editButton btn btn-warning btn-sm mr-1'
          onClick={() => onEditTodoRequest()}>
            edit
        </button>
        <button className='Todo-removeButton btn btn-danger btn-sm mr-1'
          onClick={() => onRemoveTodoRequest()}>
            remove
        </button>
      </div>
    </div>
  </li>
}
