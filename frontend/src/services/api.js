import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const roomsAPI = {
  getAll: () => api.get('/rooms'),
  getOne: (id) => api.get(`/rooms/${id}`),
  create: (data) => api.post('/rooms', data),
  delete: (id) => api.delete(`/rooms/${id}`),
};

export const messagesAPI = {
  getAll: () => api.get('/messages'),
  getByRoom: (roomId) => api.get(`/messages/room/${roomId}`),
  create: (data) => api.post('/messages', data),
};

export default api;
