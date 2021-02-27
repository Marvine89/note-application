import React, { useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import { FloatingButtonBlock, GridContainer } from "./styles";
import { Grid, Fab } from "@material-ui/core";
import { NoteCard } from "../../components/card";
import { useDispatch } from "react-redux";
import { fetchNotesRequest } from "../../redux/modules/note/actions";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotesRequest());
  }, [dispatch]);

  return (
    <>
      <GridContainer spacing={4}>
        {Array(45)
          .fill(0)
          .map(() => (
            <Grid item xs={12} xl={3} lg={3} md={4}>
              <NoteCard />
            </Grid>
          ))}
      </GridContainer>

      <FloatingButtonBlock title="Add new note" aria-label="add" placement="left">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </FloatingButtonBlock>
    </>
  );
};
