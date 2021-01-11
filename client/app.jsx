import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './container.jsx';
import Menu from './components/menu/menu.jsx';
import Game from './components/game/game.jsx';
import rootReducer from './reducers/reducer.jsx';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/login-auth" component={Menu} />
            <Route path="/login-auth" component={Counter} />
            <Route exact path="/game" component={Game} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
export default App;
