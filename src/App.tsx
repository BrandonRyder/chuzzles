import React, {useState} from 'react';
import Board from './components/sketchBoard';
import Puzzle from './components/displayPuzzle';
const App = () => {

  //component refresh through up here
  return (
      <div>
        <Header name={"Chuzzles"} />
          <h3> Our glowing reviews:</h3>
            <p>Yeah I think this might be a good puzzle game -me</p>
            <p>oh cool that could work -josh</p>
            <p>I like it very much, yes i like it, yes === CAM</p>
          <Board />
        <Header />

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
