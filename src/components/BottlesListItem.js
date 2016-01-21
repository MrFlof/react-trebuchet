import React, { PropTypes } from 'react';

const BottlesListItem = (props) => {
  var { bottle, onDelete } = props;

  const handleDelete = () => onDelete(bottle.id);

  return (
    <tr>
      <td>{bottle.id}</td>
      <td>{bottle.name}</td>
      <td>{bottle.brand}</td>
      <td>{bottle.type}</td>
      <td>{bottle.country}</td>
      <td>{bottle.contents_cl}</td>
      <td>{bottle.alcohol_pct}</td>
      <td><input type="submit" value="Delete" onClick={handleDelete} /></td>
    </tr>
  );
};

BottlesListItem.propTypes = {
  bottle: PropTypes.object.isRequired
};

export default BottlesListItem;
