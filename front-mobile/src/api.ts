import axios from 'axios';

// const API_URL = 'http://192.168.0.105:8080';
const API_URL = 'https://igor-sds2-dsdeliver.herokuapp.com';
export default function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}
