import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Index";
import Redux from "./pages/redux/Index";
import HocComponent from "./pages/hoccomponent/Index";
import Context from "./pages/context/Index";
import UseRef from "./pages/useref/Index";


const BasicRoute = () => (
  <div>
    <div>公共部分</div>
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/redux" component={Redux} />
        <Route exact path="/hoccomponent" component={HocComponent} />
        <Route exact path="/context" component={Context} />
        <Route exact path="/useref" component={UseRef} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </Router>
  </div>
);

export default BasicRoute;
