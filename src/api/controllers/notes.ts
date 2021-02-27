import { NOTES } from "../db/note-db";
import { Note } from "../interfaces/note-interface";

export const getNotes = (_, res) => {
  res.json(NOTES);
};

export const getNote = (req, res) => {
  const { id } = req.params;
  res.json(NOTES.find((n) => n.id === id) || {});
};


export const insertNote = (req, res) => {
  const note: Note = req.body;

  console.log(note);

  res.json(NOTES);
};

export const updateNote = (req, res) => {
  const note: Note = req.body;

  console.log(note);

  res.json(NOTES);
};

export const deleteNote = (req, res) => {
  const id = req.body.id;
  console.log(id);
  res.json(NOTES);
};
