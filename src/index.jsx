import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer.js';

let store = createStore(reducer);

function render () {
    ReactDOM.render(<div>{store.getState().message}</div>, document.querySelector('#anchor'));
}

render();
store.subscribe(render);
