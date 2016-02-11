import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux';


class FooPage extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>The Foo Page</h1>
        <p>Also nothing to see here..</p>
        <button onClick={() => dispatch(routeActions.push('/bar'))}>Go to bar page by history push</button>
      </div>
    );
  }
}

FooPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(FooPage);
