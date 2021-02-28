import { createReducer } from "@reduxjs/toolkit";
import { fetchNotesRequestSuccess, fetchNoteRequestSuccess } from "./actions";
import { NoteState } from "./types";

const INITIAL_STATE: NoteState = {
  notes: undefined,
  note: undefined,
};

export const noteReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchNotesRequestSuccess, (state, action) => {
      if (action.payload) {
        state.notes = action.payload;
      }
    })
    .addCase(fetchNoteRequestSuccess, (state, action) => {
      if (action.payload) {
        state.note = action.payload;
      }
    });
});
