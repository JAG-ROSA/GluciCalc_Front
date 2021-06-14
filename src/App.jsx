import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "style/style.scss";
import Navbar from "components/Navbar";
import Home from "pages/Home/Home";
import Footer from "components/Footer";

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
