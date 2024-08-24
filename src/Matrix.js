import React, { useState } from 'react';
import './Matrix.css'; // For styling

const Matrix = () => {
  const [boxes, setBoxes] = useState(Array(9).fill('')); // 9 boxes for the 3x3 grid
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleBoxClick = (index) => {
    if (boxes.every((color) => color === 'green')) {
      const updatedBoxes = [...boxes];
      clickedOrder.forEach((i) => {
        updatedBoxes[i] = 'orange';
      });
      setBoxes(updatedBoxes);
    } else if (!boxes[index]) {
      const updatedBoxes = [...boxes];
      updatedBoxes[index] = 'green';
      setBoxes(updatedBoxes);
      setClickedOrder([...clickedOrder, index]);
    }
  };

  return (
    <div className="matrix">
      {boxes.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color || 'lightgray' }}
          onClick={() => handleBoxClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
