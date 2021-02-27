import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/root.store";
import { ToolBar } from "./components/tool-bar";
import { AppRouter } from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <ToolBar />
      <AppRouter />
    </Provider>
  );
}

export default App;
