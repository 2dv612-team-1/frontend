import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { registerPostData } from "../../state/register/actions";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";
import RenderField from "../components/RenderField";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  loggedInAs: PropTypes.string.isRequired,
};

const validate = values => {
  const errors = {};
  !values.username ? errors.username = "Required" : null;
  !values.password ? errors.password = "Required" : null;
  return errors;
};

let RegisterForm = ({ loggedInAs, handleSubmit, register, role }) => {
  const onSubmit = values => {
    let json = values;
    loggedInAs.jwt !== undefined ? (json.jwt = loggedInAs.jwt) : null;
    let url = `${API_HOST}/consumers`;
    switch (role) {
      case "company":
        const company = loggedInAs.username;
        url = `${API_HOST}/companies/${company}/representatives`;
        break;
      case "admin":
        url = `${API_HOST}/companies`;
        break;
      default:
    }
    register(url, json);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="username" name="username" component={RenderField} type="text" />
      <Field label="password" name="password" component={RenderField} type="text" />
      <Button form>Register</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs
});

RegisterForm.propTypes = propTypes;

RegisterForm = reduxForm({
  form: "register",
  validate
})(RegisterForm);

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(registerPostData(url, obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
