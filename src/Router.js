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
import Hooks from "./pages/hooks/Index";
import Cors from "./pages/cors/Index";
import Bibao from "./pages/bibao/Index";
import Proto from "./pages/__proto__/Index";
import Call from "./pages/call/Index";
import VirtualDom from "./pages/virtualdom/Index";
import Es6 from "./pages/es6/Index";


const BasicRoute = () => (
  <div>
    <div>公共部分</div>
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/redux" component={Redux} />
        <Route exact path="/hoccomponent" component={HocComponent} />
        <Route exact path="/context" component={ContextTest} />
        <Route exact path="/hooks" component={Hooks} />
        <Route exact path="/cors" component={Cors} />
        <Route exact path="/bibao" component={Bibao} />
        <Route exact path="/proto" component={Proto} />
        <Route exact path="/call" component={Call} />
        <Route exact path="/virtualdom" component={VirtualDom} />
        <Route exact path="/es6" component={Es6} />
        <Route render={() => <Redirect to="/home" />} />9
      </Switch>
    </Router>
  </div>
);

export default BasicRoute;
