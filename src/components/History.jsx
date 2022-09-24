import React from 'react'

const History = ({history,moveTo,currentMove}) => {
  return (
    <ul>
        {history.map((_,move)=>{
            return (
                <li key={move}><button 
                style={{fontWeight : move === currentMove ? 'bold' : 'normal'}}
                onClick={()=>{moveTo(move)}}>{
                    move === 0 ? 'Go to Game start' : `Go to move #${move}`
                    }</button></li>
            )
        })}
    </ul>
  )
}

export default History