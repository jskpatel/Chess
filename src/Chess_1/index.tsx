import { useEffect, useState } from 'react'
import './style.css'

function Chess() {
  const [board, setBoard] = useState<number[][]>([]);

  useEffect(() => { 
    const result: number[][] = [];
    for(let i=0; i<8; i++) {
      result.push(Array.from({length: 8}, (_, i) => i + 1))
    }
    setBoard(result)
  }, [])

  const getClass = (r: number, c: number): string => {
    if((r + c) %2 === 0 ) return "black"
    return "white"
  }

  return (
    <>
      <div className='board'>
        {board.length > 0 && 
          board?.map((row: number[], r: number) => {
            return <div className='row'>
              {
                row?.map((col: number, c: number) => {
                  return <div key={r+c} className={`square ${getClass(row[r], col)}`}>{row[r]}-{col}</div>
                })
              }
            </div>
          })
        }
      </div>
    </>
  )
}

export default Chess
