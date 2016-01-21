import React, { PropTypes } from 'react';

const BottlesListItem = (props) => {
  var { bottle } = props;
  return (
    <tr>
      <td>{bottle.id}</td>
      <td>{bottle.name}</td>
      <td>{bottle.brand}</td>
      <td>{bottle.type}</td>
      <td>{bottle.country}</td>
      <td>{bottle.contents_cl}</td>
      <td>{bottle.alcohol_pct}</td>
    </tr>
  );
};

BottlesListItem.propTypes = {
  bottle: PropTypes.object.isRequired
};

export default BottlesListItem;
