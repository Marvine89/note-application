import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { NoteCard } from "../../../../components/card";
import { NoteResponse } from "../../../../redux/modules/note/types";
import { showSnackBar } from "../../../../redux/modules/modal/actions";
import { deleteNoteRequest } from "../../../../utils/api/note";
import { useDispatch } from "react-redux";
import { DeleteDialog } from "../delete-dialog/delete-dialog";

interface DashboardNoteCardProp {
  note: NoteResponse;
}

export const DashboardNoteCard: React.FC<DashboardNoteCardProp> = ({ note }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [showDeleteDialog, setDeleteDialog] = React.useState(false);
  const { mutate, isLoading: isDeleting } = useMutation(deleteNoteRequest, { onSuccess: onSuccess });

  const navigateToNote = () => {
    history.push(`/notes/${note.id}`);
  };

  const onShowDeleteDialog = () => {
    setDeleteDialog(true);
  };

  function onSuccess() {
    dispatch(showSnackBar({ open: true, type: "success", message: "Note successfully deleted" }));
    onCancel();
  }

  const onDelete = () => {
    mutate(note.id);
  };

  const onCancel = () => {
    setDeleteDialog(false);
  };

  return (
    <>
      <Grid item xs={12} xl={3} lg={3} md={4}>
        <NoteCard note={note} onClick={navigateToNote} onDelete={onShowDeleteDialog} isDeleting={isDeleting} />
      </Grid>
      <DeleteDialog open={showDeleteDialog} noteTitle={note.title} onDelete={onDelete} onCancel={onCancel} />
    </>
  );
};
