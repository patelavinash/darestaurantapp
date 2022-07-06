import React from "react";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import Specials from "./Specials";
import Events from "./Events";
import Chefs from "./Chefs"
import Gallery from "./Gallery";
import Table from "./Table";
import Contact from "./Contact";
import {Route,Switch} from "react-router-dom";
function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/specials" component={Specials}/>
      <Route exact path="/events" component={Events}/>
      <Route exact path="/chefs" component={Chefs}/>
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/table" component={Table}/>
      <Route exact path="/contact" component={Contact}/>
      <Route component={Home}/>
    </Switch>
    </>
  );
}

export default App;
