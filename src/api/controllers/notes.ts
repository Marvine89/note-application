import { NOTES } from "../db/note-db";
import { Note } from "../interfaces/note-interface";
import { v4 as uuidv4 } from 'uuid';

export const getNotes = (_, res) => {
  res.json(NOTES);
};

export const getNote = (req, res) => {
  const { id } = req.params;
  res.json(NOTES.find((n) => n.id === id) || {});
};


export const insertNote = (req, res) => {
  const note: Note = req.body;

  if (!note) return res.json(NOTES);

  NOTES.push({
    ...note,
    id: uuidv4(),
  });

  res.json(NOTES);
};

export const updateNote = (req, res) => {
  const note: Note = req.body;

  const index = NOTES.findIndex((n) => n.id === note.id);

  if (index === -1) return res.json(NOTES);

  const id = NOTES[index].id;
  NOTES[index] = { ...note, id };

  res.json(NOTES);
};

export const deleteNote = (req, res) => {
  const { id } = req.params;

  const index = NOTES.findIndex((n) => n.id === id);
  if (index === -1) return res.json(NOTES);

  NOTES.splice(index, 1);

  res.json(NOTES);
};
