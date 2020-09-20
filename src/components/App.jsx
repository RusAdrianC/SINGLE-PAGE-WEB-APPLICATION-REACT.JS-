import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./Title";
import MenuBar from "./MenuBar";
import Home from "./Home";

import Educatie from "./Educatie";
import Materiale from "./Materiale";
import Cercetare from "./Cercetare";
import Personal from "./Personal";
import Contact from "./Contact";
import Licenta from "./Licenta";
import CursurisiLaburi from "./CursurisiLaburi";
import Masterat from "./Masterat.jsx";
import gcer from "./gcer";
import itec from "./gcer";
import { StoriesContainer } from "./StoriesContainer";

function App() {
  return (
    <div className="mainPage">
      <Router>
        <Title
          logo="https://design-industrial.utcluj.ro/images/logoutcn.jpg"
          header1="Departamentul de Electronica Aplicata"
          header2="Universitatea Tehnica Cluj-Napoca"
        />

        <MenuBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/stiri" component={StoriesContainer} />
          <Route path="/educatie" component={Educatie} />
          <Route path="/materiale" component={Materiale} />
          <Route path="/cercetare" component={Cercetare} />
          <Route path="/personal" component={Personal} />
          <Route path="/contact" component={Contact} />
          <Route path="/Licenta" component={Licenta} />
          <Route path="/Itec" exact component={itec} />
          <Route path="/Gcer" exact component={gcer} />
          <Route path="/Masterat" exact component={Masterat} />
          <Route path="/Cursuri" component={CursurisiLaburi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
