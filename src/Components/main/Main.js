import React from "react";
import Navbar from "../navbar/Navbar";
import LeftSide from "../leftSide/LeftSide";
import About from "../../Pages/about/About";
import Portfolio from "../../Pages/portfolio/Portfolio";
import Resume from "../../Pages/resume/Resume";
import { Route, Switch } from "react-router-dom";
import Contact from "../../Pages/contact/Contact";

const Main = () => (
  <>
    <main className="d-flex align-items-center position-relative">
      <div className="container bg-white shadow-lg position-relative">
        <header className="d-none d-md-block position-absolute">
          <Navbar hover />
        </header>
        <div className="row">
          <LeftSide />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
            <Route component={About} />
          </Switch>
        </div>
      </div>
    </main>
  </>
);

export default Main;
