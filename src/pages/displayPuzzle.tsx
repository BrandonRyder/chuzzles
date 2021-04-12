import React, { Component } from "react";
import { ChessContextProvider } from '../components/ChessContext';
import PuzzlePopupMessage from '../components/PuzzlePopupMessage';
import { NavBar } from './sharedElements'
import ChessBoard from "../components/ChessBoard";
const Puzzle = () => {

  //component refresh through up here
  return (
      <div>
        <NavBar />
        <ChessContextProvider>
          <ChessBoard />
          <PuzzlePopupMessage />
        </ChessContextProvider>
      </div>
  )
}

export default Puzzle;
