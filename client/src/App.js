import React, { Component } from 'react';
import './App.scss';
import LoginPage from './Components/Customer/Pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from './Components/Customer/Customer';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={Customer}></Route>
          <Route path='/admin'></Route>
          <Route path='/login' component={LoginPage}></Route>
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
