import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotesRequest, FETCH_NOTES_LOADING_KEY } from "../../redux/modules/note/actions";
import { getNotes } from "../../redux/modules/note/selectors";
import { useLoading } from "../../hooks/use-loading.hook";
import { LoadingContainer } from "../../components/loader/loader-container";
import { DashboardNoteCard } from "./component/note-card";
import { FloatingButton } from "../../components/floating-button";
import { SearchInput } from "./component/search-input";
import { showAddNoteModal } from "../../redux/modules/modal/actions";
import { EmptyNoteText, GridContainer } from "./styles";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const notes = useSelector(getNotes);
  const isLoading = useLoading(FETCH_NOTES_LOADING_KEY);
  const [searchText, setSearchText] = useState<string>("");
  const filteredNotes = searchText ? notes?.filter((n) => n.title.toLowerCase().includes(searchText.toLowerCase())) : notes;

  useEffect(() => {
    dispatch(fetchNotesRequest());
  }, [dispatch]);

  const showAddModal = () => {
    dispatch(showAddNoteModal(true));
  };

  return (
    <>
      <GridContainer spacing={4}>
        {isLoading ? (
          <LoadingContainer height={300} />
        ) : (
          <>
            <SearchInput label="Search note" value={searchText} onChange={(v: string) => setSearchText(v)} />
            {filteredNotes?.map((note, i) => (
              <DashboardNoteCard note={note} key={i} />
            ))}
            {notes && notes?.length === 0 && <EmptyNoteText>You do not have any notes...</EmptyNoteText>}
          </>
        )}
      </GridContainer>

      <FloatingButton title="Add new note" label="add" placement="left" onClick={showAddModal}>
        <AddIcon />
      </FloatingButton>
    </>
  );
};
