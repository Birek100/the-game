import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Menu from './components/menu/menu.jsx';
import Game from './components/game/game.jsx';
import About from './components/about/about.jsx';
import rootReducer from './reducers/reducer.jsx';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/login-auth" component={Menu} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/about" component={About} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
export default App;
