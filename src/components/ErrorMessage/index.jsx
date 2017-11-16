import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const propTypes = {
  children: PropTypes.string,
};

const defaultProps = {
  children: '',
};

const ErrorMessage = ({ children }) => (
  <Text>{children}</Text>
);

ErrorMessage.defaultProps = defaultProps;
ErrorMessage.propTypes = propTypes;

export default ErrorMessage;
