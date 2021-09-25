import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from './Components/Customer/Customer';
import Admin from './Components/Admin/Admin';

import axios from 'axios';
class App extends Component {
  render() {

    return (
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={Customer}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
