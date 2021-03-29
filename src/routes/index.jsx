import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import DevState from "../pages/DevState";
import KenzieHub from "../pages/KenzieHub";
import Hogwarts from "../pages/Hogwarts";
import KenzieShop from "../pages/KenzieShop";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/devstate" component={DevState} />
      <Route exact path="/kenziehub" component={KenzieHub} />
      <Route exact path="/hogwarts" component={Hogwarts} />
      <Route exact path="/kenzieshop" component={KenzieShop} />
    </Switch>
  );
};

export default Routes;
