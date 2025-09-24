export const createNote = async (userId, content) => {
  const res = await fetch('http://localhost:5000/api/notes/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, content }),
  });
  return res.json();
};

export const getNotes = async (userId) => {
  const res = await fetch(`http://localhost:5000/api/notes?userId=${userId}`);
  return res.json();
};

export const updateNote = async (noteId, content) => {
  const res = await fetch('http://localhost:5000/api/notes/update', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ noteId, content }),
  });
  return res.json();
};

export const deleteNote = async (noteId) => {
  const res = await fetch('http://localhost:5000/api/notes/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ noteId }),
  });
  return res.json();
};
