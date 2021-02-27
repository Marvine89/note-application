import React from "react";
import Edit from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FloatingButton } from "../../components/floating-button";
import { fetchNoteRequest, FETCH_NOTE_LOADING_KEY } from "../../redux/modules/note/actions";
import { getNote } from "../../redux/modules/note/selectors";
import { Container, Typography } from "@material-ui/core";
import { NoteImageBlock, NoteSubTitle, NoteTextWrapper, NoteTitle } from "./styles";
import { useLoading } from "../../hooks/use-loading.hook";
import { LoadingContainer } from "../../components/loader/loader-container";

export const ViewNotes: React.FC = () => {
  let { id } = useParams<any>();
  const dispatch = useDispatch();
  const note = useSelector(getNote);
  const isLoading = useLoading(FETCH_NOTE_LOADING_KEY);
  let history = useHistory();

  React.useEffect(() => {
    dispatch(fetchNoteRequest({ id }));
  }, [dispatch, id]);

  return (
    <>
      <NoteImageBlock></NoteImageBlock>
      {isLoading ? (
        <LoadingContainer height={200} />
      ) : (
        <Container>
          <NoteTitle>{note?.title}</NoteTitle>
          {note?.subTitle && <NoteSubTitle>{note?.subTitle}</NoteSubTitle>}
          <NoteTextWrapper>
            <Typography color="textSecondary" component="p">
              {note?.text}
            </Typography>
          </NoteTextWrapper>
        </Container>
      )}

      <FloatingButton title="Edit note" label="edit" placement="left">
        <Edit />
      </FloatingButton>
    </>
  );
};
