import _ from 'lodash';
import axios from 'axios';

export async function fetchProducts() {
  return await axios.get('/api/products');
}

export async function fetchProductDetail(id) {
  // fetch all products from server
  const list = await axios.get('/api/products');

  // find product by id and return it
  return _.find(list.data, ['_id', id]);
}
