import { fetchProductDetail } from '../actions';
import React, { Component } from 'react';
import Container from './ItemContainer';

class ProductDetail extends Component {
  state = { item: null };

  componentDidMount() {
    fetchProductDetail(this.props.match.params.id).then(res =>
      this.setState({ item: res })
    );
  }

  render() {
    return <Container item={this.state.item} />;
  }
}

export default ProductDetail;
