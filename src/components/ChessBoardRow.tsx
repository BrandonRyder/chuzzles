import Square from "./Square";

export interface ChessBoardRowProps {
    rank: number
    startColor: string
    endColor: string
}

const getNextFile = (file: string) => {
    return String.fromCharCode(file.charCodeAt(0) + 1)
}

const getColor = (num: number, startColor: string, endColor: string) => {
    return num % 2 === 0 ? startColor : endColor
}

const createSquares = (rank: number, startColor: string, endColor: string) => {
    const squares = []
    let file = 'a'
    for (let i = 0; i < 8; i++) {
        squares.push(
            <Square
                position={`${file}${rank}`}
                color={getColor(i, startColor, endColor)}
                width={64}
                height={64}
            />
        )
        file = getNextFile(file)
    }
    return squares
}

const ChessBoardRow = ({rank, startColor, endColor}: ChessBoardRowProps) => {
    return (
        <div style={{display: 'flex'}}>
            {createSquares(rank, startColor, endColor)}
        </div>
    )
}

export default ChessBoardRow

