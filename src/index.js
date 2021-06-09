import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    posts: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'start':
            return {
                ...state,
                loading: true
            };
        case "posts":
            return {
                ...state,
                posts: action.payload,
                loading: false
            };

        default:
            return state
    }

}

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


