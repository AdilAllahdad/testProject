import { getApiUrl, API_CONFIG } from './config';

export const createNote = async (userId, content) => {
  const res = await fetch(getApiUrl(API_CONFIG.endpoints.createNote), {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify({ userId, content }),
  });
  return res.json();
};

export const getNotes = async (userId) => {
  const res = await fetch(getApiUrl(`${API_CONFIG.endpoints.notesBase}?userId=${userId}`));
  return res.json();
};

export const updateNote = async (noteId, content) => {
  const res = await fetch(getApiUrl(API_CONFIG.endpoints.updateNote), {
    method: 'PUT',
    headers: API_CONFIG.headers,
    body: JSON.stringify({ noteId, content }),
  });
  return res.json();
};

export const deleteNote = async (noteId) => {
  const res = await fetch(getApiUrl(API_CONFIG.endpoints.deleteNote), {
    method: 'DELETE',
    headers: API_CONFIG.headers,
    body: JSON.stringify({ noteId }),
  });
  return res.json();
};
