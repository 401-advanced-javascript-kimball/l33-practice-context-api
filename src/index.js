import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import CounterContextProvider from './components/counter/counter-context.js';

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
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
