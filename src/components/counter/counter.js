import React from 'react';

import {CounterContext} from './counter-context.js';

/**
 * Counter Component
 *
 * @class Counter
 * @extends {React.Component}
 */
class Counter extends React.Component {
  static contextType = CounterContext;

  /**
   * render
   *
   * @return {*}
   * @memberof Counter
   */
  render() {
    const styles = {
      counter: {
        display: 'inline-block',
        fontSize: '1em',
        border: '2px solid #444',
        borderRadius: '50%',
        lineHeight: '5em',
        textAlign: 'center',
        width: '5em',
      },
    };

    return (
      <span style={styles.counter}>
        {this.context.count}
      </span>
    );
  }
}

export default Counter;
