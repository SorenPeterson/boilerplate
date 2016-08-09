import React from 'react';
import ReactDOM from 'react-dom';

import Doge from './doge.jsx';

let anchor = document.createElement('div');
anchor.id = 'anchor';
document.body.appendChild(anchor);
ReactDOM.render(<Doge />, anchor);
