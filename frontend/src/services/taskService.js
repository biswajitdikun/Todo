import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

export const taskService = {
  getAllTasks: async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  },

  createTask: async (taskData) => {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return response.data;
  },

  updateTask: async (id, taskData) => {
    const response = await axios.put(`${API_URL}/tasks/${id}`, taskData);
    return response.data;
  },

  deleteTask: async (id) => {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    return response.data;
  },
}; 