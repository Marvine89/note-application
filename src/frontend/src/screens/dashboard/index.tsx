import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { GridContainer, Input, InputBlock } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotesRequest, FETCH_NOTES_LOADING_KEY } from "../../redux/modules/note/actions";
import { getNotes } from "../../redux/modules/note/selectors";
import { useLoading } from "../../hooks/use-loading.hook";
import { LoadingContainer } from "../../components/loader/loader-container";
import { DashboardNoteCard } from "./component/note-card";
import { useHistory } from "react-router-dom";
import { FloatingButton } from "../../components/floating-button";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const notes = useSelector(getNotes);
  const isLoading = useLoading(FETCH_NOTES_LOADING_KEY);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    dispatch(fetchNotesRequest());
  }, [dispatch]);

  const navigateToNote = (id: string) => {
    if (!id) return;
    history.push(`/notes/${id}`);
  };

  const filteredNotes = searchText ? notes?.filter((n) => n.title.includes(searchText)) : notes;

  return (
    <>
      <GridContainer spacing={4}>
        {isLoading ? (
          <LoadingContainer height={300} />
        ) : (
          <>
            <InputBlock>
              <Input label="Search note" variant="outlined" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </InputBlock>
            {filteredNotes?.map((note, i) => (
              <DashboardNoteCard note={note} onClick={navigateToNote} key={i} />
            ))}
          </>
        )}
      </GridContainer>

      <FloatingButton title="Add new note" label="add" placement="left">
        <AddIcon />
      </FloatingButton>
    </>
  );
};
