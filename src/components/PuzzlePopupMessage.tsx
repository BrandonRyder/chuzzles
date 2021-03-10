
import Button from '@material-ui/core/Button/Button';
import Alert from '@material-ui/lab/Alert/Alert';
import React, { useContext, useEffect, useState } from 'react'
import { ChessContext } from './ChessContext';

const PuzzlePopupMessage = () => {

  const [visible, setVisible] = useState(false);
  const context = useContext(ChessContext);

  useEffect(() => {
    if(context.solved) {
      setVisible(true);
    }
  }, [context.solved])

  if(visible) {
    return (
      <Alert action={
        <Button onClick={() => setVisible(false)}>
          Close
        </Button>
      }>
        I am visible
      </Alert>
    )
  }
  return null;
}

export default PuzzlePopupMessage;
