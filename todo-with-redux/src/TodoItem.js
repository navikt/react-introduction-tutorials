import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: props.todo,
      edit: false
    }
  }

  onEditTodoChange(e) {
    this.setState({
      todo: e.target.value
    })
  }

  onEditTodoRequest() {
    this.setState({
      edit: true
    })
  }

  onRemoveTodoRequest() {
    this.props.actions.removeTodo(this.props.index)
  }

  clearEditTodo() {
    this.setState({
      edit: false
    })
  }

  onEditTodoSave() {
    this.props.actions.editTodo(this.state.todo, this.props.index)
    this.clearEditTodo()
  }

  onEditTodoCancel() {
    this.clearEditTodo()
  }

  onMoveTodoUp() {
    this.props.actions.moveTodoUp(this.props.index)
  }

  onMoveTodoDown() {
    this.props.actions.moveTodoDown(this.props.index)
  }

  render () {
    return <li className="Todo-item list-group-item">
      <div className="d-flex justify-content-between">
        {this.state.edit ? <div className="d-flex justify-content-between">
          <input className='Todo-editTodoInput form-control mr-1'
            onChange={this.onEditTodoChange.bind(this)}
            value={this.state.todo}/>
          <button className='Todo-saveButton btn btn-success btn-sm mr-1'
            onClick={this.onEditTodoSave.bind(this)}>
              save
          </button>
          <button className='Todo-cancelButton btn btn-danger btn-sm mr-1'
            onClick={this.onEditTodoCancel.bind(this)}>
              cancel
          </button>
        </div>
        : <span>{this.props.todo}</span>}
        <div className='Todo-buttons'>
          {this.props.canGoUp ?
            <button className='Todo-goUpButton btn btn-link btn-lg p-0 mr-1'
              onClick={this.onMoveTodoUp.bind(this)}>
              ⬆
            </button> : null}
          {this.props.canGoDown ?
            <button className='Todo-goDownButton btn btn-link btn-lg p-0 mr-1'
              onClick={this.onMoveTodoDown.bind(this)}>
              ⬇
            </button> : null}
          <button className='Todo-editButton btn btn-warning btn-sm mr-1'
            onClick={this.onEditTodoRequest.bind(this)}>
              edit
          </button>
          <button className='Todo-removeButton btn btn-danger btn-sm mr-1'
            onClick={this.onRemoveTodoRequest.bind(this)}>
              remove
          </button>
        </div>
      </div>
    </li>
  }
}

export default TodoItem
