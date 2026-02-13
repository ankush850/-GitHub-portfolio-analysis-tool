import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000, // 2 minutes timeout for analysis
});

export const analyzeProfile = async (username) => {
  try {
    const response = await api.get(`/analyze/${username}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.status, error.response.data);
      throw new Error(error.response.data.detail || `API Error: ${error.response.status}`);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.request);
      throw new Error('Network error: Could not reach the server');
    } else {
      // Something else happened
      console.error('Request Error:', error.message);
      throw new Error(`Request failed: ${error.message}`);
    }
  }
};

export const getBasicProfile = async (username) => {
  try {
    const response = await api.get(`/user/${username}/basic`);
    return response.data;
  } catch (error) {
    throw error;
  }
};