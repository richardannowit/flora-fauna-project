import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Categories from './Components/Pages/Categories';
import Products from './Components/Pages/Products';
import SearchProduct from './Components/Pages/SearchProduct';
import LoginPage from './Components/Pages/LoginPage';
import ContractPage from './Components/Pages/ContractPage';
import OrderPage from './Components/Pages/OrderPage';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/categories' component={Categories}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/search' component={SearchProduct}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/contract' component={ContractPage}></Route>
          <Route path='/order' component={OrderPage}></Route>
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
