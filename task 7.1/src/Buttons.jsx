
import React from 'react';

const Button = ({ color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={() => onClick(color)}>
      {color}
    </button>
  );
};

export default Button;
