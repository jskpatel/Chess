import { ReactElement, useState } from "react"
import { SquareProps } from "./types";
import { constant, setPieces } from "./logics";

const Square = ({value}: SquareProps): ReactElement => {

  const [onFocus, setOnFocus] = useState(false)
  
  const handleFocus = () => {
    setOnFocus(!onFocus)

    const act = document.querySelectorAll(".square");
    act.forEach((ele) => {
      if(ele.classList.contains('active')) ele.classList.remove('active')
    })
  }

  return (
    <div
      className={`square ${(value[constant.zero]+value[constant.one]) % constant.two === constant.zero ? "black" : "white"} ${setPieces(value) && onFocus ? "active" : ""}`} 
      onClick={() => handleFocus()}
    >
      {setPieces(value) && <img src={setPieces(value)} />}
    </div>
  )
}

export default Square
