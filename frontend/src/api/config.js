// API configuration with environment-based URL
const API_URL = import.meta.env.VITE_API_URL;

export const API_CONFIG = {
  baseUrl: API_URL,
  endpoints: {
    // User related endpoints
    signup: '/api/signup',
    login: '/api/login',
    
    // Note related endpoints
    notesBase: '/api/notes',
    createNote: '/api/notes/create',
    updateNote: '/api/notes/update',
    deleteNote: '/api/notes/delete',
  },
  headers: {
    'Content-Type': 'application/json',
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => `${API_CONFIG.baseUrl}${endpoint}`;