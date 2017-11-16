import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequires,
};

const CreateNewButton = ({ to, children }) => (
  <Link to={to}>
    <input type="submit" value={children} />
  </Link>
);

CreateNewButton.propTypes = PropTypes;

export default CreateNewButton;