import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoItem from './TodoItem'

import * as todoActions from './actions/todo'

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(Object.assign({}, todoActions), dispatch) }
}

class Todo extends Component {

  state = {
    newTodo: ''
  }

  onNewTodoRequest() {
    if (this.state.newTodo !== '') {
      this.props.actions.addTodo(this.state.newTodo)
      this.setState({
        newTodo: ''
      })
    }
  }

  onRemoveAllTodosRequest() {
    this.props.actions.removeAllTodos()
  }

  onNewTodoChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  render() {
    return <div className="Todo-app m-4">
      <header className="Todo-header">
        <h2>Todo app, example with redux</h2>
      </header>
      <div className='Todo-form input-group mb-3'>
        <ul className="Todo-list list-group w-100">
          {this.props.todos.map((todo, index) => {
            return <TodoItem
              todo={todo}
              index={index}
              canGoUp={index > 0}
              canGoDown={this.props.todos.length > 1 && index < this.props.todos.length - 1}
              {...this.props}/>
          })}
        </ul>
      </div>
      <div>
        <input className='form-control'
          onChange={this.onNewTodoChange.bind(this)}
          value={this.state.newTodo}/>
        <button className='btn btn-primary mt-3 mr-1'
          onClick={this.onNewTodoRequest.bind(this)}>
          Add
        </button>
        <button className='btn btn-danger mt-3 mr-1'
          onClick={this.onRemoveAllTodosRequest.bind(this)}>
          Remove All
        </button>
      </div>
    </div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
