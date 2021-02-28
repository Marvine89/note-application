// Module main state
export interface AlertState {
  showAddNoteModal: boolean;
  showSnackBar?: SnackBar;
}

export interface SnackBar {
  open: boolean;
  message?: string;
  type?: "success" | "error";
}
