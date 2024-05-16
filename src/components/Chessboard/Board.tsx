import { ReactElement } from "react"
import Square from "./Square"
import { constant } from "./logics"

interface ChessboardProps {
    board: number[][]
}

const Chessboard = ({board}: ChessboardProps): ReactElement => {
return <>
    {board?.length > constant.zero ?
        <div className="board">
            {board?.map((row, i) => {
                return row?.map((col, j) => {
                    return <Square key={j} value={[row[i], col]} />
                })
            })}
        </div>
    : null}
</>
}

export default Chessboard
