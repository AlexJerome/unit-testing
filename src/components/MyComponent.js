import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1>Compteur</h1>
        <h2>Valueur du compteur : {this.state.count}</h2>
        <button
          id="increment"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          + 1
        </button>
        <button
          id="decrement"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -1
        </button>
      </div>
    );
  }
}
