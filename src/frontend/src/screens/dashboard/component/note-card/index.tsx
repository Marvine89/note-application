import { Grid } from "@material-ui/core";
import React from "react";
import { NoteCard } from "../../../../components/card";
import { Note } from "../../../../redux/modules/note/types";

interface DashboardNoteCardProp {
  note: Note;
  onClick: (v: string) => void;
}

export const DashboardNoteCard: React.FC<DashboardNoteCardProp> = ({ note, onClick }) => {
  return (
    <Grid item xs={12} xl={3} lg={3} md={4}>
      <NoteCard note={note} onClick={onClick} />
    </Grid>
  );
};
