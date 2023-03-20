import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <div>{title}</div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
