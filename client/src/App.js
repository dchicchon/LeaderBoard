import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Home from "./components/Home";
import Places from "./components/Places";
import About from "./components/About";
// import Navbar from "./components/Navbar";

// Style
import "./App.css";

export default function App() {
  return (
    <Router>
      <ul className="nav">
        <h3 className="app-title">LEADERBOARD</h3>
        <li>
          <Link className="link-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link-item" to="/places">
            Places
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div className="footer">
        <div className="row">
          <div className="col footer-link">
            &copy;{new Date().getFullYear()} | LEADERBOARD, INC. |{" "}
            <Link to="#" tyle={{ fontSize: "1rem" }} className="link-item">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="#" style={{ fontSize: "1rem" }} className="link-item">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
