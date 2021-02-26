import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "../screens/dashboard";
import { NotFound } from "../screens/not-found";
import { ViewNotes } from "../screens/view-notes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/users" component={ViewNotes} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
