import React, { memo } from 'react';

const Timer = memo(({ time }) => {
  return <h2 className="header__timer">{time.toFixed(2)}</h2>;
});

export default Timer;
