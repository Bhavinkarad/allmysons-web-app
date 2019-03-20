import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './containers/HomePage';
import ListPage from './containers/ListPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/list" component={ListPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
