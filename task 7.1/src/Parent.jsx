
import React, { useState } from 'react';
import Button from './Buttons';

const colors = ['blue', 'red', 'yellow'];

const Parent = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      {colors.map((color) => (
        <Button key={color} color={color} onClick={handleButtonClick} />
      ))}
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default Parent;
