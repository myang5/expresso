import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       Hello World
      </div>
    );
  }
}

export default hot(App);
