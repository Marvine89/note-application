import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchNoteRequest, fetchNoteRequestError, fetchNoteRequestSuccess, fetchNotesRequest, fetchNotesRequestError, fetchNotesRequestSuccess } from "./actions";
import { client } from "../../../utils/api/api";
import { Note, Notes } from "./types";


export function* fetchNotes() {
  try {
    const response: AxiosResponse<Notes> = yield call(() => client.get("/notes"));
    yield put(fetchNotesRequestSuccess(response.data));
  } catch (err) {
    yield put(
      fetchNotesRequestError({
        message: err.message,
        statusCode: err?.response?.status,
      }),
    );
  }
}

export function* fetchNote({ payload }: { payload: { id: number }; type: string }) {
  try {
    const response: AxiosResponse<Note> = yield call(() => client.get(`/notes/${payload.id}`));
    yield put(fetchNoteRequestSuccess(response.data));
  } catch (err) {
    yield put(
      fetchNoteRequestError({
        message: err.message,
        statusCode: err?.response?.status,
      }),
    );
  }
}

export function* watchNoteSagas() {
  yield takeLatest(fetchNotesRequest.type, fetchNotes);
  yield takeLatest(fetchNoteRequest.type, fetchNote);
}
