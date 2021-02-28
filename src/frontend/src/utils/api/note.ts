import { showSnackBar } from "../../redux/modules/modal/actions";
import { fetchNoteRequestSuccess, fetchNotesRequestSuccess } from "../../redux/modules/note/actions";
import { Note, NoteResponse, NotesResponse } from "../../redux/modules/note/types";
import { store } from "../../redux/root.store";
import { client } from "./api";

export const addNoteRequest = async (notes: Note): Promise<NotesResponse | void> => {
  try {
    const response = await client.post<NotesResponse>("/notes", notes);
    store.dispatch(fetchNotesRequestSuccess(response.data));
    return response.data;
  } catch (e) {
    store.dispatch(showSnackBar({ open: true, type: "error", message: "An error has occured" }));
    throw new Error("An error has occured");
  }
};

export const editNoteRequest = async (notes: Note): Promise<NoteResponse | void> => {
  try {
    const response = await client.put<NoteResponse>("/notes", notes);
    store.dispatch(fetchNoteRequestSuccess(response.data));
    return response.data;
  } catch (e) {
    store.dispatch(showSnackBar({ open: true, type: "error", message: "An error has occured" }));
    throw new Error("An error has occured");
  }
};

export const deleteNoteRequest = async (id: string): Promise<NotesResponse | void> => {
  try {
    const response = await client.delete<NotesResponse>(`/notes/${id}`);
    store.dispatch(fetchNotesRequestSuccess(response.data));
    return response.data;
  } catch (e) {
    store.dispatch(showSnackBar({ open: true, type: "error", message: "An error has occured" }));
    throw new Error("An error has occured");
  }
};