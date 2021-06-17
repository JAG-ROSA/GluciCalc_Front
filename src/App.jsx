import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "style/style.scss";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Home from "pages/Home";
import Register from "pages/Register";
import Logout from "pages/Logout";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Search from "pages/Search";

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
