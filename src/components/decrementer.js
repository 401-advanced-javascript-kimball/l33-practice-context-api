import React, {useContext} from 'react';

import {CounterContext} from './counter/counter-context.js';

const Decrementer = (props) => {
  const styles = {
    button: {
      height: '3em',
    },
  };

  const context = useContext(CounterContext);

  return (
    <button
      style={styles.button}
      onClick={() => context.decrement()} > - </button>
  );
};

export default Decrementer;
