## React introduction tutorials

This repository is a collection of tutorial React apps that showcase different ways to use React concepts, components or dependencies.

This is meant for all NAV employees who are starting now with frontend development, and that feel that they learn much faster if they see working code samples that they can tweak and adapt.

If you would like to see more examples, let me know at Nuno.Cardoso@nav.no.

## Recommended order:

First, start with todo-with-tests. When you are comfortable with todo-with-tests, continue with todo-with-redux. When you are confortable with Redux concept, then continue with todo-with-hooks.

* todo-with-tests - This is the basic Todo app example, with all logic inside one single Todo.js file.
This tutorial also showcases a Todo.test.js with good examples on how to test functions from Todo class.

* todo-with-redux - This is the Todo app with Redux, thus we have actions and reducers in their own folders. Todo.js is connected to Redux, and we added a TodoItem.js so we can demonstrate how we can dispatch actions from a children component (TodoItem.js) that changes the props of the parent component  (Todo.js).

* todo-with-hooks - This is the same Todo app with Redux, but using the React Hooks API (new in React 16.8) instead of the Redux package, for the same effect.
