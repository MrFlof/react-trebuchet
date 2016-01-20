import React, { PropTypes } from 'react';

const BottlesList = (props) => {
  var { bottles } = props;
  return (
    <ul>
      {bottles.map((bottle, i) =>
        <li key={i}>{bottle.name}, {bottle.brand}</li>
      )}
    </ul>
  );
};

BottlesList.propTypes = {
  bottles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default BottlesList;
