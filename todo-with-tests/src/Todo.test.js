import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})

describe('Todo test', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Todo/>)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('adds a new todo item', () => {
    wrapper.instance().setState({
      newTodo: 'test1'
    })
    wrapper.instance().onNewTodoRequest()
    expect(wrapper.instance().state.newTodo).toEqual('')
    expect(wrapper.instance().state.todos).toEqual(['test1'])
    wrapper.instance().setState({
      newTodo: 'test2'
    })
    wrapper.instance().onNewTodoRequest()
    expect(wrapper.instance().state.newTodo).toEqual('')
    expect(wrapper.instance().state.todos).toEqual(['test1','test2'])
  })

  it('adds text to a new todo item', () => {
    let mockEvent = {target: {value: 'test'}}
    wrapper.instance().onNewTodoChange(mockEvent)
    expect(wrapper.instance().state.newTodo).toEqual('test')
  })

  it('requests a todo item to be edited', () => {
    wrapper.instance().onEditTodoRequest('test', 99)
    expect(wrapper.instance().state.editTodo).toEqual('test')
    expect(wrapper.instance().state.editTodoIndex).toEqual(99)
  })

  it('adds text to a todo item that is being edited', () => {
    let mockEvent = {target: {value: 'test'}}
    wrapper.instance().onEditTodoChange(mockEvent)
    expect(wrapper.instance().state.editTodo).toEqual('test')
  })

  it('saves a edited todo item', () => {
    wrapper.instance().setState({
      todos: ['test1', 'test2', 'test3'],
      editTodo: 'editedTest',
      editTodoIndex: 1
    })
    wrapper.instance().onEditTodoSave()
    expect(wrapper.instance().state.todos).toEqual(['test1', 'editedTest', 'test3'])
    expect(wrapper.instance().state.editTodo).toEqual('')
    expect(wrapper.instance().state.editTodoIndex).toEqual(undefined)
  })

  it('cancels a edited todo item', () => {
    wrapper.instance().setState({
      todos: ['test1', 'test2', 'test3'],
      editTodo: 'editedTest',
      editTodoIndex: 1
    })
    wrapper.instance().onEditTodoCancel()
    expect(wrapper.instance().state.todos).toEqual(['test1', 'test2', 'test3'])
    expect(wrapper.instance().state.editTodo).toEqual('')
    expect(wrapper.instance().state.editTodoIndex).toEqual(undefined)
  })

  it('removes a todo item', () => {
    wrapper.instance().setState({
      todos: ['test1', 'test2', 'test3']
    })
    wrapper.instance().onRemoveTodoRequest(1)
    expect(wrapper.instance().state.todos).toEqual(['test1', 'test3'])
  })

  it('removes all items', () => {
    wrapper.instance().setState({
      todos: ['test1', 'test2', 'test3']
    })
    wrapper.instance().onRemoveAllTodosRequest()
    expect(wrapper.instance().state.todos).toEqual([])
  })

  it('moves up one item', () => {
    wrapper.instance().setState({
      todos: ['test1', 'test2', 'test3']
    })
    wrapper.instance().onMoveTodoUp(1)
    expect(wrapper.instance().state.todos).toEqual(['test2', 'test1', 'test3'])
  })

  it('moves up one item', () => {
    wrapper.instance().setState({
      todos: ['test1', 'test2', 'test3']
    })
    wrapper.instance().onMoveTodoDown(1)
    expect(wrapper.instance().state.todos).toEqual(['test1', 'test3', 'test2'])
  })
})
