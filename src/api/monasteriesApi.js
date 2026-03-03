// ✅ Direct URL use karo - Simple and Clean
const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Fetch all Buddhist Monks from database
 */
export const fetchAllMonks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/monks`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching monks:', error);
    throw error;
  }
};

/**
 * Fetch single monk by ID
 */
export const fetchMonkById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/monks/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error fetching monk with ID ${id}:`, error);
    throw error;
  }
};