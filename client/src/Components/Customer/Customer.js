import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Products from './Pages/Products';
import SearchProduct from './Pages/SearchProduct';
import ContractPage from './Pages/ContractPage';
import OrderPage from './Pages/OrderPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IdCategory: null,
      ClickProductsItem: true,
      ContentSearch: null,
      ProductDetails: null
    };
  }

  ClickCategoryItem = (id_category) => {
    //handle click category item
    this.setState({
      IdCategory: id_category,
      ClickProductsItem: false
    });
  }

  ClickProductItem = () => {
    //handle when click to product item on menu
    this.setState({
      ClickProductsItem: true
    });
  }

  ClickDetails = (data_product) => {
    //get all infomation of food
    this.setState({
      ProductDetails: data_product
    });
  }

  HandleSearch = (Content) => {
    //handle content search
    this.setState({
      ContentSearch: Content
    })
  }

  render() {
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
                  ClickDetails={this.ClickDetails}
                ></Home>
              );
            }}
            ></Route>
            <Route path='/categories' 
            render={() => {
              return (
                <Categories
                  ClickCategoryItem={this.ClickCategoryItem}
                  HandleSearch={this.HandleSearch}
                ></Categories>
              );
            }}
            ></Route>
            <Route path='/products' 
            render={() => {
              return (
                <Products
                  HandleSearch={this.HandleSearch}
                  IdCategory ={this.state.IdCategory}
                  ClickProductsItem={this.state.ClickProductsItem}
                  ClickDetails={this.ClickDetails}
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
                    ClickDetails={this.ClickDetails}
                  ></SearchProduct>
                );
              }}
            ></Route>
            <Route path='/contract' component={ContractPage}></Route>
            <Route path='/order' component={OrderPage}></Route>
            <Route path='/productDetails' render={() => {
              return (
                <ProductDetailsPage
                ProductDetails={this.state.ProductDetails}
                ></ProductDetailsPage>
              );
            }}
            ></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
