import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { GridContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotesRequest, FETCH_NOTES_LOADING_KEY } from "../../redux/modules/note/actions";
import { getNotes } from "../../redux/modules/note/selectors";
import { useLoading } from "../../hooks/use-loading.hook";
import { LoadingContainer } from "../../components/loader/loader-container";
import { DashboardNoteCard } from "./component/note-card";
import { useHistory } from "react-router-dom";
import { FloatingButton } from "../../components/floating-button";
import { SearchInput } from "./component/search-input";
import { showAddNoteModal } from "../../redux/modules/modal/actions";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const notes = useSelector(getNotes);
  const isLoading = useLoading(FETCH_NOTES_LOADING_KEY);
  const [searchText, setSearchText] = useState<string>("");
  const filteredNotes = searchText ? notes?.filter((n) => n.title.toLowerCase().includes(searchText.toLowerCase())) : notes;

  useEffect(() => {
    dispatch(fetchNotesRequest());
  }, [dispatch]);

  const navigateToNote = (id: string) => {
    if (!id) return;
    history.push(`/notes/${id}`);
  };

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
              <DashboardNoteCard note={note} onClick={navigateToNote} key={i} />
            ))}
          </>
        )}
      </GridContainer>

      <FloatingButton title="Add new note" label="add" placement="left" onClick={showAddModal}>
        <AddIcon />
      </FloatingButton>
    </>
  );
};
