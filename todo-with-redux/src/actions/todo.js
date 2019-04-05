
export function addTodo (todo) {
  return {
    type: 'TODO/ADD',
    payload: {
      todo: todo
    }
  }
}

export function editTodo (todo, index) {
  return {
    type: 'TODO/EDIT',
    payload: {
      todo: todo,
      index: index
    }
  }
}

export function removeTodo (index) {
  return {
    type: 'TODO/REMOVE',
    payload: {
      index: index
    }
  }
}

export function removeAllTodos () {
  return {
    type: 'TODO/REMOVE_ALL',
  }
}

export function moveTodoUp (index) {
  return {
    type: 'TODO/MOVE_UP',
    payload: {
      index: index
    }
  }
}

export function moveTodoDown (index) {
  return {
    type: 'TODO/MOVE_DOWN',
    payload: {
      index: index
    }
  }
}
