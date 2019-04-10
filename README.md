## React introduction tutorials

This repository is a collection of React tutorial webapps that showcase different ways to use React concepts, components and dependencies to implement a simple Todo application.

These tutorials are targeted to all NAV employees who are now starting with frontend development, and feel that they can learn much faster if they have working code samples that they can experiment with.

Some Javascript skills are required, yet the examples are written in a way that is easy to follow the programming logic, even if you are not fluent in Javascript.

In other works, it is OK to start looking at these apps if you are not familiar with Javascript, but if you are serious about learning React, then be also serious about learning Javascript at the same time.   

If you have questions or want to see more examples, let me know at Nuno.Cardoso@nav.no.

## How to start

First, install [nodeJS](https://nodejs.org), or check if you already have it with `node -v`. The node install package [already comes with npm](https://www.npmjs.com/get-npm), so also check `npm -v` to see if you have it.

Now, install `create-react-app` by writing:

    npm install -g create-react-app

Note: -g means that the package will be installed globally, so you can call the command anywhere in your machine.

Now, choose an app name and create it by writing:

    create-react-app <your-app-name>

Now you have your first React app. Run it with:

    cd <your-app-name>
    npm start

Your default browser should open with a tab in `localhost:3000` and you should see a React page.

## Tutorial recommended order:

First, start with todo-with-tests. When you are comfortable with todo-with-tests, continue with todo-with-redux. When you are comfortable with Redux concept, then continue with todo-with-hooks.

### todo-with-tests
This is the basic Todo app example, with all logic inside one single `Todo.js` file.
This tutorial also showcases a `Todo.test.js` with good examples on how to test functions from Todo class.

### todo-with-redux
This is the Todo app with Redux, thus we have actions and reducers in their own folders. `Todo.js` is connected to Redux, and we added a `TodoItem.js` so we can demonstrate how we can dispatch actions from a children component (`TodoItem.js`) that changes the props of the parent component (`Todo.js`).

### todo-with-hooks
This is the same Todo app with Redux, but using the React Hooks API (new in React 16.8) instead of the Redux package, for the same effect.
