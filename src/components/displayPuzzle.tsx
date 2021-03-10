import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'; // importing FunctionComponent
import easyPuzzles from '../puzzleDictionary/intro/easyPuzzles'

const Piece = ({piece, pieceColor}: {piece: string, pieceColor: string}) => {

    const [color, setColor] = useState(pieceColor)
    const onClick = () => {
      if(pieceColor === 'neutral'){ //if piece color was passed because flag was set to send color
        if(color === 'neutral'){
            setColor('white')
        }else if(color === 'white'){
            setColor('black')
        }else{
          setColor('neutral')
        }
      }
    }
    return(
      <div>
        <a>
          <img src={`/pieceLibrary/${color}/${piece}.png`} className={"center"} onClick={onClick}/>
        </a>
      </div>
    )
}



//call checkSolution after a piece is changed in the Square function I think
const CheckSolution = () => {

  const puzzlePieceDefinitions = easyPuzzles.puzzle_1
  const [status, setStatus] = useState(true)


  puzzlePieceDefinitions.forEach(piece => {
    if(piece.currentColor != piece.solutionColor){
       setStatus(false)
    }
  })
  if(!status){
    return <div> </div>
  }else{
    return(
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
      This is a success alert — check it out!
      </Alert>
    )
  }
}

export {Piece, CheckSolution}
