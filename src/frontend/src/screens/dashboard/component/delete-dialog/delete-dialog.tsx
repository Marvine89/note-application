import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

interface DeleteDialogProp {
  open: boolean;
  noteTitle: string;
  onDelete: () => void;
  onCancel: () => void;
}

export const DeleteDialog: React.FC<DeleteDialogProp> = ({ open, noteTitle, onDelete, onCancel }) => {
  return (
    <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle>Delete Note</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You are about to delete {noteTitle}, are you sure you want to delete it ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={onDelete} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
