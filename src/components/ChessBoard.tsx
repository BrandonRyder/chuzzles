import ChessBoardRow from "./ChessBoardRow";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";

export interface ChessBoardProps {
    configuration?: Record<string, string>
}

const even = (num: number) => num % 2 === 0;


const createRows = () => {
    const rows = []
    for (let i = 0; i < 8; i++) {
        const startColor = even(i) ? 'white' : 'black'
        const endColor = even(i) ? 'black' : 'white'
        rows.push(<ChessBoardRow rank={i + 1} startColor={startColor} endColor={endColor}/>)
    }
    return rows
}

const setPositionImage = (position: string, image: string) => {
    const element = document.getElementById(position)
    if (element) {
        const child = element.firstElementChild;
        if (child) {
            const imageElement = child as HTMLImageElement;
            imageElement.src = image;
        }
    }
}

const ChessBoard = ({configuration}: ChessBoardProps) => {

    const [image, setImage] = useState<string>('')

    useEffect(() => {
        setPositionImage('a1', './pieceLibrary/black/queen.png')
    }, [image])

    const onButtonClick = () => {

    }

    return (
        <div>
            <Typography>Chess Board</Typography>
            <Card>
                <CardContent>
                    {createRows()}
                </CardContent>
            </Card>
            <Button onClick={onButtonClick}>Test</Button>
        </div>
    )
}

export default ChessBoard