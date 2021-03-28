import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import DevState from "../pages/DevState";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/devstate" component={DevState} />
    </Switch>
  );
};

export default Routes;
