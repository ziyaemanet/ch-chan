import React, { PropTypes } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';

export default function Layout(props) {
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary className="navBar">
          <Menu.Item header>CH-Chan</Menu.Item>
          <Menu.Menu position="right">
            <Link to="/"><Menu.Item name="home" active={true} /></Link>
          </Menu.Menu>
        </Menu>
      </Segment>
      {props.children}
    </div>
  );
}

Layout.PropTypes = {
  clildren: PropTypes.object, //eslint-disable-line
};
