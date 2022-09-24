import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMeassage from "./components/StatusMeassage";
import { calculateWinner } from "./helpers";

const NEW_GAME=[{
  board:Array(9).fill(null), isXNext : true,
}]
const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
 const [currentMove,setCurrentmove]=useState(0)
 const current =history[currentMove]
  // console.log('current',current)
  // console.log('history',history)
  
  const {winner,winningSquares} = calculateWinner(current.board);
  const handleSquareClick = position => {
    if (current.board[position] || winner ){
      return;
    }

    setHistory(prev => {
      
      const last= prev[prev.length - 1]
      

      const newBoard= last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });
      return prev.concat({board: newBoard,isXNext:!last.isXNext})
    });
setCurrentmove(prev=>prev + 1)
    
  };
  const moveTo = (move) =>{
    setCurrentmove(move)
  }
  const resetHnadler = () =>{
    setHistory(NEW_GAME)
    setCurrentmove(0)
  }
return(
<div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <StatusMeassage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick}
    winningSquares={winningSquares}
    />
    <button className={`btn-reset ${winner ? 'active':''}`} onClick={resetHnadler}>Start new game</button>
    <h2 style={{fontWeight:'normal'}}>Current game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  <div className="bg-balls"></div>
  </div>
)
}
export default App
