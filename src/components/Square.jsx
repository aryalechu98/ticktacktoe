import React from 'react';

const Square = ({ value, onClick ,isWinningSquare}) => {
  return (
    <button type="button" 
    style={{fontWeight: isWinningSquare ? 'bold':'normal'}}
    className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
