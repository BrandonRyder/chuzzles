import React, { Component } from "react";
import { ChessContextProvider } from '../components/ChessContext';
import PuzzlePopupMessage from '../components/PuzzlePopupMessage';
import Board from '../components/sketchBoard';
import { NavBar } from './sharedElements'
const Puzzle = () => {

  //component refresh through up here
  return (
      <div>
        <NavBar />
        <ChessContextProvider>
          <Board />
          <PuzzlePopupMessage />
        </ChessContextProvider>
      </div>
  )
}

export default Puzzle;
