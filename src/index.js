import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './Objs';
import './Widgets';
import App from './App';
import './config';

const history = createBrowserHistory();

Scrivito.useHistory(history);

ReactDOM.render(<App history={ history } />, document.getElementById('application'));
