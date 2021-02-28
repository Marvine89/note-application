import { createReducer } from "@reduxjs/toolkit";
import { showAddNoteModal } from "./actions";
import { AlertState } from "./types";

const INITIAL_STATE: AlertState = {
  showAddNoteModal: false,
};

export const modalReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(showAddNoteModal, (state, action) => {
      const { payload } = action;
      return { ...state, showAddNoteModal: payload };
    });
});

