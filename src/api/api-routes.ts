const API_Router = require('express').Router();
import { getNotes, insertNote, updateNote, deleteNote, getNote } from "./controllers/notes";

API_Router.get('/notes', getNotes);
API_Router.get('/notes/:id', getNote);
API_Router.post('/notes', insertNote);
API_Router.put('/notes', updateNote);
API_Router.delete('/notes/:id', deleteNote);

export { API_Router };
