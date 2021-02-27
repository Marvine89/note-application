import { call, takeLatest } from "redux-saga/effects";
import { ErrorState } from "./types";

export function* processLog({ payload: error }: { type: string; payload: ErrorState }) {
  try {
    if (error.statusCode !== 200) {
      // handle error here
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
