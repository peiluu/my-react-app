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
import ContextTest from "./pages/context/Index";
import UseRef from "./pages/useref/Index";
import Cors from "./pages/cors/Index";


const BasicRoute = () => (
  <div>
    <div>公共部分</div>
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/redux" component={Redux} />
        <Route exact path="/hoccomponent" component={HocComponent} />
        <Route exact path="/context" component={ContextTest} />
        <Route exact path="/useref" component={UseRef} />
        <Route exact path="/cors" component={Cors} />
        <Route render={() => <Redirect to="/home" />} />9
      </Switch>
    </Router>
  </div>
);

export default BasicRoute;
