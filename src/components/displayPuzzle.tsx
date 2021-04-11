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
export {Piece}
