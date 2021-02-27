import { AppState } from "../../root.reducer";

export const getNotes = (app: AppState) => app.note.notes;
export const getNote = (app: AppState) => app.note.note;
