import React from 'react';

export const CounterContext = React.createContext();

/**
 * The counterProvider
 *
 * @class counterProvider
 * @extends {React.Component}
 */
class CounterProvider extends React.Component {
  /**
   * Creates an instance of counterProvider.
   * @param {*} props
   * @memberof counterProvider
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  increment = () => this.setState((state) => ({count: state.count + 1}));
  decrement = () => this.setState((state) => ({count: state.count - 1}));
    
  /**
   * Render method
   *
   * @return {*}
   * @memberof counterProvider
   */
  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterProvider;
