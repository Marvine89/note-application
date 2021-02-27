import { combineReducers } from "@reduxjs/toolkit";
import { loadingReducer } from "./modules/loading/reducer";
import { alertReducer } from "./modules/alert/reducer";
import { noteReducer } from "./modules/note/reducer";

export const reducers = combineReducers({
  loading: loadingReducer,
  note: noteReducer,
  alert: alertReducer,
});

export type AppState = ReturnType<typeof reducers>;
