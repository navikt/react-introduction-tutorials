import React, { Component } from 'react';

class Todo extends Component {

  state = {
    todos: [],
    newTodo: '',
    editTodo: '',
    editTodoIndex: undefined
  }

  onNewTodoRequest() {
    if (this.state.newTodo !== '') {
      this.setState({
        todos: this.state.todos.concat(this.state.newTodo),
        newTodo: ''
      })
    }
  }

  onNewTodoChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  onEditTodoRequest(todo, index) {
    this.setState({
      editTodo: todo,
      editTodoIndex: index
    })
  }

  onEditTodoChange(e) {
    this.setState({
      editTodo: e.target.value
    })
  }

  onEditTodoSave() {
    if (this.state.editTodo !== '') {
      this.setState({
        todos: this.state.todos.map((oldTodo, i) => {
          return i === this.state.editTodoIndex ? this.state.editTodo : oldTodo
        }),
        editTodo: '',
        editTodoIndex: undefined
      })
    }
  }

  onEditTodoCancel() {
    this.setState({
      editTodo: '',
      editTodoIndex: undefined
    })
  }

  onRemoveTodoRequest(index) {
    this.setState({
      todos: this.state.todos.filter((oldTodo, i) => {
        return i !== index
      })
    })
  }

  onRemoveAllTodosRequest () {
    this.setState({
      todos: []
    })
  }

  onMoveTodoUp(todoIndex) {
    this.setState({
      todos: this.state.todos.map((oldTodo, i) => {
        if (i === todoIndex) {
          return this.state.todos[todoIndex - 1]
        } else if (i === (todoIndex - 1)) {
          return this.state.todos[todoIndex]
        } else {
          return oldTodo
        }
      })
    })
  }

  onMoveTodoDown(todoIndex) {
    this.setState({
      todos: this.state.todos.map((oldTodo, i) => {
        if (i === todoIndex) {
          return this.state.todos[todoIndex + 1]
        } else if (i === (todoIndex + 1)) {
          return this.state.todos[todoIndex]
        } else {
          return oldTodo
        }
      })
    })
  }

  render() {
    return <div className='Todo-app m-4'>
      <header className='Todo-header mb-4'>
        <h2>Todo app, basic example</h2>
      </header>
      <div className='Todo-form input-group mb-3'>
        <ul className='Todo-list list-group w-100'>
          {this.state.todos.map((todo, index) => {
            return <li key={index} className='Todo-item list-group-item'>
              <div className='d-flex justify-content-between'>
                {this.state.editTodoIndex === index ?
                  <div className='d-flex justify-content-between'>
                    <input
                      className='Todo-editTodoInput form-control mr-1'
                      onChange={this.onEditTodoChange.bind(this)}
                      value={this.state.editTodo}/>
                    <button
                      className='Todo-saveButton btn btn-success btn-sm mr-1'
                      onClick={this.onEditTodoSave.bind(this)}>
                        save
                    </button>
                    <button
                      className='Todo-cancelButton btn btn-danger btn-sm mr-1'
                      onClick={this.onEditTodoCancel.bind(this)}>
                        cancel
                    </button>
                  </div>
                  : <span>{todo}</span>}
                <div className='Todo-buttons'>
                  {index > 0 ? <button
                    className='Todo-goUpButton btn btn-link btn-lg p-0 mr-1'
                    onClick={this.onMoveTodoUp.bind(this, index)}>
                      ⬆
                  </button> : null}
                  {this.state.todos.length > 1 && index < this.state.todos.length - 1 ? <button
                    className='Todo-goDownButton btn btn-link btn-lg p-0 mr-1'
                    onClick={this.onMoveTodoDown.bind(this, index)}>
                      ⬇
                  </button> : null}
                  <button
                    className='Todo-editTodoButton btn btn-warning btn-sm mr-1'
                    onClick={this.onEditTodoRequest.bind(this, todo, index)}>
                      edit
                  </button>
                  <button
                    className='Todo-removeTodoButton btn btn-danger btn-sm mr-1'
                    onClick={this.onRemoveTodoRequest.bind(this, index)}>
                      remove
                  </button>
                </div>
              </div>
            </li>
          })}
        </ul>
      </div>
      <div className='Todo-buttons'>
        <input className='Todo-newTodoInput form-control'
          onChange={this.onNewTodoChange.bind(this)}
          value={this.state.newTodo}/>
        <button className='Todo-newTodoButton btn btn-primary mt-3 mr-1'
          onClick={this.onNewTodoRequest.bind(this)}>
            Add
        </button>
        <button className='Todo-removeAllButton btn btn-danger mt-3 mr-1'
          onClick={this.onRemoveAllTodosRequest.bind(this)}>
            Remove All
        </button>
      </div>
    </div>
  }
}

export default Todo
