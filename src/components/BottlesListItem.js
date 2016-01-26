import React, { PropTypes } from 'react';

const BottlesListItem = (props) => {
  var { bottle, onDelete, onEdit } = props;

  const handleDelete = () => onDelete(bottle.id);
  const handleEdit = () => {
    // DEBUG test dummy edit, in lack of a proper edit UI.
    var b = bottle;
    b.contents_cl++;
    b.type = "Edity";
    b.alcohol_pct = Math.round(Math.random() * 1000)/10;
    return onEdit(bottle.id, b);
  };

  return (
    <tr>
      <td>{bottle.id}</td>
      <td>{bottle.name}</td>
      <td>{bottle.brand}</td>
      <td>{bottle.type}</td>
      <td>{bottle.country}</td>
      <td>{bottle.contents_cl}</td>
      <td>{bottle.alcohol_pct}</td>
      <td>
        <input type="submit" value="Delete" onClick={handleDelete} />
        <input type="submit" value="Edit" onClick={handleEdit} />
      </td>
    </tr>
  );
};

BottlesListItem.propTypes = {
  bottle: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default BottlesListItem;
