import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from "./utils/reducer.js"
const store = createStore(reducer)

const render = () => {
ReactDOM.render(<App 
  activeState={store.getState()}
  store={store}
  />, 
  document.getElementById('root')
);
}

store.subscribe(render);
render();