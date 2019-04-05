

## Recommended order:
 
* todo-with-tests - This is the basic example, with all logic inside the Todo.js file. 
     this repo also has a Todo.test.js which showcases good practices in how to test all the functions in Todo.js

* todo-with-redux - When you are confortable with the todo-with-tests, you can see this example. 
     Here, we add Redux, so we have actions and reducers in their own src folders. 
     Also, we added the TodoItem.js so we can showcase how we can have Todo.js having TodoItem.js components as 
     children, and they can dispatch actions that change the state, and Todo.js is getting the changes.

  - todo-with-hooks - When you are confortable with the todo-with-redux, you can see this example. 
    This does the same, but without Redux package, and with React hooks (new in React 16.8), and the 
    function syntax instead of class syntax. 
   