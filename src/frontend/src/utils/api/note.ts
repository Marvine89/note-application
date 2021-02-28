import { fetchNotesRequestSuccess } from "../../redux/modules/note/actions";
import { Note, NotesResponse } from "../../redux/modules/note/types";
import { store } from "../../redux/root.store";
import { client } from "./api";

export const addNoteRequest = async (notes: Note): Promise<NotesResponse | void> => {
  try {
    const response = await client.post<NotesResponse>("/notes", notes);
    store.dispatch(fetchNotesRequestSuccess(response.data));
    return response.data;
  } catch (e) {
    // handle error here
    return;
  }
};

export const editNoteRequest = async (notes: Note): Promise<NotesResponse | void> => {
  try {
    const response = await client.put<NotesResponse>("/notes", notes);
    store.dispatch(fetchNotesRequestSuccess(response.data));
    return response.data;
  } catch (e) {
    // handle error here
    return;
  }
};

export const deleteNoteRequest = async (id: number): Promise<NotesResponse | void> => {
  try {
    const response = await client.delete<NotesResponse>(`/notes/${id}`);
    store.dispatch(fetchNotesRequestSuccess(response.data));
    return response.data;
  } catch (e) {
    // handle error here
    return;
  }
};