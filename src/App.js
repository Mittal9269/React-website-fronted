import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
// import { Router } from "";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contect from "./Contect";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contect" component={Contect} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
        {/* <Home/> */}
      </Switch>
      <Footer />
    </>
  );
}
