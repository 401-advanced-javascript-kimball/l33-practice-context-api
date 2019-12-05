import React from 'react';

import {CounterContext} from './counter/counter-context.js';

const Incrementer = (props) => {
  const styles = {
    button: {
      height: '3em',
    },
  };

  return (
    <CounterContext.Consumer>
      {(context) => {
        return (
          <button style={styles.button}
            onClick={() => context.increment()}> + </button>
        );
      }}
    </CounterContext.Consumer>
  );
};

export default Incrementer;
