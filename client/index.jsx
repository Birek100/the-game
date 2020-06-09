import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer.jsx';
import { connect } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
