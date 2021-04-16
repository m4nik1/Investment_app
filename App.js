import React from 'react';
import * as firebase from 'firebase'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Navigator from './navigation/Navigator';
import investReducer from './store/invest-reducer';

const firebaseConfig = {
  apiKey: "AIzaSyBOajK3CaSnq65w4MVObleTF4996F7ouBk",
  authDomain: "investment-app-a8e4f.firebaseapp.com",
  projectId: "investment-app-a8e4f",
  databaseURL: "https://investment-app-a8e4f-default-rtdb.firebaseio.com/",
  storageBucket: "investment-app-a8e4f.appspot.com",
  messagingSenderId: "502530944004",
  appId: "1:502530944004:web:a0f9b46a4d3fb1581b1951"
};


const rootReducer = combineReducers({
  invest: investReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const initFirebase = () => {
    try {
      firebase.initializeApp(firebaseConfig)
    }
     catch (err) {
      if(!/already exists/.test(err.message)) {
        console.error('Firebase Init error has occured ' + err.stack)
      }
    }
  }
  initFirebase()

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
