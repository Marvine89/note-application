import { AppState } from "../../root.reducer";

export const getShowAddNoteModal = (app: AppState) => app.modal.showAddNoteModal;
export const getShowEditNoteModal = (app: AppState) => app.modal.showEditNoteModal;
export const getShowSnackBar = (app: AppState) => app.modal.showSnackBar;
