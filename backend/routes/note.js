const express = require('express');
const router = express.Router();
const { createNote, getNotes, updateNote, deleteNote } = require('../controllers/noteController');

router.post('/create', createNote);
router.get('/', getNotes);
router.put('/update', updateNote);
router.delete('/delete', deleteNote);

module.exports = router;
