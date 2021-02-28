import { createAction } from "@reduxjs/toolkit";
import { SnackBar } from "./types";

export const showAddNoteModal = createAction<boolean>("@MODAL/SHOW_ADD_NOTE_MODAL");
export const showEditNoteModal = createAction<boolean>("@MODAL/SHOW_EDIT_NOTE_MODAL");
export const showSnackBar = createAction<SnackBar>("@SNACK_BAR/SHOW_SNACK_BAR");
