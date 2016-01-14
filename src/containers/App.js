// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
