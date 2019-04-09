import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={ProductList} />
            {/* <Route exact path="/product" component={Dashboard} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
