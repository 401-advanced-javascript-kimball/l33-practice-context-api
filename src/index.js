import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import CounterContext from './components/counter/counter-context.js';

/**
 * Main Component
 *
 * @class Main
 * @extends {React.Component}
 */
class Main extends React.Component {
  /**
   * Render
   *
   * @return {*}
   * @memberof Main
   */
  render() {
    return (
      <CounterContext>
        <App />
      </CounterContext>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
