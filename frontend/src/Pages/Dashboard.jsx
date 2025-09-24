import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNote, getNotes, updateNote, deleteNote } from '../api/note';

const getUserId = () => localStorage.getItem('userId');

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState('');
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const navigate = useNavigate();

  const fetchNotes = async () => {
    const userId = getUserId();
    if (!userId) return;
    const data = await getNotes(userId);
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!noteContent.trim()) return;
    const userId = getUserId();
    if (!userId) return;
    await createNote(userId, noteContent);
    setNoteContent('');
    fetchNotes();
  };

  const handleEdit = (note) => {
    setEditId(note._id);
    setEditContent(note.content);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateNote(editId, editContent);
    setEditId(null);
    setEditContent('');
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2>Dashboard</h2>
        <button onClick={handleLogout} style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          Logout
        </button>
      </div>
      <form onSubmit={editId ? handleUpdate : handlePost} style={{ marginBottom: 24 }}>
        <textarea
          value={editId ? editContent : noteContent}
          onChange={e => editId ? setEditContent(e.target.value) : setNoteContent(e.target.value)}
          placeholder="Write your note..."
          style={{ width: '100%', minHeight: 60, marginBottom: 8 }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          {editId ? 'Update Note' : 'Post Note'}
        </button>
        {editId && (
          <button type="button" onClick={() => { setEditId(null); setEditContent(''); }} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        )}
      </form>
      <div>
        {notes.length === 0 ? (
          <p>No notes yet.</p>
        ) : (
          notes.map(note => (
            <div key={note._id} style={{ border: '1px solid #ccc', borderRadius: 6, padding: 12, marginBottom: 12 }}>
              <div>{note.content}</div>
              <button onClick={() => handleEdit(note)} style={{ marginRight: 8 }}>Edit</button>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
