import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./styles.scss";

export const ToolBar: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <a href="/" className="application-title">
          <Typography variant="h6">Note App</Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
};
