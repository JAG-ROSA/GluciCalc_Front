import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/Layouts/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "style/style.scss";
import Navbar from "components/Layouts/Navbar";
import Footer from "components/Layouts/Footer";
import Home from "pages/Home";
import Register from "pages/Register";
import Logout from "pages/Logout";
import Login from "pages/Login";
import MyMeals from "pages/MyMeals";
import Dashboard from "pages/Dashboard";
import Search from "pages/Search";
import Product from "pages/Product";
import ForgotPassword from "pages/ForgotPassword";
import ResetPassword from "pages/ResetPassword";

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
        <Route path="/password/forgot">
          <ForgotPassword />
        </Route>
        <Route path="/password/reset/:token">
          <ResetPassword />
        </Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/my-meals" component={MyMeals} />
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/product/:idProduct">
          <Product />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
