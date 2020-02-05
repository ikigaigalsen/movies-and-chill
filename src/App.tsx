import React from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      Hello World
    </Provider>
  );
}

export default App;
