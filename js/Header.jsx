// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean, searchTerm?: string, handleSearchTermChange?: Function }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input type="text" onChange={props.handleSearchTermChange} value={props.searchTerm} placeholder="Search" />
    );
  } else {
    utilSpace = (
      <h1>
        <Link to="/search">
          Back
        </Link>
      </h1>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  searchTerm: '',
  handleSearchTermChange: function noop() {}
};

export default Header;
