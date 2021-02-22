import React, { useState } from 'react'; // importing FunctionComponent

const Piece = ({piece}: {piece: string}) => {

    const [color, setColor] = useState('neutral')
    const onClick = () => {
      if(color === 'neutral'){
          setColor("white")
      }else{
          setColor("neutral")
      }
    }
    return(
      <div>
        <a>
          <img src={`/${color}/${piece}.png`} className={"center"} onClick={onClick}/>
        </a>
      </div>
    )
}

export default Piece

// idea for how to associate a piece to a s quare is to add an id coresponding to the grid of a normal chess board
