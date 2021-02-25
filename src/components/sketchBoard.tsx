import React from 'react'; // importing FunctionComponent
import Piece from './displayPuzzle'
import easyPuzzles from '../puzzleDictionary/intro/easyPuzzles'

/**
 * @param color - piece color
 * @param id - piece id
**/
const Square = ({ color, id }: { color: string; id: string}) => {
    //if a peice.id matches div id then we want to add the {children} else leave it blank
    const puzzlePieceDefinitions = easyPuzzles.puzzle_1

     const found = puzzlePieceDefinitions.find(piece => piece.location === id)

     if(found){
      return (
          <div id = {id} style={{width: 100, height: 100, backgroundColor: color}}>
            <Piece piece={found.type} />
          </div>
      )
    }
    return (
      <div id = {id} style={{width: 100, height: 100, backgroundColor: color}}> </div>
    )
}

const Row = ({ children }: {children: React.ReactNode}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {children}
        </div>
    )
}

const createSquares = (startingColor: string, endingColor: string, column: number) => {
    const row = [];
    const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    for(let i = 0; i < 8; i++) {
      const color = i % 2 === 0 ? startingColor : endingColor
      const id = xAxis[i].concat(column.toString())
        row.push(<Square color={color} id={id}/>)
    }
    return row;
}

const Board = () => {
    //function to create a row, takes a starting color
    const createBoard = () => {
        const board = []
        for(let i = 8; i > 0; i--) {
            const color = i % 2 === 0 ? '#007A33' : '#F5E1A4';
            const other = color === '#F5E1A4' ? '#007A33' : '#F5E1A4';
            board.push(<Row>{createSquares(color, other, i)}</Row>);
        }
        return board;
    }

    return (
        <div className="center" >
            {createBoard()}
        </div>
    )
}

export default Board
