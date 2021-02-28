import { createReducer } from "@reduxjs/toolkit";
import { showAddNoteModal, showEditNoteModal, showSnackBar } from "./actions";
import { AlertState } from "./types";

const INITIAL_STATE: AlertState = {
  showAddNoteModal: false,
  showEditNoteModal: false,
};

export const modalReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(showAddNoteModal, (state, action) => {
      const { payload } = action;
      return { ...state, showAddNoteModal: payload };
    })
    .addCase(showEditNoteModal, (state, action) => {
      const { payload } = action;
      return { ...state, showEditNoteModal: payload };
    }).addCase(showSnackBar, (state, action) => {
      const { payload } = action;
      return { ...state, showSnackBar: payload };
    });
});

