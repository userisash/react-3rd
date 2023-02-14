import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > -10) {
      setCount(count - 1);
    }
  };

  const labelColor = count < 0 ? 'red' : count > 0 ? 'green' : 'black';

  return (
    <div className='counter'>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <label className='font' style={{ color: labelColor }}>{count}</label>
    </div>
  );
}

export default Counter;
