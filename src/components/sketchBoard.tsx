import React from 'react'; // importing FunctionComponent
import Piece from './displayPuzzle'
/**
 * @param color - piece color
 * @param id - piece id
**/
const Square = ({ color, id, children }: { color: string; id: string; children: React.ReactNode}) => {
    return (
        <div id = {id} style={{width: 100, height: 100, backgroundColor: color}}>
          {children}
        </div>
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
    const elements = [];
    const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    // pass a peice to square
    // TODO: pass a piece based on puzzleID

    for(let i = 0; i < 8; i++) {
        const color = i % 2 === 0 ? startingColor : endingColor
        const id = xAxis[i].concat(column.toString())
        elements.push(<Square color={color} id={id}> <Piece piece='horse'/> </Square>)
    }
    return elements;
}

const Board = () => {
    //function to create a row, takes a starting color
    const createBoard = () => {
        const board = []
        for(let i = 0; i < 8; i++) {
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
