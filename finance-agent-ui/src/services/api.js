import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export const getFinanceAdvice = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/finance/advice`, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error.response?.data || error.message;
  }
}; 