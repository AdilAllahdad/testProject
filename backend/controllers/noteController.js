const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  try {
    const { userId, content } = req.body;
    if (!userId || !content) {
      return res.status(400).json({ message: 'User and content required.' });
    }
    const note = new Note({ user: userId, content });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const { userId } = req.query;
    const notes = await Note.find({ user: userId }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { noteId, content } = req.body;
    const note = await Note.findByIdAndUpdate(noteId, { content }, { new: true });
    if (!note) return res.status(404).json({ message: 'Note not found.' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { noteId } = req.body;
    const note = await Note.findByIdAndDelete(noteId);
    if (!note) return res.status(404).json({ message: 'Note not found.' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};
