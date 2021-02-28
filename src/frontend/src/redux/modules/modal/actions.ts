import { createAction } from "@reduxjs/toolkit";
import { AlertState } from "./types";

export const showAddNoteModal = createAction<boolean>("@MODAL/SHOW_ADD_NOTE_MODAL");

export const closeAlert = createAction("@AlERT/CLOSE");
export const setAndShowFeedback = createAction<AlertState>("@AlERT/SHOW");
