import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Social from './Social/Social';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Products from './Pages/Products';
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
      ProductDetails: null,
      id_product: null
    };
  }

  ClickCategoryItem = (id_category) => {
    //handle click category item
    this.setState({
      IdCategory: id_category,
      ClickProductsItem: false,
      ContentSearch: null
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
      ContentSearch: Content,
      id_category: null
    });
  }

  HandleOrder = (id_product) => {
    this.setState({
      id_product: id_product
    });
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <Header
          ClickProductItem={this.ClickProductItem}
          HandleSearch={this.HandleSearch}
        ></Header>
        <div style={{ width: '100%' }}>
          <Switch>
            <Route path='/' exact
              render={() => {
                return (
                  <Home
                    ClickCategoryItem={this.ClickCategoryItem}
                    HandleSearch={this.HandleSearch}
                    ClickDetails={this.ClickDetails}
                    HandleOrder={this.HandleOrder}
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
                    IdCategory={this.state.IdCategory}
                    ClickProductsItem={this.state.ClickProductsItem}
                    ContentSearch={this.state.ContentSearch}
                    ClickDetails={this.ClickDetails}
                    HandleOrder={this.HandleOrder}
                  ></Products>
                );
              }}
            ></Route>
            <Route path='/contract' component={ContractPage}></Route>
            <Route path='/order' render={() => {
              return (
                <OrderPage
                  id_product={this.state.id_product}
                ></OrderPage>
              );
            }}></Route>
            <Route path='/productDetails' render={() => {
              return (
                <ProductDetailsPage
                  ProductDetails={this.state.ProductDetails}
                  HandleOrder={this.HandleOrder}
                ></ProductDetailsPage>
              );
            }}
            ></Route>
          </Switch>
        </div>
        <Social></Social>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
