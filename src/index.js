import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import Layout from "./Layout";
import Index from "./pages/Index/Index";
import NotFound from "./components/NotFound/NotFound";

ReactDOM.render(
  <Layout>
    <Router>
      <Switch>
        <Route exact name="index" path="/" component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Layout>,
  document.getElementById("root")
);
registerServiceWorker();
