
import React, { useState } from 'react';

export interface ChessContextObject {
  solved: boolean
  setSolved: (solved: boolean) => void
}

export const ChessContext = React.createContext<ChessContextObject>({ solved: false, setSolved: () => { } });

export interface ChessContextProviderProps {
  children: React.ReactNode;
}

export const ChessContextProvider = ({ children }: ChessContextProviderProps) => {
  const [solved, setSolved] = useState(false);
  return (
    <ChessContext.Provider value={{ solved, setSolved }}>
      {children}
    </ChessContext.Provider>
  )
}
