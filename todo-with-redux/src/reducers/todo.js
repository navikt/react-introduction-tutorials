let initialState = {
  todos: []
}

export default function todoReducer(state = initialState, action = {}) {

  switch (action.type) {

    case 'TODO/ADD':
      return Object.assign({}, state, {
        todos: state.todos.concat(action.payload.todo)
      })

    case 'TODO/EDIT':
      return Object.assign({}, state, {
        todos: state.todos.map((oldTodo, i) => {
          return i === action.payload.index ? action.payload.todo : oldTodo
        })
      })

    case 'TODO/REMOVE':
      return Object.assign({}, state, {
        todos: state.todos.filter((oldTodo, i) => {
          return i !== action.payload.index
        })
      })

    case 'TODO/REMOVE_ALL':
      return initialState

    case 'TODO/MOVE_UP':
      return Object.assign({}, state, {
        todos: state.todos.map((oldTodo, i) => {
          if (i === action.payload.index) {
            return state.todos[action.payload.index - 1]
          } else if (i === (action.payload.index - 1)) {
            return state.todos[action.payload.index]
          } else {
            return oldTodo
          }
        })
      })

    case 'TODO/MOVE_DOWN':

      return Object.assign({}, state, {
        todos: state.todos.map((oldTodo, i) => {
          if (i === action.payload.index) {
            return state.todos[action.payload.index + 1]
          } else if (i === (action.payload.index + 1)) {
            return state.todos[action.payload.index]
          } else {
            return oldTodo
          }
        })
      })

    default:
      return state
  }
}
