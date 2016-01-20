import React from 'react';
import { Link } from 'react-router';

class MainMenu extends React.Component {
  render() {
    return (
      <ul>
        <li>Menu:</li>
        <li><Link to="/">Root</Link></li>
        <li><Link to="/fuelsavings">Fuel Savings</Link></li>
        <li><Link to="/simplecounter">Simple Counter</Link></li>
        <li><Link to="/bottles">Bottles</Link></li>
        <li><Link to="/foo">Foo</Link></li>
        <li><Link to="/bar">Bar</Link></li>
        <li><Link to="/planetpluto">Planet Pluto</Link></li>{/* example for NotFoundPage */}
      </ul>
    );
  }
}

export default MainMenu;
