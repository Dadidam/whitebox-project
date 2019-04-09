import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/product/:id" component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
