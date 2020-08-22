import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Navigator from './navigation/Navigator';
import investReducer from './store/invest-reducer';
// curly braces mean named export but no curly braces mean its looking for
// default export
import { init } from './helpers/db'


init()
  .then(() =>{
    console.log('Initalized db Successful')
  })
  .catch(err => {
    console.log('initalizing db failed')
    console.log(err)
  })

const rootReducer = combineReducers({
  invest: investReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
