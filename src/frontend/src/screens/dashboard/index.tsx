import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { FloatingButtonBlock, GridContainer } from "./styles";
import { Grid, Fab } from "@material-ui/core";
import { NoteCard } from "../../components/card";

export const Dashboard: React.FC = () => {
  return (
    <>
      <GridContainer spacing={4}>
        <Grid item xs={12} xl={3} lg={3} md={4}>
          <NoteCard />
        </Grid>
        <Grid item xs={12} xl={3} lg={3} md={4}>
          <NoteCard />
        </Grid>
        <Grid item xs={12} xl={3} lg={3} md={4}>
          <NoteCard />
        </Grid>
        <Grid item xs={12} xl={3} lg={3} md={4}>
          <NoteCard />
        </Grid>
        <Grid item xs={12} xl={3} lg={3} md={4}>
          <NoteCard />
        </Grid>
        <Grid item xs={12} xl={3} lg={3} md={4}>
          <NoteCard />
        </Grid>
      </GridContainer>

      <FloatingButtonBlock title="Add new note" aria-label="add" placement="left">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </FloatingButtonBlock>
    </>
  );
};
