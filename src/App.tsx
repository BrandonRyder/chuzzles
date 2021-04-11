import React, { Component } from "react";
import "./App.css";
import Puzzle from "./pages/displayPuzzle";
import SelectionPage from "./pages/selectionPage"
//import MainPage from "./"; ///< index.jsx will be automatically imported

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
        <Route exact path="/" component={SelectionPage} />
        <Route exact path="/Puzzle" component={Puzzle} />
        </Router>
    );
  }
}
export default App;
