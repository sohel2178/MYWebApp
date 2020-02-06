import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

import { Route, withRouter, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import * as ROUTES from "./utils/routes";
import FeaturesPage from "./components/Features";
import FleetManagementPage from "./components/FleetManagement";
import TestPage from "./components/Test";

function App(props) {
  return (
    // <TestPage />
    <div className="container">
      <nav>
        <Nav />
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.HOME} component={HomePage} exact />
          <Route path={ROUTES.FEATURES} component={FeaturesPage} exact />
          <Route
            path={ROUTES.FLEET_MANAGEMENT}
            component={FleetManagementPage}
            exact
          />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
