import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./redux/root.store";
import { ToolBar } from "./components/tool-bar";
import { AppRouter } from "./routes/routes";
import { AddNoteModal } from "./components/add-note-modal";
import { SnackBar } from "./components/snack-bar";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToolBar />
        <AppRouter />
        <AddNoteModal />
        <SnackBar />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
