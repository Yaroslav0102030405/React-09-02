import React from 'react';

const Controls = ({step, onIncrement, onDecrement }) => (
  <div className="Counter__controuls">
    <button type="button" onClick={onIncrement}>
      Увеличить {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить {step}
    </button>
  </div>
);

export default Controls;
