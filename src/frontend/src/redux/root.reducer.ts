import { combineReducers } from "@reduxjs/toolkit";
import { loadingReducer } from "./modules/loading/reducer";
import { modalReducer } from "./modules/modal/reducer";
import { noteReducer } from "./modules/note/reducer";

export const reducers = combineReducers({
  loading: loadingReducer,
  note: noteReducer,
  modal: modalReducer,
});

export type AppState = ReturnType<typeof reducers>;
