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
  constructor(props) {
    super(props);
    this.state = {
      NameCategoryWillLoad: null,
      ClickProductsItem: true,
      ContentSearch: null,
    };
  }

  ClickCategoryItem = (NameCategory) => {
    //handle click category item
    this.setState({
      NameCategoryWillLoad: NameCategory,
      ClickProductsItem: false
    });
  }

  ClickProductItem = () => {
    //handle when click to product item on menu
    this.setState({
      ClickProductsItem: true
    });
  }

  HandleSearch = (Content) => {
    //handle content search
    this.setState({
      ContentSearch: Content
    })
  }

  render() {
    console.log(this.props.history)
    return (
      <>
        <Router>
          <Header
          ClickProductItem={this.ClickProductItem}
          ></Header>
          <Switch>
            <Route path='/' exact 
            render={() => {
              return (
                <Home
                  ClickCategoryItem={this.ClickCategoryItem}
                  HandleSearch={this.HandleSearch}
                ></Home>
              );
            }}
            ></Route>
            <Route path='/categories' 
            render={() => {
              return (
                <Categories
                  ClickCategoryItem={this.ClickCategoryItem}
                ></Categories>
              );
            }}
            ></Route>
            <Route path='/products' 
            render={() => {
              return (
                <Products
                  NameCategoryWillLoad={this.state.NameCategoryWillLoad}
                  ClickProductsItem={this.state.ClickProductsItem}
                ></Products>
              );
            }}
            ></Route>
            <Route 
              path='/search'
              render={() => {
                return (
                  <SearchProduct
                    ContentSeach={this.state.ContentSeach}
                    HandleSearch={this.HandleSearch}
                    ContentSearch={this.state.ContentSearch}
                  ></SearchProduct>
                );
              }}
            ></Route>
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
