import React, { PropTypes } from 'react';

class BottlesListAdd extends React.Component {

  render() {
    return (
      <form>
        <table>
          <tbody>
            <tr>
              <td>New:</td>
              <td><input className="small" type="text" name="name" /></td>
              <td><input className="small" type="text" name="brand" /></td>
              <td><input className="small" type="text" name="type" /></td>
              <td><input className="small" type="text" name="country" /></td>
              <td><input className="small" type="number" name="contents_cl" /></td>
              <td><input className="small" type="number" name="alcohol_pct" step="0.5" /></td>
              <td><input className="small" type="submit" value="Add" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

BottlesListAdd.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default BottlesListAdd;
