import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from './Components/Customer';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={Customer}></Route>
          <Route path='/admin'></Route>
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
