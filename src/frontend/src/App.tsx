import React from "react";
import { ToolBar } from "./components/tool-bar";
import { AppRouter } from "./routes/routes";

function App() {
  return (
    <>
      <ToolBar />
      <AppRouter />
    </>
  );
}

export default App;
