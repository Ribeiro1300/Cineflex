import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../components/Top";
import Movies from "../pages/Movies";
import Sessions from "../pages/Sessions";
import Seats from "../pages/Seats";
import Success from "../pages/Success";
import React from "react";
export default function App() {
  return (
    <BrowserRouter>
      <Top />
      <Switch>
        <Route path="/" exact>
          <Movies />
        </Route>
        <Route path="/sessions/:idMovie" exact>
          <Sessions />
        </Route>
        <Route path="/seats/:idSession" exact>
          <Seats />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
