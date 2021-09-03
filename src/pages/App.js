import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "../components/Top";
import Movies from "../pages/Movies";
import Sessions from "../pages/Sessions";
import Seats from "../pages/Seats";
import Success from "../pages/Success";
import React from "react";
export default function App() {
  const [order, setOrder] = React.useState({
    movie: "teste",
    session: "teste",
    seats: [{ id: 2, buyer: "teste", cpf: "123" }],
  });
  return (
    <BrowserRouter>
      <Top />
      <Switch>
        <Route path="/" exact>
          <Movies setOrder={setOrder} />
        </Route>
        <Route path="/sessions">
          <Sessions setOrder={setOrder} />
        </Route>
        <Route path="/seats">
          <Seats setOrder={setOrder} />
        </Route>
        <Route path="/success">
          <Success order={order} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
