import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../LoginForm';


const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    jwt: PropTypes.string.isRequired,
  }).isRequired,
};

const Register = ({
  onSubmit, role, fields, onChange,
}) => (
  <RegisterForm role={role} fields={fields} onChange={onChange} onSubmit={onSubmit} />
);

Register.propTypes = propTypes;
export default Register;
