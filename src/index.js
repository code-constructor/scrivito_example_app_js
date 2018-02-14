// Needed polyfills for React 16 for older browsers
// See https://reactjs.org/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements

import './polyfills';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Objs';
import './Widgets';
import App from './App';
import './config';

ReactDOM.render(<App />, document.getElementById('application'));
