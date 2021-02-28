import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/root.store";
import { ToolBar } from "./components/tool-bar";
import { AppRouter } from "./routes/routes";
import { AddNoteModal } from "./components/add-note-modal";

function App() {
  return (
    <Provider store={store}>
      <ToolBar />
      <AppRouter />
      <AddNoteModal />
    </Provider>
  );
}

export default App;
