import React, {useState} from 'react';
import { ChessContextProvider } from './components/ChessContext';
import PuzzlePopupMessage from './components/PuzzlePopupMessage';
import Board from './components/sketchBoard';

const App = () => {

  //component refresh through up here
  return (
      <div>
        <ChessContextProvider>
        <Header name={"Chuzzles"} />
          <h3> Our glowing reviews:</h3>
            <p>Yeah I think this might be a good puzzle game -me</p>
            <p>oh cool that could work -josh</p>
            <p>I like it very much, yes i like it, yes === CAM</p>
          <Board />
        <PuzzlePopupMessage />
        <Header />
        </ChessContextProvider>

      </div>
  )
}

interface HeaderProps {
  name?: string //optional ?
}

const Header = ({ name }: HeaderProps) => {
  return ( <h1>{name}</h1> )
}

export default App
