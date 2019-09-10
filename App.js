import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/store/reducers';
import Routes from './src/routes';
import thunk from 'redux-thunk';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
