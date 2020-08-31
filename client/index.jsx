import React from 'react';
import ReactDOM from 'react-dom';
/*import Counter from './container.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/reducer.jsx';*/
import App from './app.jsx'

//const store = createStore(rootReducer);

ReactDOM.render(
  /*<Provider store={store}>
    <Counter />
  </Provider>,*/
  <App />,
  document.getElementById('root')
);
