import { all } from "redux-saga/effects";
import { watchNoteSagas } from "./modules/note/sagas";
import { watchLoggerSagas } from "./modules/logger/sagas";

export function* sagas() {
  yield all([watchNoteSagas(), watchLoggerSagas()]);
}
