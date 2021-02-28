import { AppState } from "../../root.reducer";

export const getShowAddNoteModal = (app: AppState) => app.modal.showAddNoteModal;
