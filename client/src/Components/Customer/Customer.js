import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Products from './Pages/Products';
import SearchProduct from './Pages/SearchProduct';
import LoginPage from './Pages/LoginPage';
import ContractPage from './Pages/ContractPage';
import OrderPage from './Pages/OrderPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';

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
          <Route path='/productDetails' component={ProductDetailsPage}></Route>
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
