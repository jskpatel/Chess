import { useEffect, useState } from 'react'
import './App.css'
import Chessboard from './components/Chessboard/Board'
import { constant } from './components/Chessboard/logics'

function App() {
  const [board, setBoard] = useState<number[][]>([])

  useEffect(() => {
    const arr: number[][] = []
    for(let k=constant.zero; k<constant.eight; k++){
      const newArr = Array.from({length: constant.eight}, (_, i) => i+constant.one);
      arr.push(newArr)
    }
    setBoard(arr)
  }, [])

  return (
    <>
      <Chessboard board={board} />
    </>
  )
}

export default App
