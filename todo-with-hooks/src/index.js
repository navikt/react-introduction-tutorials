import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import { StoreProvider } from './Store';

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<StoreProvider>
  <Todo />
</StoreProvider>, document.getElementById('root'));
