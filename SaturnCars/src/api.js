import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getAllItems() {
    return apiClient.get('/items');
  },
  getItem(id) {
    return apiClient.get(`/items/${id}`);
  },
  addItem(item) {
    return apiClient.post('/items', item);
  },
  updateItem(id, item) {
    return apiClient.put(`/items/${id}`, item);
  },
  deleteItem(id) {
    return apiClient.delete(`/items/${id}`);
  }
};
