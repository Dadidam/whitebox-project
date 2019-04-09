import { fetchProducts } from '../actions';
import React, { Component } from 'react';
import Container from './ProductListContainer';

class ProductList extends Component {
  state = { list: null };

  componentDidMount() {
    fetchProducts().then(res => this.setState({ list: res.data}));
  }

  render() {
    return <Container itemList={this.state.list} />;
  }
}

export default ProductList;
