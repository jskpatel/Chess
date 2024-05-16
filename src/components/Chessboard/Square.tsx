import { ReactElement, useState } from "react"
import { SquareProps } from "./types";
import { constant, setPieces } from "./logics";

const Square = ({value}: SquareProps): ReactElement => {

  const [activeSquare, setActiveSquare] = useState<number[] | null>(null)
  const [onFocus, setOnFocus] = useState(false)
  
  const handleFocus = (code: number[]) => {
    setActiveSquare(code)
    setOnFocus(!onFocus)

    const act = document.querySelectorAll(".square");
    act.forEach((ele) => {
      if(ele.classList.contains('active')) ele.classList.remove('active')
    })
  }
  console.log("==>", value)

  return (
    <div className={`square ${(value[constant.zero]+value[constant.one]) % constant.two === constant.zero ? "black" : "white"} ${setPieces(value) && onFocus ? "active" : ""} ${activeSquare && !!setPieces(value) === false ? "emptySquare" : ""}`} onClick={() => handleFocus(value)}>
      {setPieces(value) && <img src={setPieces(value)} />}
    </div>
  )
}

export default Square
