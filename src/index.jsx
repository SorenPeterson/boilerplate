import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer.js';

let store = createStore(reducer);

ReactDOM.render(<div>Hello</div>, document.querySelector('#anchor'));
