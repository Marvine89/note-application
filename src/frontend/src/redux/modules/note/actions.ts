import { createAction } from "@reduxjs/toolkit";
import { ErrorState } from "../logger/types";
import { NotesResponse, NoteResponse } from "./types";

export const FETCH_NOTES_LOADING_KEY = "@CUSTOMER/FETCH_NOTES";
export const fetchNotesRequest = createAction("@CUSTOMER/FETCH_NOTES_API_REQUEST");
export const fetchNotesRequestSuccess = createAction<NotesResponse>("@CUSTOMER/FETCH_NOTES_API_SUCCESS");
export const fetchNotesRequestError = createAction<ErrorState>("@CUSTOMER/FETCH_NOTES_API_ERROR");

export const FETCH_NOTE_LOADING_KEY = "@CUSTOMER/FETCH_NOTE";
export const fetchNoteRequest = createAction<{ id: number }>("@CUSTOMER/FETCH_NOTE_API_REQUEST");
export const fetchNoteRequestSuccess = createAction<NoteResponse>("@CUSTOMER/FETCH_NOTE_API_SUCCESS");
export const fetchNoteRequestError = createAction<ErrorState>("@CUSTOMER/FETCH_NOTE_API_ERROR");