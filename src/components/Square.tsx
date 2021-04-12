
export interface SquareProps {
    position: string
    color: string
    width: number
    height: number
}

const Square = ({ position, color, width, height }: SquareProps) => {

    return (
        <div id={position} style={{height, width, backgroundColor: color }}>
            <img height={height} width={width} src='' alt=''/>
        </div>
    )
}

export default Square;