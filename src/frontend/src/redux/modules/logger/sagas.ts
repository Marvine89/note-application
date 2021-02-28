import { call, put, takeLatest } from "redux-saga/effects";
import { showSnackBar } from "../modal/actions";
import { ErrorState } from "./types";

export function* processLog({ payload: error }: { type: string; payload: ErrorState }) {
  try {
    if (error.statusCode !== 200) {
      if (error.statusCode === 404) {
        yield put(showSnackBar({ open: true, type: "error", message: "Note not found" }));
      } else {
        yield put(showSnackBar({ open: true, type: "error", message: "An error has occured" }));
      }
    }

    yield call(() => {
      return false;
    });
  } catch (err) {
    throw err;
  }
}

export function* watchLoggerSagas() {
  yield takeLatest((action: any) => /(.*)_API_ERROR/.test(action.type), processLog);
}
