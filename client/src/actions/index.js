import axios from 'axios';

export async function fetchProducts() {
  return await axios.get('/api/products');
}
