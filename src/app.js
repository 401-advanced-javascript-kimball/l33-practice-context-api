import React from 'react';

import Counter from './components/counter/counter.js';
import Incrementer from './components/incrementer.js';
import Decrementer from './components/decrementer.js';

/**
 * The App component
 *
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class App extends React.Component {
  /**
   * React render method
   *
   * @return {*}
   * @memberof App
   */
  render() {
    const styles = {
      container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '40%',
      },
    };

    return (
      <div style={styles.container}>
        <Decrementer />
        <Counter />
        <Incrementer />
      </div>
    );
  }
}
