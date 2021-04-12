import React from "react";
import "./App.css";
import Puzzle from "./pages/displayPuzzle";
import SelectionPage from "./pages/selectionPage"
//import MainPage from "./"; ///< index.jsx will be automatically imported
//Import all needed Component for this tutorial
import {BrowserRouter as Router, Route} from "react-router-dom";
import ChessBoard from "./components/ChessBoard";

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={SelectionPage}/>
            <Route exact path="/Puzzle" component={Puzzle}/>
            <Route exact path='/board' component={ChessBoard} />
        </Router>
    )
}

export default App;
